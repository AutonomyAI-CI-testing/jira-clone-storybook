export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] py-5"
      style={{ backgroundColor: "#1e1e1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 5 5 1 1 5" />
        </svg>
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[48px]" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 1 6 7 11 1" />
          </svg>
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="0.5" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2.5 mb-4"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
        >
          <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="0.5" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2.5 mb-5"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-2.5 font-semibold text-center"
            style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 font-semibold text-center"
            style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
