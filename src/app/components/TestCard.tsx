export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-5 w-64 font-sans"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
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

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
        >
          <path d="M1 4L4 1L7 4" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
        >
          <path d="M1 7L6 1L11 7" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Personal Access Token
        </span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Input 1 — Personal Access Token */}
      <div
        className="w-full px-3 py-2 mb-3"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          fontSize: "11.5px",
          color: "#737470",
          fontWeight: 600,
        }}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
          Design URL
        </span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Input 2 — Design URL */}
      <div
        className="w-full px-3 py-2 mb-5"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          fontSize: "10.5px",
          color: "#71726e",
          fontWeight: 600,
        }}
      >
        https://www.figma.com/file/:
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            cursor: "default",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            cursor: "default",
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
};

export default TestCard;
