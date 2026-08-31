export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen px-5 py-5 gap-0"
      style={{ backgroundColor: "#232320", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        {/* Chevron up */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold truncate" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
          Personal Access Token
        </span>
        {/* Info icon */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
          <path d="M7 6.5V10" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
        </svg>
      </div>
      <div
        className="flex items-center px-3 py-2.5 mb-4 rounded"
        style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
      >
        <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
          Design URL
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
          <path d="M7 6.5V10" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
        </svg>
      </div>
      <div
        className="flex items-center px-3 py-2.5 mb-6 rounded"
        style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
      >
        <span className="font-semibold" style={{ color: "#71726e", fontSize: "11.5px" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button
          className="flex-1 rounded py-2.5 font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2.5 font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px" }}
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
