export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="w-[254px] min-h-[508px] bg-[#1e1f1a] flex flex-col gap-3 p-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
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
      <div className="flex items-center gap-2 text-[#8b9291] text-[11.5px] font-semibold">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2 text-[#b2b2b1] text-[13.5px] font-semibold">
          {/* Chevron down */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] px-3 py-2">
            <span className="text-[#737470] text-[11.5px] font-semibold">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] px-3 py-2">
            <span className="text-[#71726e] text-[10.5px] font-semibold">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-[#b0b0b0] text-[13.5px] font-semibold">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
