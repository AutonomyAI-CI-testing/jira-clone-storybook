export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        minHeight: "100vh",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron subtitle row */}
      <div className="flex items-center" style={{ marginTop: "10px", gap: "8px" }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5703a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b5703a", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div
        className="flex items-center"
        style={{ marginTop: "40px", marginBottom: "20px", gap: "10px" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "16px" }}>
        <div className="flex items-center" style={{ gap: "8px", marginBottom: "8px" }}>
          <span style={{ color: "#cccccc", fontSize: "13px", fontWeight: "600" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="1.8"
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
          readOnly
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#363636",
            border: "1px solid #555555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "24px" }}>
        <div className="flex items-center" style={{ gap: "8px", marginBottom: "8px" }}>
          <span style={{ color: "#cccccc", fontSize: "13px", fontWeight: "600" }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="1.8"
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
          readOnly
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#363636",
            border: "1px solid #666666",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex items-center" style={{ gap: "16px" }}>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#c1541a",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "13px 0",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#a84515",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "13px 0",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div style={{ marginTop: "48px" }}>
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
