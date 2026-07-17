export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e0d9d0", fontFamily: "sans-serif" }}
      className="w-full max-w-sm p-6 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0d9d0"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a07050"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#a07050" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0d9d0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "#e0d9d0" }}>
            Personal Access Token
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a07050"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #555",
            color: "#888",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "#e0d9d0" }}>
            Design URL
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a07050"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #555",
            color: "#888",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          style={{
            backgroundColor: "#c1622f",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#c1622f",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
