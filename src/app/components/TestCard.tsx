import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Self-contained and inert by design: the fields show placeholders and the
 * buttons carry no handlers. Colours are literal values from the design rather
 * than semantic tokens, because the design's dark/rust palette has no
 * equivalent in this project's token contract.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#111111] font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between border-b border-white/5 bg-[#1c1c1c] px-5 py-[10px]">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings
          aria-hidden="true"
          size={16}
          className="shrink-0 text-[#b5b5b5]"
        />
      </div>

      <div className="flex items-center gap-2 px-5 pt-[18px]">
        <FiChevronUp
          aria-hidden="true"
          size={14}
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2 bg-[#171717] px-5 py-4">
        <FiChevronUp
          aria-hidden="true"
          size={14}
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="px-5">
        <label
          htmlFor="testElem-access-token"
          className="mt-3 flex items-center gap-2 font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
          <FiInfo aria-hidden="true" size={15} className="shrink-0" />
        </label>
        <input
          id="testElem-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-[211px] rounded border border-[#a5adad] bg-[#272822] px-[18px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3] placeholder:text-[#737470]"
        />

        <label
          htmlFor="testElem-design-url"
          className="mt-3 flex items-center gap-2 font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
          <FiInfo aria-hidden="true" size={15} className="shrink-0" />
        </label>
        <input
          id="testElem-design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-[211px] rounded border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#a3a3a2] placeholder:text-[#71726e]"
        />

        <div className="mt-6 flex w-[211px] justify-between">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <p className="mt-12 pb-6 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
