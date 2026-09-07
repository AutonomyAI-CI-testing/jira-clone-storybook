export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col font-sans"
      style={{ backgroundColor: "#272822", width: "508px", minHeight: "1016px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-10 pt-10 pb-6">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "27px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-4 px-10 pb-20">
        <svg width="20" height="14" viewBox="0 0 10 7" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 6 5 2 9 6" />
        </svg>
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "23px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-10">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-10">
          <svg width="24" height="16" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 7 6 2 11 7" />
          </svg>
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "27px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "23px" }}>
              Personal Access Token
            </span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-6 py-4"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span className="font-semibold" style={{ color: "#737470", fontSize: "23px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "23px" }}>
              Design URL
            </span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-6 py-4"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span className="font-semibold" style={{ color: "#71726e", fontSize: "21px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <button
            className="flex-1 py-4 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "23px",
              borderRadius: "8px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-4 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "23px",
              borderRadius: "8px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-10 pt-20">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "27px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
