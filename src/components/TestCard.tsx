export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        maxWidth: "320px",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "20px" }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        {/* Chevron-up icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c0714a", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: "700", fontSize: "18px" }}>Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#dddddd" }}>Personal Access Token</span>
        {/* Info icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          color: "#aaaaaa",
          border: "1px solid #555555",
          borderRadius: "6px",
          padding: "12px 14px",
          fontSize: "14px",
          marginBottom: "16px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#dddddd" }}>Design URL</span>
        {/* Info icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          color: "#aaaaaa",
          border: "1px solid #7a7a7a",
          borderRadius: "6px",
          padding: "12px 14px",
          fontSize: "14px",
          marginBottom: "24px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* Buttons row */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
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
            borderRadius: "8px",
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
      <span style={{ fontWeight: "700", fontSize: "20px" }}>Recent Breakdowns</span>
    </div>
  );
}
