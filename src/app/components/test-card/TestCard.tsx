import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke-test component: takes no props, holds no state, and is not wired into
 * any route. Colours and type sizes are the frame's own values, taken from its
 * exported style guide rather than this repo's semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-sans">
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FaCog aria-hidden size={14} className="mt-0.5 shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp aria-hidden size={9} className="shrink-0 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <FaChevronUp aria-hidden size={12} className="shrink-0 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <label
        htmlFor="test-card-token"
        className="mt-[28px] inline-flex w-fit items-center gap-6 text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
        <FaInfoCircle aria-hidden size={14} className="shrink-0" />
      </label>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <label
        htmlFor="test-card-url"
        className="mt-[11px] inline-flex w-fit items-center gap-6 text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
        <FaInfoCircle aria-hidden size={14} className="shrink-0" />
      </label>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[9px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[44px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
