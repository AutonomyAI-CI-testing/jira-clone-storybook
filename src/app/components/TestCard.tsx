export function TestCard() {
  return (
    <div id="testElem" style={{ backgroundColor: "#1a1a18", minHeight: "100vh", width: "100%", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: "320px", margin: "0 auto", padding: "20px", display: "flex", flexDirection: "column" }}>

        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>UI magician Agent</span>
          {/* Gear icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2 pb-6">
          {/* Up chevron */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M9 6L5 2L1 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div style={{ height: "32px" }} />

        {/* Add New Design */}
        <div className="flex items-center gap-2 mb-5">
          {/* Down chevron */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>Personal Access Token</span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <div style={{ backgroundColor: "#272822", border: "1px solid #a5adad", borderRadius: "4px", padding: "10px 12px" }}>
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>figd_xxxxxxxxxxxxxxxxxx</span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>Design URL</span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <div style={{ backgroundColor: "#272822", border: "2px solid #929291", borderRadius: "4px", padding: "10px 12px" }}>
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>https://www.figma.com/file/:</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            style={{ flex: 1, backgroundColor: "#843a17", borderRadius: "4px", padding: "10px 0", color: "#8c8078", fontSize: "11.5px", fontWeight: 600, border: "none", cursor: "pointer" }}
          >
            Awesome
          </button>
          <button
            style={{ flex: 1, backgroundColor: "#843a17", borderRadius: "4px", padding: "10px 0", color: "#8c8078", fontSize: "11.5px", fontWeight: 600, border: "none", cursor: "pointer" }}
          >
            Prepare
          </button>
        </div>

        {/* Spacer */}
        <div style={{ height: "24px" }} />

        {/* Recent Breakdowns */}
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>Recent Breakdowns</span>

      </div>
    </div>
  );
}

export default TestCard;
