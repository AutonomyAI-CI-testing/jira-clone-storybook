export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen p-5 gap-3"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Caret up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4L4 1.5L1 4" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "48px" }} />

      {/* Add New Design — section header */}
      <div className="flex items-center gap-2">
        {/* Chevron down */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6L11 1.5" stroke="#b2b2b1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M7 6v4" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "3px",
            height: "36px",
          }}
        >
          <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          {/* Info circle */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M7 6v4" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "3px",
            height: "37px",
          }}
        >
          <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-1">
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
