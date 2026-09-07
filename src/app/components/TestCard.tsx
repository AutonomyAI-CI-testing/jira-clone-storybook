export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2822", fontFamily: "Inter, sans-serif", width: "254px" }}
      className="min-h-screen text-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#b5b5b5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51-1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
            stroke="#b5b5b5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 py-1">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 5.5L5 1.5L1 5.5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }} className="truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "48px" }} />

      {/* Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontFamily="Inter" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontFamily="Inter" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
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
              fontWeight: 600,
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
