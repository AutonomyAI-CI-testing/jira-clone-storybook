export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "256px", fontFamily: "Inter, sans-serif" }}
      className="flex flex-col px-5 pt-5 pb-8 min-h-screen"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Sub-header: up-chevron + subtitle */}
      <div className="flex items-center gap-2 mb-8">
        {/* Up chevron */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 6L5 2L1 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section header: down-chevron + label */}
        <div className="flex items-center gap-2">
          {/* Down chevron */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            {/* Circle-i icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7 6v4" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7" cy="4.2" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
              Design URL
            </span>
            {/* Circle-i icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7 6v4" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7" cy="4.2" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-8" />

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
