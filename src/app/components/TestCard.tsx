export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a18] flex flex-col py-5 font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-10">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1L1 4"
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

      {/* Add New Design */}
      <div className="flex items-center gap-2 px-5 mb-5">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M11 7L6 2L1 7"
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
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
            <text
              x="6.5"
              y="10"
              textAnchor="middle"
              fontSize="7"
              fill="#a4a4a3"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <div
          className="w-full h-[37px] rounded px-3 flex items-center"
          style={{ background: "#272822", border: "1px solid #a5adad" }}
        >
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a3a3a2" strokeWidth="1" />
            <text
              x="6.5"
              y="10"
              textAnchor="middle"
              fontSize="7"
              fill="#a3a3a2"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              i
            </text>
          </svg>
        </div>
        <div
          className="w-full h-[37px] rounded px-3 flex items-center"
          style={{ background: "#272822", border: "2px solid #929291" }}
        >
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 mb-10">
        <button
          className="flex-1 h-[37px] flex items-center justify-center text-[11.5px] font-semibold text-[#8c8078]"
          style={{ background: "#843a17", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 h-[37px] flex items-center justify-center text-[11.5px] font-semibold text-[#8c8078]"
          style={{ background: "#843a17", borderRadius: "4px" }}
        >
          Prepare
        </button>
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
