export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#b5b5b5", fontFamily: "Inter, sans-serif" }}
      className="p-5 w-[320px] rounded-lg"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <svg width="10" height="10" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="10" height="10" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 700 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1 mb-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Personal Access Token
        </span>
        {/* Info icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          backgroundColor: "#1e1e1e",
          borderColor: "#4a4a4a",
          color: "#737470",
          fontSize: "11.5px",
        }}
        className="w-full border rounded px-3 py-2 mb-3 outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mb-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Design URL
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          backgroundColor: "#1e1e1e",
          borderColor: "#4a4a4a",
          color: "#737470",
          fontSize: "11.5px",
        }}
        className="w-full border rounded px-3 py-2 mb-5 outline-none"
      />

      {/* Buttons row */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          style={{ backgroundColor: "#b85c38", color: "#d4c4bb", fontSize: "11.5px", fontWeight: 600 }}
          className="px-6 py-2 rounded-lg"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b85c38", color: "#d4c4bb", fontSize: "11.5px", fontWeight: 600 }}
          className="px-6 py-2 rounded-lg"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 700 }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
