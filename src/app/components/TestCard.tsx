export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen font-sans"
      style={{ backgroundColor: "#1c1c1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top strip */}
      <div className="w-full h-2" style={{ backgroundColor: "#272822" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="px-5 pb-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v1M12 12v4" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v1M12 12v4" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
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
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-8">
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
