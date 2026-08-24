export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen bg-[#1a1a18] overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 pt-5 pb-2">
        <span
          className="text-[13.5px] font-semibold text-[#b5b5b5] leading-[16.34px]"
        >
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
          <circle cx="8" cy="8" r="6.5" stroke="#b5b5b5" strokeWidth="1" />
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-4 pb-4">
        {/* Chevron up */}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L4.5 1.5L8 5"
            stroke="#8b9291"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          {/* Chevron up */}
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 1.5L8 5"
              stroke="#b2b2b1"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3] leading-[13.92px]">
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
            <text
              x="7"
              y="11"
              textAnchor="middle"
              fill="#a4a4a3"
              fontSize="8"
              fontWeight="600"
              fontFamily="Inter"
            >
              i
            </text>
          </svg>
        </div>

        {/* Personal Access Token input box */}
        <div className="mb-4 bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
          <span className="text-[11.5px] font-semibold text-[#737470] leading-[13.92px]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2] leading-[13.92px]">
            Design URL
          </span>
          {/* Info icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
            <text
              x="7"
              y="11"
              textAnchor="middle"
              fill="#a3a3a2"
              fontSize="8"
              fontWeight="600"
              fontFamily="Inter"
            >
              i
            </text>
          </svg>
        </div>

        {/* Design URL input box */}
        <div className="mb-5 bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
          <span className="text-[10.5px] font-semibold text-[#71726e] leading-[12.71px]">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            type="button"
            className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-4">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0] leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
