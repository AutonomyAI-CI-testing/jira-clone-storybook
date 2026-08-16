export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#272823] text-[#b5b5b5] overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.3" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path
            d="M1 6L5 2L9 6"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-5">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path
              d="M1 6L5 2L9 6"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <text
              x="7.5"
              y="11.2"
              textAnchor="middle"
              fill="#a4a4a3"
              fontSize="8"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <div
          className="w-full mb-4 px-3 py-2 rounded"
          style={{ background: "#272822", border: "1px solid #a5adad" }}
        >
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <text
              x="7.5"
              y="11.2"
              textAnchor="middle"
              fill="#a3a3a2"
              fontSize="8"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <div
          className="w-full mb-5 px-3 py-2 rounded"
          style={{ background: "#272822", border: "2px solid #929291" }}
        >
          <span className="text-[11.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold text-[#8c8078] rounded"
            style={{ background: "#843a17", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold text-[#8c8078] rounded"
            style={{ background: "#843a17", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
