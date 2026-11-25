import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]";

/**
 * Static reproduction of the "Test Page - Simple" Figma frame.
 * Self-contained smoke test: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px]">UI magician Agent</span>
      <FiSettings aria-hidden size={16} className="mt-px shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={12} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <label
        htmlFor="testElem-token"
        className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <FiInfo aria-hidden size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id="testElem-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <label
        htmlFor="testElem-url"
        className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <FiInfo aria-hidden size={15} className="shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      id="testElem-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[20px] flex justify-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
