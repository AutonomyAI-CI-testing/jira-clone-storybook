export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#2a2a27",
        color: "#b5b5b5",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b5b5b5", lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M7 4L4 1L1 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#8b9291", lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          {/* Chevron down */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b2b2b1", lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a4a4a3", lineHeight: "13.92px" }}>
              Personal Access Token
            </span>
            {/* Info circle */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#a4a4a3" strokeWidth="1.2">
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.5" fill="#a4a4a3" stroke="none" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
              padding: "10px 12px",
            }}
          >
            <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#737470", lineHeight: "13.92px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a3a3a2", lineHeight: "13.92px" }}>
              Design URL
            </span>
            {/* Info circle */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#a3a3a2" strokeWidth="1.2">
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.5" fill="#a3a3a2" stroke="none" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
              padding: "10px 12px",
            }}
          >
            <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#71726e", lineHeight: "12.71px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "4px" }}>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              border: "none",
              padding: "11px 24px",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#8c8078",
              lineHeight: "13.92px",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              border: "none",
              padding: "11px 24px",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#8c8078",
              lineHeight: "13.92px",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ marginTop: "40px" }}>
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b0b0b0", lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
