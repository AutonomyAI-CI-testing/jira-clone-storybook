export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#e8e8e8",
        fontFamily: "sans-serif",
        padding: "24px 20px",
        maxWidth: "360px",
        minHeight: "100vh",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{ fontWeight: "700", fontSize: "20px", color: "#ffffff" }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b87040", fontSize: "14px" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#ffffff" }}>Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", color: "#e0e0e0" }}>Personal Access Token</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#363636",
          color: "#aaaaaa",
          border: "1px solid #555555",
          borderRadius: "6px",
          padding: "12px 14px",
          fontSize: "14px",
          marginBottom: "18px",
          outline: "none",
        }}
      />

      {/* Design URL label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", color: "#e0e0e0" }}>Design URL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#363636",
          color: "#aaaaaa",
          border: "1px solid #666666",
          borderRadius: "6px",
          padding: "12px 14px",
          fontSize: "14px",
          marginBottom: "24px",
          outline: "none",
        }}
      />

      {/* Buttons row */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b5521a",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 0",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b5521a",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 0",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#ffffff" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
