import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained reproduction of the referenced Figma frame: the dark
 * "UI magician Agent" settings panel. Static markup only — no props, no state,
 * no data, and nothing else in the app imports it.
 *
 * The frame's own palette (`#1C1D17` panel, `#272822` fields, `#843A17`
 * buttons) is not part of the app's five themed token sets, so the values are
 * used as literals from the design's style guide rather than as tokens.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col overflow-hidden bg-[#1C1D17] px-5 pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#B5B5B5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#E0E0E0]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#8B9291]" aria-hidden="true" />
      <span className="truncate text-[11.5px] font-semibold text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp size={14} className="text-[#B2B2B1]" aria-hidden="true" />
      <span className="text-[13.5px] font-semibold text-[#B2B2B1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#A4A4A3]">
          Personal Access Token
        </span>
        <FiInfo size={15} className="text-[#A4A4A3]" aria-hidden="true" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#A5ADAD] bg-[#272822] px-[18px] text-[11.5px] text-[#C9C9C7] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#A3A3A2]">
          Design URL
        </span>
        <FiInfo size={15} className="text-[#A3A3A2]" aria-hidden="true" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[11.5px] text-[#C9C9C7] placeholder:text-[#71726E]"
      />
    </div>

    <div className="mt-[22px] flex items-center gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-[47px] text-[13.5px] font-semibold text-[#B0B0B0]">
      Recent Breakdowns
    </p>
  </div>
);
