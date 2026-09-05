export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ background: "#272822", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="flex flex-col p-5 gap-3 min-h-[500px]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mt-1">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a4a4a3" strokeWidth="1.2">
            <circle cx="7" cy="7" r="6" />
            <line x1="7" y1="6" x2="7" y2="10" strokeLinecap="round" />
            <circle cx="7" cy="4.2" r="0.5" fill="#a4a4a3" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2"
          style={{ background: "#272822", border: "1px solid #a5adad", borderRadius: "2px" }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#a3a3a2" strokeWidth="1.2">
            <circle cx="7" cy="7" r="6" />
            <line x1="7" y1="6" x2="7" y2="10" strokeLinecap="round" />
            <circle cx="7" cy="4.2" r="0.5" fill="#a3a3a2" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2"
          style={{ background: "#272822", border: "2px solid #929291", borderRadius: "2px" }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 py-2.5"
          style={{ background: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5"
          style={{ background: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
