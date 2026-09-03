export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="min-h-[508px] overflow-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
          className="font-semibold"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mt-3">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
          className="font-semibold"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design row */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          className="font-semibold"
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            className="font-semibold"
          >
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#a4a4a3" fontFamily="Inter,sans-serif">i</text>
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "37px",
          }}
          className="w-full flex items-center px-3"
        >
          <span
            style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            className="font-semibold"
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            className="font-semibold"
          >
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#a3a3a2" fontFamily="Inter,sans-serif">i</text>
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
          className="w-full flex items-center px-3"
        >
          <span
            style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
            className="font-semibold"
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            borderRadius: "4px",
            height: "37px",
          }}
          className="flex-1 font-semibold"
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            borderRadius: "4px",
            height: "37px",
          }}
          className="flex-1 font-semibold"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
          className="font-semibold"
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
