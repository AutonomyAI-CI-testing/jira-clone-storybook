export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#2b2b27] font-[Inter,sans-serif] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5] leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M9 5L5 1L1 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 flex-1">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M11 6L6 1L1 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3] leading-[13.92px]">
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.75" stroke="#a4a4a3" strokeWidth="1" />
              <text x="7.5" y="11.5" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontWeight="700" fontFamily="Inter,sans-serif">i</text>
            </svg>
          </div>
          <div className="w-full h-[37px] bg-[#272822] border border-[#a5adad] flex items-center px-3">
            <span className="text-[11.5px] font-semibold text-[#737470] leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2] leading-[13.92px]">
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.75" stroke="#a3a3a2" strokeWidth="1" />
              <text x="7.5" y="11.5" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontWeight="700" fontFamily="Inter,sans-serif">i</text>
            </svg>
          </div>
          <div className="w-full h-[37px] bg-[#272822] border-2 border-[#929291] flex items-center px-3">
            <span className="text-[10.5px] font-semibold text-[#71726e] leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="h-[37px] px-5 bg-[#843a17] rounded-[4px] text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]">
            Awesome
          </button>
          <button className="h-[37px] px-5 bg-[#843a17] rounded-[4px] text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span className="text-[13.5px] font-semibold text-[#b0b0b0] leading-[16.34px]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
