import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Pipeline smoke test: a static reproduction of the "UI magician Agent" Figma
 * panel. Self-contained, no props, no state. Not a design-system addition —
 * the frame's colours have no matching semantic token, so the extracted hex
 * values are used as literal arbitrary Tailwind values on purpose.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black p-5"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings size={15} aria-hidden="true" className="text-[#b5b5b5]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={12} aria-hidden="true" className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-16 flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
        <FiChevronUp size={12} aria-hidden="true" />
        Add New Design
      </h2>

      <div className="mt-7 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={14} aria-hidden="true" className="text-[#a4a4a3]" />
      </div>

      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={14} aria-hidden="true" className="text-[#a3a3a2]" />
      </div>

      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/"
        aria-label="Design URL"
        className="mt-3 h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-5 flex items-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
