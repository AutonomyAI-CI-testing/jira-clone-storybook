// TestCard — self-contained, no props, Tailwind layout
// Matches: Figma design "Test Page - Simple" node 2-2

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen px-4 pt-5 pb-8"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top row: Title + Gear icon */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-[13.5px]" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear / Settings icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row: chevron-up + description */}
      <div className="flex items-center gap-2 mb-10">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round">
          <path d="M1 6L5 1.5L9 6" />
        </svg>
        <span className="font-semibold text-[11.5px] truncate" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round">
          <path d="M1 7L6 1.5L11 7" />
        </svg>
        <span className="font-semibold text-[13.5px]" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold text-[11.5px]" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round">
            <circle cx="7" cy="7" r="6" />
            <line x1="7" y1="6" x2="7" y2="10" />
            <circle cx="7" cy="4.2" r="0.6" fill="#a4a4a3" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2.5 text-[11.5px] font-semibold rounded"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold text-[11.5px]" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          {/* Info circle icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round">
            <circle cx="7" cy="7" r="6" />
            <line x1="7" y1="6" x2="7" y2="10" />
            <circle cx="7" cy="4.2" r="0.6" fill="#a3a3a2" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2.5 text-[10.5px] font-semibold rounded"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
          }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button
          className="flex-1 py-2.5 text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5 text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span className="font-semibold text-[13.5px]" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
