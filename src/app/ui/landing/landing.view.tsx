import { useState } from "react";
import cx from "classix";

type PropertyType = "commercial" | "residential";

const propertyTabs: Array<{ id: PropertyType; label: string }> = [
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
];

const DEFAULT_PROPERTY_TYPE: PropertyType = "commercial";

export const LandingView = () => {
  const [propertyType, setPropertyType] = useState<PropertyType>(
    DEFAULT_PROPERTY_TYPE
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="font-montserrat text-[64px] font-bold leading-[40px] text-black">
        Let’s Find Your Ideal Space
      </h1>
      <p className="mt-[24px] font-montserrat text-[26px] font-normal leading-[40px] text-black">
        Discover residential and commercial properties tailored to your needs
      </p>
      <div
        role="tablist"
        aria-label="Property type"
        className="mt-[60px] flex items-center gap-[41px]"
      >
        {propertyTabs.map((tab) => {
          const isSelected = tab.id === propertyType;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              // Arrow is needed to bind each tab to its own id
              onClick={() => setPropertyType(tab.id)}
              className={cx(
                "font-montserrat text-[14px] leading-[22px] transition-colors duration-200 ease-out",
                isSelected
                  ? "font-medium text-[#1c252e]"
                  : "font-normal text-[#637381] hover:text-[#1c252e]"
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
