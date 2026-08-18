export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] bg-[#1a1a18] overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <svg width="8" height="6" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 6L5 2L9 6" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-[6px]">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a4a4a3" strokeWidth="1">
              <circle cx="7" cy="7" r="6.5" />
              <line x1="7" y1="6" x2="7" y2="10" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" stroke="none" />
            </svg>
          </div>
          <div className="flex items-center bg-[#272822] border border-[#a5adad] rounded px-3 h-[37px]">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-[6px]">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a3a3a2" strokeWidth="1">
              <circle cx="7" cy="7" r="6.5" />
              <line x1="7" y1="6" x2="7" y2="10" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" stroke="none" />
            </svg>
          </div>
          <div className="flex items-center bg-[#272822] border-2 border-[#929291] rounded px-3 h-[37px]">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078]">
            Awesome
          </button>
          <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Flexible spacer */}
      <div className="flex-1" />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
