export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{ backgroundColor: "#282923", width: "254px", minHeight: "508px", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top stripe */}
      <div style={{ backgroundColor: "#1a1a16", height: "9px", width: "100%" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="7" stroke="#b5b5b5" strokeWidth="1.2" fill="none" />
          <circle cx="8" cy="8" r="2.5" fill="#b5b5b5" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-3">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "32px" }} />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 px-5">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" fill="none" />
              <text x="7.5" y="11" textAnchor="middle" fontSize="8" fill="#a4a4a3" fontFamily="Inter" fontWeight="600">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2"
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" fill="none" />
              <text x="7.5" y="11" textAnchor="middle" fontSize="8" fill="#a3a3a2" fontFamily="Inter" fontWeight="600">i</text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2"
            style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 py-2 font-semibold"
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold"
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer before footer */}
      <div className="flex-1" style={{ minHeight: "40px" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
