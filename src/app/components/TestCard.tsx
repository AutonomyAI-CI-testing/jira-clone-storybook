export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen px-5 pt-5 pb-8"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
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
      <div className="flex items-center gap-2 mb-10">
        {/* Chevron up */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="font-semibold truncate" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron up */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2 font-semibold"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            minHeight: "36px",
            display: "flex",
            alignItems: "center",
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          className="w-full px-3 py-2 font-semibold"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
            minHeight: "37px",
            display: "flex",
            alignItems: "center",
          }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-10">
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
