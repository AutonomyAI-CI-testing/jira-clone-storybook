import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * frame (Figma node 2-2). Smoke test: static markup, no props, no state.
 *
 * The frame's own colours are written as arbitrary values on purpose. The
 * repo's Tailwind theme exposes only theme-driven semantic tokens, so styling
 * this panel with them would re-skin it per theme instead of reproducing the
 * frame.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    {/* Collapsed sub-header */}
    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
      />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[56px] flex items-center gap-2">
      <FiChevronUp
        size={14}
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[26px]">
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[16px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
