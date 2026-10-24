const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 7.5v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.9" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black pb-[62px] font-primary">
    <div className="h-[9px] bg-[#151515]" />

    <div className="px-5 pt-[11px]">
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
        <span className="font-primary-bold text-2xs">From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
        <h3 className="font-primary-bold text-xs">Add New Design</h3>
      </div>

      <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
        <label htmlFor="test-card-token" className="font-primary-bold text-2xs">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
        <label htmlFor="test-card-url" className="font-primary-bold text-2xs">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-2xs text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[21px] flex justify-center gap-[17px]">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h3 className="mt-[46px] font-primary-bold text-xs text-[#b0b0b0]">Recent Breakdowns</h3>
    </div>
  </div>
);
