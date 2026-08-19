export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1c] p-5 overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="14"
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
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron up */}
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

      {/* Add New Design section */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron up */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M11 7L6 1L1 7"
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

        {/* Personal Access Token field */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1"
            >
              <circle cx="6.5" cy="6.5" r="5.5" />
              <line x1="6.5" y1="6" x2="6.5" y2="9.5" strokeLinecap="round" />
              <circle cx="6.5" cy="3.8" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL field */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            {/* Info icon */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1"
            >
              <circle cx="6.5" cy="6.5" r="5.5" />
              <line x1="6.5" y1="6" x2="6.5" y2="9.5" strokeLinecap="round" />
              <circle cx="6.5" cy="3.8" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
            <span className="text-[11.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-[#843a17] rounded py-2 text-[11.5px] font-semibold text-[#8c8078]">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded py-2 text-[11.5px] font-semibold text-[#8c8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
