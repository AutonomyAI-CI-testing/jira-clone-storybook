import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Standalone reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke test: no props, no state, no data. The frame's own
 * palette is used as Tailwind arbitrary values because it is a foreign dark
 * design that no semantic theme token matches.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] min-h-[508px] bg-black px-5 py-5 font-primary-bold text-[11.5px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog aria-hidden size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp aria-hidden size={10} className="shrink-0 text-[#8b9291]" />
      <span className="truncate leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp aria-hidden size={13} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <label htmlFor="testCardToken" className="leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </label>
      <FaInfoCircle aria-hidden size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id="testCardToken"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center justify-between">
      <label htmlFor="testCardUrl" className="leading-[14px] text-[#a3a3a2]">
        Design URL
      </label>
      <FaInfoCircle aria-hidden size={15} className="shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      id="testCardUrl"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-1">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
