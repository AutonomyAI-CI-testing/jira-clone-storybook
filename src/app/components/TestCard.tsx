/**
 * TestCard — standalone render of the "UI magician Agent" panel from Figma.
 * Self-contained: no props, and no imports beyond what the JSX needs.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" strokeWidth="1" />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
    <path d="M7.5 6.9V11" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1e1e1e] px-5 pt-5 font-primary-bold text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="ml-[6px] mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-[10px] text-[#a4a4a3]">
      <label
        htmlFor="testElem-token"
        className="text-[11.5px] leading-[13.92px]"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[10px] text-[#a3a3a2]">
      <label htmlFor="testElem-url" className="text-[11.5px] leading-[13.92px]">
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[23px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;
