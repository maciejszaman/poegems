import { useEffect, useState } from "react";
import * as Shared from "./shared/SharedTypes";

const App = () => {
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
    <main className="main w-full h-full flex flex-col items-center p-4">
      <div className="max-w-[600px] h-full w-full shadow-[8px_8px_0_0_#0C0C0C] rounded-2xl">
        <div className="topbar rounded-t-2xl h-10 leading-8 px-4 flex p-1 flex-row justify-start gap-1 bg-[#303030]">
          <div className="hover:brightness-125 flex flex-row gap-2 cursor-pointer transition-all h-full bg-[#303030] px-1 rounded">
            <img
              className="h-full"
              src="https://www.poewiki.net/images/3/3d/Enlighten_Support_inventory_icon.png"
            />

            <span>POE GEMS</span>
          </div>
          <a href="https://github.com/maciejszaman/poegems">
            <div className="hover:brightness-125 hover:opacity-100 transition-all h-full bg-[#303030] px-1 rounded opacity-20">
              <span>github</span>
            </div>
          </a>
          <a href="https://github.com/maciejszaman/poegems">
            <div className="hover:brightness-125 hover:opacity-100 transition-all h-full bg-[#303030] px-1 rounded opacity-20">
              <span>help</span>
            </div>
          </a>
          <div className="ml-auto cursor-pointer hover:brightness-125 transition-all w-8 text-center h-full bg-[#303030] px-1 rounded self-end">
            <p>X</p>
          </div>
        </div>
        <section className="content max-w-[600px] w-full h-full bg-[#1e1e1e] flex flex-col items-center rounded-b-2xl">
          <div className="my-4 text-center w-full h-fit bg-[#252525] p-2">
            <h1 className="text-2xl">Which gem should I take?</h1>
            <h1 className="opacity-40">
              These are top ten most expensive transfigured gems
            </h1>
            <h3 className="opacity-10 tracking-widest">
              Updated{" "}
              {data?.lastUpdated
                ? new Date(data.lastUpdated).toLocaleString()
                : "never"}
            </h3>
          </div>
          {(data && (
            <div className="grid grid-cols-1 justify-center items-start gap-4 px-8 w-full pb-4">
              {data.gems.map((gem: Shared.Gem, i: number) => (
                <div
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-2 pb-2 bg-[#252525] rounded-2xl p-2"
                  key={gem.name}
                >
                  <img src={gem.icon} />
                  <p>{gem.name}</p>
                  <div className="flex tracking-10 justify-center items-center gap-1 text-2xl">
                    <span>{gem.chaosValue.toFixed(0)}</span>
                    <img
                      src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png"
                      className="h-8 w-8"
                    />
                  </div>
                </div>
              ))}
            </div>
          )) ||
            (error && (
              <div className="text-red-500 text-center px-8 w-full bg-red-700/10 py-4 mb-4">
                <h1 className="text-4xl pb-4">ERROR :(</h1>
                <p className="opacity-50">{error}</p>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default App;
