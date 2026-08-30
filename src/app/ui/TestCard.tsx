export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ background: "#272822", fontFamily: "Inter, sans-serif", width: "254px", minHeight: "508px" }}
      className="flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1.5A6.5 6.5 0 1 0 8 14.5A6.5 6.5 0 0 0 8 1.5Z"
            stroke="none"
          />
          <path
            d="M6.5 1.8l-.3.9a5 5 0 0 0-.8.4l-.9-.4-.9.9.4.9a5 5 0 0 0-.4.8l-.9.3V7l.9.3a5 5 0 0 0 .4.8l-.4.9.9.9.9-.4a5 5 0 0 0 .8.4l.3.9H7.5l.3-.9a5 5 0 0 0 .8-.4l.9.4.9-.9-.4-.9a5 5 0 0 0 .4-.8l.9-.3V6.5l-.9-.3a5 5 0 0 0-.4-.8l.4-.9-.9-.9-.9.4a5 5 0 0 0-.8-.4l-.3-.9H6.5Z"
            stroke="#b5b5b5"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 6L5 2L1 6" stroke="#8b9291" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5 pb-6">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M11 7L6 2L1 7" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Personal Access Token
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7 6v4" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5 rounded"
            style={{ background: "#272822", border: "1px solid #a5adad" }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Design URL
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7 6v4" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2.5 rounded"
            style={{ background: "#272822", border: "2px solid #929291" }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              padding: "10px 0",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              color: "#8c8078",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              padding: "10px 0",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              color: "#8c8078",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ minHeight: "28px" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
