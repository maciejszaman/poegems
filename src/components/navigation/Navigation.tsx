import { Link } from "react-router";

const Poetools = () => {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(3px) brightness(0.45)",
          transform: "scale(1.05)",
        }}
      >
        <source
          src="https://web.poecdn.com/video/oriath/headtwo.mp4"
          type="video/mp4"
        />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-[#1e1e1e] border-2 max-w-120 p-4 text-[#f7f7f7] rounded-2xl border-[#3f3f3f]">
          <div className="text-center mb-6">
            <h1 className="text-4xl text-center">POE_Tools</h1>
            <span className="opacity-50 text-center text-sm">
              Path of Exile quick and simple tools
            </span>
            <a href="https://github.com/maciejszaman/poetools">
              <p>github</p>
            </a>
          </div>
          <Link
            to="/divinefont"
            className="hover:brightness-125 transition-all"
          >
            <div className="p-4 gap-4 flex items-center rounded-2xl bg-[#303030] border border-[#3f3f3f] mb-4">
              <img src="https://www.poewiki.net/images/3/37/Offering_to_the_Goddess_inventory_icon.png" />
              <div className="flex flex-col">
                <span>Divine Font helper</span>
                <span className="opacity-50 text-sm">
                  Quickly check which gem is worth taking in the Divine Font
                </span>
              </div>
            </div>
          </Link>
          <Link to="/offhand" className="hover:underline transition-all">
            <div className="p-4 gap-4 flex items-center border-2 border-text/50 border-shadow-[]">
              <img src="https://www.poewiki.net/images/3/37/Offering_to_the_Goddess_inventory_icon.png" />
              <div className="flex flex-col">
                <span>Offhand gems helper</span>
                <span className="opacity-50 text-sm">
                  Equip your offhand setup for max profitability
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Poetools;
