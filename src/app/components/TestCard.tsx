export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <svg
          width="18"
          height="18"
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

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-1 mb-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Personal Access Token
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "2px",
        }}
      >
        <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="flex items-center gap-1 mb-1">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
          Design URL
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          padding: "10px",
          marginBottom: "14px",
          borderRadius: "2px",
        }}
      >
        <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            width: "85px",
            padding: "10px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            width: "85px",
            padding: "10px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
