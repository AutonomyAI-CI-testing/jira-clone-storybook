export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] bg-[#222220] font-sans"
    >
      {/* Thin top strip */}
      <div className="w-full h-[9px] bg-[#111]" />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Sub-header row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M7 4L4 1L1 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] font-semibold text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M11 7L6 2L1 7" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b2b2b1] font-semibold text-[13.5px] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[#a4a4a3] font-semibold text-[11.5px] leading-[13.92px]">
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.75" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="w-full rounded bg-[#272822] border border-[#a5adad] px-3 py-2.5">
            <span className="text-[#737470] font-semibold text-[11.5px] leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[#a3a3a2] font-semibold text-[11.5px] leading-[13.92px]">
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.75" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="w-full rounded bg-[#272822] border-2 border-[#929291] px-3 py-2.5">
            <span className="text-[#71726e] font-semibold text-[10.5px] leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button className="rounded-[4px] bg-[#843a17] w-[85px] h-[37px] flex items-center justify-center">
            <span className="text-[#8c8078] font-semibold text-[11.5px] leading-[13.92px]">
              Awesome
            </span>
          </button>
          <button className="rounded-[4px] bg-[#843a17] w-[85px] h-[37px] flex items-center justify-center">
            <span className="text-[#8c8078] font-semibold text-[11.5px] leading-[13.92px]">
              Prepare
            </span>
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ minHeight: 32 }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="text-[#b0b0b0] font-semibold text-[13.5px] leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
