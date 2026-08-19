export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", minHeight: "508px", fontFamily: "Inter, sans-serif" }}
      className="overflow-auto"
    >
      {/* Top thin bar */}
      <div style={{ backgroundColor: "#1a1a1a", height: "9px" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.3" />
          <path
            d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5M3.2 3.2l1.06 1.06M11.74 11.74l1.06 1.06M3.2 12.8l1.06-1.06M11.74 4.26l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "14px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design panel */}
      <div className="mx-1" style={{ backgroundColor: "#000000" }}>
        {/* Panel header */}
        <div className="flex items-center gap-2 px-5 py-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "14px" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
              borderRadius: "3px",
            }}
          >
            <span
              className="font-semibold truncate"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "14px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "14px" }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
              borderRadius: "3px",
            }}
          >
            <span
              className="font-semibold truncate"
              style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "13px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 px-5 pb-5">
          <button
            className="flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              width: "85px",
              height: "37px",
              fontSize: "11.5px",
              lineHeight: "14px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              width: "85px",
              height: "37px",
              fontSize: "11.5px",
              lineHeight: "14px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-6">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
