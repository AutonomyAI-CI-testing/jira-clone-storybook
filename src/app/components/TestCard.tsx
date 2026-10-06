import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static panel rebuilt from the "UI magician Agent" Figma frame.
 *
 * Smoke test: self-contained, no props, no state and no data. The colours and
 * sizes are arbitrary values taken from the design rather than this app's
 * semantic tokens, because the design's palette has no equivalent here.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <label
      htmlFor="testElem-token"
      className="mt-[28px] flex items-center gap-2"
    >
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo aria-hidden size={14} className="shrink-0 text-[#a4a4a3]" />
    </label>
    <input
      id="testElem-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-[211px] rounded-[2px] border border-[#a5adad] bg-[#272822] pl-[19px] font-primary text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <label htmlFor="testElem-url" className="mt-[11px] flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo aria-hidden size={14} className="shrink-0 text-[#a3a3a2]" />
    </label>
    <input
      id="testElem-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] rounded-[2px] border-2 border-[#929291] bg-[#272822] pl-5 font-primary text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="ml-[24px] mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
