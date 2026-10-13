import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a static reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Self-contained: no props, no state, nothing wired up.
 *
 * The colours are literal values because the design's dark palette has no
 * matching entry in this repo's semantic token set.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[60px] pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={14} className="text-[#8b9291]" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-1.5">
      <FiChevronUp size={18} className="text-[#b2b2b1]" />
      <h3 className="text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[28px] flex items-center gap-[10px]">
      <label
        htmlFor="test-card-access-token"
        className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <FiInfo size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      id="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[10px]">
      <label
        htmlFor="test-card-design-url"
        className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <FiInfo size={15} className="text-[#a3a3a2]" />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[23px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[46px] text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
