export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a17", width: "254px", minHeight: "508px" }}
      className="flex flex-col overflow-auto font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mt-3">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ minHeight: "60px", flex: 1 }} />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "14px" }}>
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a4a4a3" fontSize="7" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad", height: "36px" }}
            className="flex items-center px-3 rounded"
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "14px" }}>
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a3a3a2" fontSize="7" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            style={{ backgroundColor: "#272822", border: "2px solid #929291", height: "37px" }}
            className="flex items-center px-3 rounded"
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}
            className="flex-1 h-[37px] flex items-center justify-center"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}
            className="flex-1 h-[37px] flex items-center justify-center"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
