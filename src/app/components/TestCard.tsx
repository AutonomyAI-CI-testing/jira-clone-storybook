const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.8v3.9"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1b1b1b] px-5 pt-5 pb-5 font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span>UI magician Agent</span>
      <span>
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span>Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <label htmlFor="test-card-token">Personal Access Token</label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-sm border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      <label htmlFor="test-card-url">Design URL</label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-9 w-full rounded-sm border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-[24px] flex gap-[17px]">
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

    <p className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);
