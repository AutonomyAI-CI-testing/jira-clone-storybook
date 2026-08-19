export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", minHeight: "508px", overflow: "auto" }}
    >
      {/* Thin top bar */}
      <div style={{ backgroundColor: "#1a1a1a", height: "9px" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="font-semibold text-[13.5px] leading-[16px]"
          style={{ color: "#b5b5b5", fontFamily: "Inter, sans-serif" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3.5" stroke="#b5b5b5" strokeWidth="1.8" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="#b5b5b5"
            strokeWidth="1.8"
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
          className="font-semibold text-[11.5px] leading-[14px] truncate"
          style={{ color: "#8b9291", fontFamily: "Inter, sans-serif" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design panel */}
      <div style={{ backgroundColor: "#1a1a1a" }}>
        {/* Section header */}
        <div className="flex items-center gap-2 px-5 py-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-semibold text-[13.5px] leading-[16px]"
            style={{ color: "#b2b2b1", fontFamily: "Inter, sans-serif" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold text-[11.5px] leading-[14px]"
              style={{ color: "#a4a4a3", fontFamily: "Inter, sans-serif" }}
            >
              Personal Access Token
            </span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
              <text x="6.5" y="10" textAnchor="middle" fill="#a4a4a3" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">i</text>
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
            }}
          >
            <span
              className="font-semibold text-[11.5px] leading-[14px] truncate"
              style={{ color: "#737470", fontFamily: "Inter, sans-serif" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold text-[11.5px] leading-[14px]"
              style={{ color: "#a3a3a2", fontFamily: "Inter, sans-serif" }}
            >
              Design URL
            </span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#a3a3a2" strokeWidth="1" />
              <text x="6.5" y="10" textAnchor="middle" fill="#a3a3a2" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">i</text>
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
            }}
          >
            <span
              className="font-semibold text-[10.5px] leading-[13px] truncate"
              style={{ color: "#71726e", fontFamily: "Inter, sans-serif" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 px-5 pb-5">
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              fontFamily: "Inter, sans-serif",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              fontFamily: "Inter, sans-serif",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-6">
        <span
          className="font-semibold text-[13.5px] leading-[16px]"
          style={{ color: "#b0b0b0", fontFamily: "Inter, sans-serif" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
