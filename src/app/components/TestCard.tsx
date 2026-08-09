export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{ width: 254, minHeight: 508, backgroundColor: "#1a1a17", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span style={{ fontSize: 13.5, fontWeight: 600, color: "#b5b5b5", lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span style={{ fontSize: 11.5, fontWeight: 600, color: "#8b9291", lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1, minHeight: 32 }} />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron down */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 1 6 7 11 1" />
          </svg>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: "#b2b2b1", lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontSize: 11.5, fontWeight: 600, color: "#a4a4a3", lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="3" />
          </svg>
        </div>

        {/* PAT input */}
        <div
          className="flex items-center px-3 py-2 mb-4"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad", borderRadius: 2 }}
        >
          <span style={{ fontSize: 11.5, fontWeight: 600, color: "#737470", lineHeight: "13.92px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontSize: 11.5, fontWeight: 600, color: "#a3a3a2", lineHeight: "13.92px" }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="3" />
          </svg>
        </div>

        {/* URL input */}
        <div
          className="flex items-center px-3 py-2 mb-5"
          style={{ backgroundColor: "#272822", border: "2px solid #929291", borderRadius: 2 }}
        >
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "#71726e", lineHeight: "12.71px" }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 flex items-center justify-center py-2"
            style={{ backgroundColor: "#843a17", borderRadius: 4, fontSize: 11.5, fontWeight: 600, color: "#8c8078", lineHeight: "13.92px", border: "none", cursor: "pointer" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center py-2"
            style={{ backgroundColor: "#843a17", borderRadius: 4, fontSize: 11.5, fontWeight: 600, color: "#8c8078", lineHeight: "13.92px", border: "none", cursor: "pointer" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span style={{ fontSize: 13.5, fontWeight: 600, color: "#b0b0b0", lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
