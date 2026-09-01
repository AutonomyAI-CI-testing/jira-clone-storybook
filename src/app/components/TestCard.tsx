export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
      className="w-[254px] min-h-[508px] flex flex-col"
    >
      {/* Thin top strip */}
      <div style={{ backgroundColor: "#1a1a16", height: "9px" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
          />
          <path
            d="M11.5 7c0-.3-.03-.6-.08-.88l1.9-1.47-1.5-2.6-2.23.9A5 5 0 0 0 8 2.28V0H6v2.28a5 5 0 0 0-1.59.67L2.18 2.05l-1.5 2.6 1.9 1.47A5.05 5.05 0 0 0 2.5 7c0 .3.03.6.08.88L.68 9.35l1.5 2.6 2.23-.9c.48.27.99.48 1.59.67V14h2v-2.28a5 5 0 0 0 1.59-.67l2.23.9 1.5-2.6-1.9-1.47c.05-.28.08-.57.08-.88Z"
            stroke="#b5b5b5"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "48px" }} />

      {/* Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron up */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" style={{ fontSize: "8px", fill: "#a4a4a3", fontFamily: "Inter", fontWeight: 600 }}>i</text>
          </svg>
        </div>

        {/* Personal Access Token input */}
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            lineHeight: "13.92px",
            width: "100%",
            padding: "10px 12px",
            marginBottom: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" style={{ fontSize: "8px", fill: "#a3a3a2", fontFamily: "Inter", fontWeight: 600 }}>i</text>
          </svg>
        </div>

        {/* Design URL input */}
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            lineHeight: "12.71px",
            width: "100%",
            padding: "10px 12px",
            marginBottom: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              lineHeight: "13.92px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              lineHeight: "13.92px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "40px" }} />

      {/* Recent Breakdowns footer */}
      <div className="px-5 pb-6">
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
