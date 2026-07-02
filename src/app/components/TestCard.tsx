export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        minHeight: "100vh",
        padding: "20px 16px",
        fontFamily: "sans-serif",
        color: "#b5b5b5",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ color: "#b5b5b5", fontSize: "16px", fontWeight: 600 }}>UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "13px", fontWeight: 600 }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "16px", fontWeight: 600 }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <span style={{ color: "#a4a4a3", fontSize: "13px", fontWeight: 600 }}>Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
            backgroundColor: "transparent",
            border: "1px solid #4a4a4a",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "13px",
            color: "#737470",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <span style={{ color: "#a3a3a2", fontSize: "13px", fontWeight: 600 }}>Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
            backgroundColor: "transparent",
            border: "1px solid #4a4a4a",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "13px",
            color: "#737470",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#9b4a2a",
            color: "#c8b8b0",
            fontSize: "13px",
            fontWeight: 600,
            padding: "12px 0",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#9b4a2a",
            color: "#c8b8b0",
            fontSize: "13px",
            fontWeight: 600,
            padding: "12px 0",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "16px", fontWeight: 600 }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
