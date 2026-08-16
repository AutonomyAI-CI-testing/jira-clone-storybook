export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] h-[508px] bg-[#1e1e1b] flex flex-col overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
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

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* Up chevron */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 1.5L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="flex-1 max-h-8" />

      {/* 4. Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          {/* Down chevron */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 1L5 5.5L9 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* 5. Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7" y1="6" x2="7" y2="10" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full rounded-sm px-3 py-2.5"
            style={{ background: "#272822", border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* 6. Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7" y1="6" x2="7" y2="10" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full rounded-sm px-3 py-2.5"
            style={{ background: "#272822", border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* 7. Buttons */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            className="text-[11.5px] font-semibold text-[#8c8078] rounded"
            style={{ background: "#843a17", borderRadius: "4px", width: "85px", height: "37px" }}
          >
            Awesome
          </button>
          <button
            className="text-[11.5px] font-semibold text-[#8c8078] rounded"
            style={{ background: "#843a17", borderRadius: "4px", width: "85px", height: "37px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* 8. Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
