import { useEffect, useState } from "react";
import * as Shared from "../../shared/SharedTypes";
import ChaosOrb from "../Icons/ChaosOrb";

const Divinefont = () => {
  const [data, setData] = useState<Shared.GemsData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("./gems-data.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <main className="w-screen min-h-screen bg-[url(https://web.poecdn.com/protected/image/promo/ascendancy/videobg.jpg?key=TR2LmzMpyv-AZFIOQFS60A)] bg-cover bg-center bg-no-repeat">
      <section className="w-full min-h-screen bg-black/75 flex flex-col items-center justify-center gap-4">
        <section className="max-w-150 w-full flex flex-col items-center justify-center gap-4 text-text">
          <div className="bg-base border-2 w-full border-text">
            <div className="group flex items-center gap-4 px-4 py-2">
              <img
                className="h-20 w-20"
                src="https://www.poewiki.net/images/3/37/Offering_to_the_Goddess_inventory_icon.png"
                alt="Offering to the goddess"
              />
              <h1 className="text-4xl">Divine Font helper</h1>
            </div>
            <div className="group2 flex bg-surface px-4 py-2 items-center gap-4">
              <a
                href="https://github.com/maciejszaman"
                className="hover:brightness-125 hover:underline transition-all opacity-50"
              >
                maciejszaman
              </a>
              <a
                href="https://github.com/maciejszaman/poetools"
                className="hover:brightness-125 hover:underline transition-all opacity-50"
              >
                github
              </a>
              <a
                href="https://github.com/maciejszaman/poetools/blob/master/README.md"
                className="hover:brightness-125 hover:underline transition-all opacity-50"
              >
                help
              </a>
            </div>
          </div>
          <div className="bg-base w-full border-2 border-text">
            <div className="py-2 px-4">
              <p className="text-2xl">Most expensive gems:</p>
              <h3 className="opacity-50 tracking-widest">
                Updated{" "}
                {data?.lastUpdated
                  ? new Date(data.lastUpdated).toLocaleString()
                  : "never"}
              </h3>
            </div>
            <div className="h-0.5 w-full bg-text mb-4"></div>
            {(data && (
              <div className="grid grid-cols-1 justify-center items-start gap-4 w-full pb-4">
                {data.gems.map((gem: Shared.Gem) => (
                  <div
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2 bg-surface px-6"
                    key={gem.name}
                  >
                    <div className="bg-base border border-text">
                      <img src={gem.icon} />
                    </div>

                    <p className="text-xl tracking-tighter">{gem.name}</p>
                    <div className="flex h-full justify-center tracking-tighter items-center px-2 gap-1 text-xl bg-base border border-text">
                      <span>{gem.chaosValue.toFixed(0)}</span>
                      <ChaosOrb />
                    </div>
                  </div>
                ))}
              </div>
            )) ||
              (error && (
                <div className="bg-red-600/50 text-center text-text px-8 w-full py-4 mb-4">
                  <h1 className="text-4xl pb-4">ERROR</h1>
                  <p className="opacity-75">{error}</p>
                  <a href="https://github.com/maciejszaman/poetools">
                    <div className="mt-6 border border-text w-fit mx-auto px-4 py-2 text-3xl hover:scale-105">
                      <span>github</span>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Divinefont;
