export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#252523",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 20px 8px",
        }}
      >
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 20px 12px" }}>
        {/* Chevron up */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#8b9291" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1,6 5,1 9,6" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Mid spacer */}
      <div style={{ flex: 1, minHeight: "48px", maxHeight: "72px" }} />

      {/* Add New Design section */}
      <div style={{ padding: "0 20px" }}>
        {/* Section heading */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1,6 5,1 9,6" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Personal Access Token
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2.5" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              padding: "10px 12px",
            }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Design URL
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2.5" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              padding: "10px 12px",
            }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              padding: "11px 0",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              padding: "11px 0",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ flex: 1, minHeight: "40px", maxHeight: "80px" }} />

      {/* Recent Breakdowns */}
      <div style={{ padding: "0 20px 24px" }}>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
