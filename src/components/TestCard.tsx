export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#e0e0e0", fontFamily: "sans-serif" }}
      className="w-full max-w-sm mx-auto min-h-screen p-5 flex flex-col gap-4"
    >
      {/* Section 1: Header row */}
      <div className="flex items-center justify-between pt-2">
        <span style={{ color: "#f0f0f0", fontWeight: 700, fontSize: "1.25rem" }}>
          UI magician Agent
        </span>
        {/* Gear / Settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Section 2: Collapsed row */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0522d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c1724f", fontSize: "0.9rem" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Section 3: Add New Design */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#f0f0f0", fontWeight: 700, fontSize: "1.15rem" }}>
          Add New Design
        </span>
      </div>

      {/* Section 4: Personal Access Token */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <label style={{ color: "#d0d0d0", fontSize: "0.9rem", fontWeight: 500 }}>
            Personal Access Token
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
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
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#888888",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "0.9rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* Section 5: Design URL */}
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center gap-2">
          <label style={{ color: "#d0d0d0", fontSize: "0.9rem", fontWeight: 500 }}>
            Design URL
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
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
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#888888",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "0.9rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* Section 6: Action buttons */}
      <div className="flex items-center gap-4 mt-2 justify-center">
        <button
          type="button"
          style={{
            backgroundColor: "#b5451b",
            color: "#f5e6dc",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#b5451b",
            color: "#f5e6dc",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* Section 7: Recent Breakdowns */}
      <div>
        <span style={{ color: "#f0f0f0", fontWeight: 700, fontSize: "1.15rem" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
