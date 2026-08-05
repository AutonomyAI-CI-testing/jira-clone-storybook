export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a17] w-[254px] min-h-[508px] p-5 flex flex-col gap-3"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
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
      <div className="flex items-center gap-2">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M7 4L4 1L1 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M11 6L6 1L1 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fill="#a4a4a3"
                fontSize="8"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] px-3 py-2 w-full">
            <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fill="#a3a3a2"
                fontSize="8"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] px-3 py-2 w-full">
            <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold flex-1 py-2">
            Awesome
          </button>
          <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold flex-1 py-2">
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
