export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] flex flex-col px-5 py-5"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold text-[13.5px] leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
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
      <div className="flex items-center gap-2 mb-6">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold text-[11.5px] leading-[13.92px] truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold text-[13.5px] leading-[16.34px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="font-semibold text-[11.5px] leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#a4a4a3" strokeWidth="1.2">
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" stroke="none" />
          </svg>
        </div>
        <div
          className="flex items-center px-3 h-[37px]"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span
            className="font-semibold text-[11.5px] leading-[13.92px]"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="font-semibold text-[11.5px] leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#a3a3a2" strokeWidth="1.2">
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" stroke="none" />
          </svg>
        </div>
        <div
          className="flex items-center px-3 h-[37px]"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span
            className="font-semibold text-[10.5px] leading-[12.71px]"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 h-[37px] flex items-center justify-center font-semibold text-[11.5px] leading-[13.92px]"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 h-[37px] flex items-center justify-center font-semibold text-[11.5px] leading-[13.92px]"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          className="font-semibold text-[13.5px] leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
