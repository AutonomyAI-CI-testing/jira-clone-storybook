export function TestCard() {
  const GearIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm5.43-2.083c.04-.274.07-.557.07-.917s-.03-.643-.07-.917l1.98-1.547a.473.473 0 0 0 .113-.6L12.63 2.147a.472.472 0 0 0-.574-.207l-2.337.937a6.83 6.83 0 0 0-1.579-.913L7.8.227A.458.458 0 0 0 7.35 0h-2.7a.458.458 0 0 0-.45.387l-.34 2.49a6.74 6.74 0 0 0-1.58.913L.044 2.853a.459.459 0 0 0-.574.207L-.37 5.436a.462.462 0 0 0 .113.6l1.98 1.547C1.683 7.857 1.65 8.14 1.65 8.5s.033.643.073.917L-.257 10.964a.473.473 0 0 0-.113.6l1.9 3.289c.116.207.362.277.574.207l2.337-.937c.49.353 1.02.657 1.58.913l.34 2.49c.054.217.245.387.45.387h2.7c.205 0 .396-.17.45-.387l.34-2.49a6.74 6.74 0 0 0 1.58-.913l2.337.937a.459.459 0 0 0 .574-.207l1.9-3.289a.462.462 0 0 0-.113-.6l-1.98-1.547z"
        fill="#b5b5b5"
      />
    </svg>
  );

  const ChevronUpIcon = ({ color = "#8b9291", size = 8 }: { color?: string; size?: number }) => (
    <svg width={size} height={Math.round(size * 0.625)} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7L6 2L11 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const InfoIcon = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="7" stroke="#a4a4a3" strokeWidth="1" />
      <text x="7.5" y="11" textAnchor="middle" fill="#a4a4a3" fontSize="9" fontWeight="600" fontFamily="Inter">
        i
      </text>
    </svg>
  );

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
      className="w-64 min-h-screen px-5 py-5 flex flex-col gap-0"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <ChevronUpIcon color="#8b9291" size={8} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-5">
        <ChevronUpIcon color="#b2b2b1" size={12} />
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span
          style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          Personal Access Token
        </span>
        <InfoIcon />
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          color: "#737470",
          fontSize: "11.5px",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          lineHeight: "13.92px",
          outline: "none",
        }}
        className="w-full px-3 py-2 mb-4 rounded-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span
          style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          Design URL
        </span>
        <InfoIcon />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          color: "#71726e",
          fontSize: "10.5px",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          lineHeight: "12.71px",
          outline: "none",
        }}
        className="w-full px-3 py-2 mb-5 rounded-none"
      />

      {/* Buttons row */}
      <div className="flex gap-3 mb-10">
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            fontFamily: "Inter, sans-serif",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          className="flex-1 py-2"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            fontFamily: "Inter, sans-serif",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          className="flex-1 py-2"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
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
