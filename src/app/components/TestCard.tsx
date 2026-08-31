export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#272822] flex flex-col py-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
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
      <div className="flex items-center gap-2 px-5 mb-16">
        {/* Chevron up */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path
            d="M9 6L5 2L1 6"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          {/* Chevron down */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </span>
          {/* Info icon */}
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

        {/* PAT input */}
        <div className="mb-4 border border-[#a5adad] bg-[#272822] rounded px-3 py-2.5">
          <span className="text-[#737470] text-[11.5px] font-semibold">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </span>
          {/* Info icon */}
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

        {/* Design URL input */}
        <div className="mb-5 border-2 border-[#929291] bg-[#272822] rounded px-3 py-2.5">
          <span className="text-[#71726e] text-[10.5px] font-semibold">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2.5 px-4"
            style={{ borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2.5 px-4"
            style={{ borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
