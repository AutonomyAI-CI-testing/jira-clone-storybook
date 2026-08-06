export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px]"
      style={{ background: "#1a1a18", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top strip */}
      <div className="w-full h-[9px]" style={{ background: "#111110" }} />

      {/* Header row: title + gear icon */}
      <div className="flex items-center justify-between px-5 pt-4 pb-1">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b5b5b5", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* chevron up */}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1,4 4,1 7,4" />
        </svg>
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: "#8b9291", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5 pb-2">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          {/* chevron up */}
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
            <polyline points="1,7 6,1 11,7" />
          </svg>
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: "#b2b2b1", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-[6px] mb-[6px]">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a4a4a3", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            {/* info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
              height: "36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#737470", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-[6px] mb-[6px]">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a3a3a2", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            {/* info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              background: "#272822",
              border: "2px solid #929291",
              height: "37px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="text-[10.5px] font-semibold"
              style={{ color: "#71726e", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 flex items-center justify-center text-[11.5px] font-semibold rounded"
            style={{
              background: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
              height: "37px",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center text-[11.5px] font-semibold rounded"
            style={{
              background: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
              height: "37px",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-6 pb-6">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
