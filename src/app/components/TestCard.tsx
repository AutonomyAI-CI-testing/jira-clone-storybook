export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen p-0"
      style={{ background: "#1e1d1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
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
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* Up chevron */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path
            d="M9 6L5 2L1 6"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          {/* Down chevron */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1L6 6L11 1"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2.5"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2.5"
            style={{
              background: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2.5 font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
