export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#f0f0f0", fontFamily: "sans-serif" }}
      className="w-[320px] min-h-screen p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        {/* Chevron-up */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c07a50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c07a50", fontSize: "0.9rem" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0f0f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.9rem" }}>Personal Access Token</span>
          {/* Info icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888",
            fontSize: "0.85rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.9rem" }}>Design URL</span>
          {/* Info icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888",
            fontSize: "0.85rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          style={{
            backgroundColor: "#b85c2a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#b85c2a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
