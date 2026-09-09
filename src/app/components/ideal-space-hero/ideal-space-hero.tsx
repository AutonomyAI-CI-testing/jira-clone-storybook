import { useState } from "react";
import cx from "classix";

type SpaceType = "commercial" | "residential";

const TABS: { id: SpaceType; label: string }[] = [
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
];

export const IdealSpaceHero = (): JSX.Element => {
  const [selected, setSelected] = useState<SpaceType>("commercial");

  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-16 font-montserrat">
      <h1 className="text-center text-[64px] font-bold leading-[40px] text-black">
        Let’s Find Your Ideal <span className="text-[#ff0000]">Space</span>
      </h1>
      <p className="mt-6 text-[26px] font-normal leading-[40px] text-black">
        Discover residential and commercial properties tailored to your needs
      </p>
      <div className="mt-14 flex items-center gap-10" role="tablist">
        {TABS.map((tab) => {
          const isActive = tab.id === selected;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(tab.id)}
              className={cx(
                "text-sm leading-[22px]",
                isActive
                  ? "font-medium text-[#1c252e]"
                  : "font-normal text-[#637381]"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
