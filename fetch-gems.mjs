#!/usr/bin/env node

import { writeFileSync } from 'fs'

const args    = process.argv.slice(2)
const league  = args[args.indexOf('--league') + 1] ?? 'Mirage'
const outPath = args[args.indexOf('--out')    + 1] ?? 'public/gems-data.json'

const API_URL = `https://poe.ninja/api/data/itemoverview?league=${encodeURIComponent(league)}&type=SkillGem`

function isTransfigured(g) {
  return !!g.tradeFilter?.query?.type?.discriminator
}

async function main() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error(`poe.ninja returned HTTP ${res.status}`)
  const { lines = [] } = await res.json()
  const top10 = lines
    .filter(g =>
      isTransfigured(g)         &&
      g.gemLevel === 1           &&
      (g.gemQuality ?? 0) === 0  &&
      !g.corrupted &&
      !g.name.includes("Trarthus")
    )
    .sort((a, b) => (b.chaosValue ?? 0) - (a.chaosValue ?? 0))
    .slice(0, 10)
    .map(g => ({
      name:       g.name,
      chaosValue: g.chaosValue ?? 0,
      icon:       g.icon       ?? null,
    }))

  const output = { league, lastUpdated: new Date().toISOString(), gems: top10 }

  writeFileSync(outPath, JSON.stringify(output, null, 2))
}

main().catch(err => { console.error('Error:', err.message); process.exit(1) })
