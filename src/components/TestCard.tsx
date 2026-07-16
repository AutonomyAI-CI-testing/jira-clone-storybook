export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff", minHeight: "100vh", padding: "24px 20px", fontFamily: "sans-serif", maxWidth: "400px" }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
        {/* Chevron up */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b07050", fontSize: "14px" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", color: "#e0e0e0" }}>Personal Access Token</span>
          {/* Info icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#e0e0e0",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", color: "#e0e0e0" }}>Design URL</span>
          {/* Info icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#e0e0e0",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons row */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 0",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 0",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
