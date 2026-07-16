export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff", minHeight: "100vh" }}
      className="p-4 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b07050"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b07050", fontSize: "0.9rem" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "1.5rem" }} />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.95rem", color: "#e0e0e0" }}>Personal Access Token</span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#e0e0e0",
            borderRadius: "4px",
            padding: "10px 12px",
            width: "100%",
            outline: "none",
            fontSize: "0.9rem",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.95rem", color: "#e0e0e0" }}>Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#e0e0e0",
            borderRadius: "4px",
            padding: "10px 12px",
            width: "100%",
            outline: "none",
            fontSize: "0.9rem",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          style={{
            backgroundColor: "#a0522d",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 0",
            flex: 1,
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#a0522d",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 0",
            flex: 1,
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ marginTop: "1.5rem" }}>
        <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
