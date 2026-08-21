export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] flex flex-col bg-[#1a1a17]"
      style={{ fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Top accent bar */}
      <div className="h-[9px] w-full bg-[#2a2a26]" />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="text-[#b5b5b5] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <circle cx="7" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M7 1.5a.75.75 0 0 1 .75.75v.83a4.5 4.5 0 0 1 1.22.51l.59-.59a.75.75 0 1 1 1.06 1.06l-.59.59c.22.38.39.79.51 1.22h.83a.75.75 0 0 1 0 1.5h-.83a4.5 4.5 0 0 1-.51 1.22l.59.59a.75.75 0 1 1-1.06 1.06l-.59-.59a4.5 4.5 0 0 1-1.22.51v.83a.75.75 0 0 1-1.5 0v-.83a4.5 4.5 0 0 1-1.22-.51l-.59.59A.75.75 0 1 1 3.44 11l.59-.59A4.5 4.5 0 0 1 3.52 9.2h-.83a.75.75 0 0 1 0-1.5h.83c.12-.43.29-.84.51-1.22l-.59-.59A.75.75 0 1 1 4.5 4.82l.59.59A4.5 4.5 0 0 1 6.31 4.9v-.65a.75.75 0 0 1 .69-.75Z"
            fill="#b5b5b5"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 4L4 1l3 3"
            stroke="#8b9291"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-[#8b9291] font-semibold"
          style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5 pb-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 6L6 1l5 5"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[#b2b2b1] font-semibold"
            style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-[#a4a4a3] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fontSize="8"
                fill="#a4a4a3"
                fontWeight="bold"
              >
                i
              </text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="font-semibold text-[#737470]"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-[#a3a3a2] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fontSize="8"
                fill="#a3a3a2"
                fontWeight="bold"
              >
                i
              </text>
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{
              background: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="font-semibold text-[#71726e]"
              style={{ fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 font-semibold text-[#8c8078]"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold text-[#8c8078]"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 py-5">
        <span
          className="text-[#b0b0b0] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
