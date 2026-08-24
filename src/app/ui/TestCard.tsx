export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-64 min-h-screen p-0 font-['Inter',sans-serif] overflow-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="18"
          height="18"
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
        {/* Chevron up */}
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 6 5 1 9 6" />
        </svg>
        <span className="text-[#8b9291] font-semibold text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="border-t border-[#3a3a35] px-5 pt-5 pb-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
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
            <polyline points="1 7 6 2 11 7" />
          </svg>
          <span className="text-[#b2b2b1] font-semibold text-[13.5px] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a4a4a3] font-semibold text-[11.5px] leading-[13.92px]">
              Personal Access Token
            </span>
            {/* Circle-i info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="5" x2="7.5" y2="5.1" strokeWidth="1.5" />
              <line x1="7.5" y1="7" x2="7.5" y2="10.5" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] px-3 py-2 w-full">
            <span className="text-[#737470] font-semibold text-[11.5px] leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a3a3a2] font-semibold text-[11.5px] leading-[13.92px]">
              Design URL
            </span>
            {/* Circle-i info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="5" x2="7.5" y2="5.1" strokeWidth="1.5" />
              <line x1="7.5" y1="7" x2="7.5" y2="10.5" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] px-3 py-2 w-full">
            <span className="text-[#71726e] font-semibold text-[10.5px] leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#843a17] rounded py-2 text-[#8c8078] font-semibold text-[11.5px] leading-[13.92px]">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded py-2 text-[#8c8078] font-semibold text-[11.5px] leading-[13.92px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-5">
        <span className="text-[#b0b0b0] font-semibold text-[13.5px] leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
