export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] p-5"
      style={{ backgroundColor: "#1e1e1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M2.929 2.929l1.06 1.06M12.01 12.01l1.06 1.06M2.929 13.071l1.06-1.06M12.01 3.99l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L5 2L9 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[13.5px] font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11.5px] font-semibold" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M6.5 6V9.5" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="6.5" cy="4" r="0.6" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
        >
          <span className="text-[11.5px] font-semibold" style={{ color: "#737470" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11.5px] font-semibold" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M6.5 6V9.5" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="6.5" cy="4" r="0.6" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          <span className="text-[10.5px] font-semibold" style={{ color: "#71726e" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 rounded py-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
