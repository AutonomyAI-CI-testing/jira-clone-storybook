export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1a1a17",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Section 1 – Header row */}
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Settings gear icon */}
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

      {/* Section 2 – Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1L1 4"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 4 – Add New Design block */}
      <div className="flex flex-col gap-3">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-1">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 2L6 7L11 2"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            {/* Info circle icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="11" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              padding: "9px 12px",
            }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="11" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              padding: "9px 12px",
            }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              borderRadius: "4px",
              border: "none",
              padding: "10px 0",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              borderRadius: "4px",
              border: "none",
              padding: "10px 0",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Section 5 – Spacer */}
      <div className="h-8" />

      {/* Section 6 – Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
