import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained and presentational only — no props, no state, no data.
 * Values are the frame's own, not this project's semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-5 pb-10 pt-5 font-[family-name:Inter,system-ui,sans-serif] text-[13.5px] leading-[16.34px]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-semibold text-[#b5b5b5]">UI magician Agent</span>
      <FiSettings size={16} aria-hidden="true" className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={10} aria-hidden="true" className="shrink-0 text-[#8b9291]" />
      <span className="min-w-0 flex-1 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={12} aria-hidden="true" className="shrink-0 text-[#b2b2b1]" />
      <span className="font-semibold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-1">
      <label
        htmlFor="testCard-personalAccessToken"
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <FiInfo size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>
    <input
      id="testCard-personalAccessToken"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-solid border-[#a5adad] bg-[#272822] px-2 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-1">
      <label
        htmlFor="testCard-designUrl"
        className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <FiInfo size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>
    <input
      id="testCard-designUrl"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-[211px] border-2 border-solid border-[#929291] bg-[#272822] px-2 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-5 flex gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded border-none bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded border-none bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <div className="mt-12 font-semibold text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);

export default TestCard;
