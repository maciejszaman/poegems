export interface Gem {
  name: string;
  chaosValue: number;
  icon: string;
}

export interface GemsData {
  league: string;
  lastUpdated: string;
  gems: Gem[];
}