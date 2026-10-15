import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static port of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no data, no state. Colours, type sizes
 * and measures are the frame's own values rather than the app's semantic
 * tokens, because the frame is an external, dark, off-palette design.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 font-[Inter,system-ui,sans-serif] font-semibold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button type="button" aria-label="Settings" className="cursor-pointer">
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <FiChevronUp className="h-[5px] w-2 text-[#8b9291]" aria-hidden="true" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <FiChevronUp className="h-2 w-3 text-[#b2b2b1]" aria-hidden="true" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo className="h-[15px] w-[15px] text-[#e0e0e0]" aria-hidden="true" />
    </div>

    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] leading-[13.92px] font-semibold text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo className="h-[15px] w-[15px] text-[#e0e0e0]" aria-hidden="true" />
    </div>

    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] leading-[12.71px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
