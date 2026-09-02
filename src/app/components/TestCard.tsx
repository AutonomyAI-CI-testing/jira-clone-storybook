export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif", width: "254px", minHeight: "508px" }}
      className="flex flex-col p-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold text-[13.5px] leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6L5 1.5L9 6" />
        </svg>
        <span className="font-semibold text-[11.5px] leading-[13.92px]" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 7L6 1.5L11 7" />
        </svg>
        <span className="font-semibold text-[13.5px] leading-[16.34px]" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-[11.5px] leading-[13.92px]" style={{ color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#a4a4a3" strokeWidth="1">
          <circle cx="6.5" cy="6.5" r="5.5" />
          <line x1="6.5" y1="5.5" x2="6.5" y2="9.5" strokeWidth="1.2" />
          <circle cx="6.5" cy="4" r="0.6" fill="#a4a4a3" stroke="none" />
        </svg>
      </div>

      {/* Token input */}
      <div
        className="w-full px-3 py-2.5 mb-4"
        style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
      >
        <span className="font-semibold text-[11.5px] leading-[13.92px]" style={{ color: "#737470" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-[11.5px] leading-[13.92px]" style={{ color: "#a3a3a2" }}>
          Design URL
        </span>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#a3a3a2" strokeWidth="1">
          <circle cx="6.5" cy="6.5" r="5.5" />
          <line x1="6.5" y1="5.5" x2="6.5" y2="9.5" strokeWidth="1.2" />
          <circle cx="6.5" cy="4" r="0.6" fill="#a3a3a2" stroke="none" />
        </svg>
      </div>

      {/* URL input */}
      <div
        className="w-full px-3 py-2.5 mb-5"
        style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
      >
        <span className="font-semibold text-[10.5px] leading-[12.71px]" style={{ color: "#71726e" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2.5 font-semibold text-[11.5px] leading-[13.92px] cursor-pointer border-0"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5 font-semibold text-[11.5px] leading-[13.92px] cursor-pointer border-0"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <span className="font-semibold text-[13.5px] leading-[16.34px]" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
