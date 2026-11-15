import { RiArrowUpSLine, RiInformationLine, RiSettings3Line } from "react-icons/ri";

/**
 * A self-contained card rendered from the "UI magician Agent" Figma frame.
 * Takes no props and holds no state — it exists to prove the build/preview loop.
 * All measurements come from the frame's exported style guide (254 x 508 px).
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1c] px-5 pt-5 pb-[62px] font-primary"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="shrink-0 text-[#b5b5b5]"
        >
          <RiSettings3Line size={16} />
        </button>
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <RiArrowUpSLine size={12} className="shrink-0 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[6px]">
        <RiArrowUpSLine size={14} className="shrink-0 text-[#b2b2b1]" />
        <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <RiInformationLine size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <RiInformationLine size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
