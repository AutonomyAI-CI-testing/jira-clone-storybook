export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#e8e8e8",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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

      {/* Chevron subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "10px",
          color: "#b5703a",
          fontSize: "14px",
        }}
      >
        <span>&#8963;</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ height: "36px" }} />

      {/* Add New Design heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <span style={{ color: "#e8e8e8", fontSize: "15px" }}>&#8963;</span>
        <span style={{ fontWeight: "bold", fontSize: "17px", color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            fontSize: "13px",
            color: "#cccccc",
          }}
        >
          <span>Personal Access Token</span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#383838",
            border: "1px solid #555555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            fontSize: "13px",
            color: "#cccccc",
          }}
        >
          <span>Design URL</span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#383838",
            border: "1px solid #888888",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons row */}
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          style={{
            backgroundColor: "#c1541a",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 28px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#c1541a",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 28px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div
        style={{
          marginTop: "48px",
          fontWeight: "bold",
          fontSize: "17px",
          color: "#e8e8e8",
        }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};
