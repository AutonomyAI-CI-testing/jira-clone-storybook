export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen flex flex-col"
      style={{ backgroundColor: "#272823", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
          <path d="M1 5L4.5 1.5L8 5" stroke="#8b9291" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold truncate" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontFamily="Inter" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5"
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
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontFamily="Inter" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5"
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
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-2.5 font-semibold text-center"
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
            className="flex-1 py-2.5 font-semibold text-center"
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

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
