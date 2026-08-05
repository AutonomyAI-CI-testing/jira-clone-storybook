export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-4 p-5 w-[254px]"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="2.5" />
          <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M2.93 2.93l1.06 1.06M12.01 12.01l1.06 1.06M2.93 13.07l1.06-1.06M12.01 3.99l1.06-1.06" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        {/* Small chevron-up */}
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L4 2L7 5" />
        </svg>
        <span className="text-xs font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-4">
        {/* Larger chevron-up */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 7L6 2L11 7" />
        </svg>
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <text
              x="7.5"
              y="11"
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="#a4a4a3"
              stroke="none"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <text
              x="7.5"
              y="11"
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="#a3a3a2"
              stroke="none"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 text-xs font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 text-xs font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
