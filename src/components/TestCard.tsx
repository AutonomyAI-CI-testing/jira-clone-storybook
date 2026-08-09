export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        color: "#b5b5b5",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <svg
          width="16"
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

      {/* Subtitle */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1,6 5,1 9,6" />
        </svg>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1,6 5,1 9,6" />
        </svg>
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
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
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          width: "100%",
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          color: "#737470",
          fontSize: "11.5px",
          fontWeight: 600,
          padding: "8px 10px",
          boxSizing: "border-box",
          outline: "none",
          marginBottom: "10px",
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Design URL label */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a3a3a2" }}>
          Design URL
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
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
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          width: "100%",
          backgroundColor: "#272822",
          border: "2px solid #929291",
          color: "#71726e",
          fontSize: "11.5px",
          fontWeight: 600,
          padding: "8px 10px",
          boxSizing: "border-box",
          outline: "none",
          marginBottom: "16px",
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#843a17",
            borderRadius: "4px",
            border: "none",
            padding: "10px 0",
            fontSize: "11.5px",
            fontWeight: 600,
            color: "#8c8078",
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
            borderRadius: "4px",
            border: "none",
            padding: "10px 0",
            fontSize: "11.5px",
            fontWeight: 600,
            color: "#8c8078",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b0b0b0" }}>
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
