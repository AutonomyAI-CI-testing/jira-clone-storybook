export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a17] flex flex-col gap-3 p-5"
      style={{ fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="14"
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
      <div className="flex items-center gap-2">
        {/* Chevron up (small) */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 4L4 1L7 4"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-4">
        {/* Chevron up (larger) */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 7L6 2L11 7"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.6" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="w-full rounded px-3 py-2.5 text-[11.5px] font-semibold text-[#737470]"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.6" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="w-full rounded px-3 py-2.5 text-[11.5px] font-semibold text-[#71726e]"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 py-2.5 rounded text-[11.5px] font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5 rounded text-[11.5px] font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
