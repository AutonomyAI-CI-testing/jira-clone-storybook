export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif", width: "254px", minHeight: "508px", background: "#1a1a18" }}
      className="flex flex-col text-[#b5b5b5] overflow-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5] leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
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
      <div className="flex items-center gap-2 px-5 pb-6">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="shrink-0">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0">
            <path d="M1 6L6 1L11 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3] leading-[13.92px]">
              Personal Access Token
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
              width: "100%",
              padding: "8px 10px",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              outline: "none",
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2] leading-[13.92px]">
              Design URL
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            style={{
              background: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
              width: "100%",
              padding: "8px 10px",
              color: "#71726e",
              fontSize: "10.5px",
              fontWeight: 600,
              lineHeight: "12.71px",
              outline: "none",
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            style={{ background: "#843a17", borderRadius: "4px", flex: 1 }}
            className="py-2.5 text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]"
          >
            Awesome
          </button>
          <button
            style={{ background: "#843a17", borderRadius: "4px", flex: 1 }}
            className="py-2.5 text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0] leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
