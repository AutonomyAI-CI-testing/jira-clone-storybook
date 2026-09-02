export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif", width: "256px" }}
      className="flex flex-col px-5 py-5 min-h-fit"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron up */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M9 5L5 1L1 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        {/* Chevron up */}
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path d="M11 6L6 1L1 6" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
          Personal Access Token
        </span>
        {/* Info icon */}
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
          <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
        </svg>
      </div>

      {/* Token input */}
      <div
        className="w-full mb-4 px-3 py-2"
        style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
      >
        <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
          Design URL
        </span>
        {/* Info icon */}
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
          <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
        </svg>
      </div>

      {/* URL input */}
      <div
        className="w-full mb-5 px-3 py-2"
        style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
      >
        <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 font-semibold"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
