export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen bg-[#1a1a18] flex flex-col px-5 py-5 font-sans"
    >
      {/* Section 1 — Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
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

      {/* Section 2 — Subtitle */}
      <div className="flex items-center gap-1.5 mt-2">
        {/* Chevron-up (small) */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 4.5L4 1.5L7 4.5"
            stroke="#8b9291"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 3 — Spacer */}
      <div className="h-16" />

      {/* Section 4 — Add New Design */}
      <div>
        {/* Section heading */}
        <div className="flex items-center gap-2">
          {/* Chevron-up (medium) */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 7L6 2L11 7"
              stroke="#b2b2b1"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Personal Access Token
            </span>
            {/* Circle-i info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="mt-1.5 w-full bg-[#272822] border border-[#a5adad] px-3 py-2 rounded-sm">
            <span className="text-[#737470] text-[11.5px] font-semibold">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
              Design URL
            </span>
            {/* Circle-i info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="mt-1.5 w-full bg-[#272822] border-2 border-[#929291] px-3 py-2 rounded-sm">
            <span className="text-[#71726e] text-[10.5px] font-semibold">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5 justify-center">
          <button
            className="bg-[#843a17] rounded px-6 py-2 text-[#8c8078] text-[11.5px] font-semibold"
            type="button"
          >
            Awesome
          </button>
          <button
            className="bg-[#843a17] rounded px-6 py-2 text-[#8c8078] text-[11.5px] font-semibold"
            type="button"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Section 5 — Recent Breakdowns */}
      <div className="mt-8">
        <hr className="border-[#2a2a28]" />
        <p className="text-[#b0b0b0] text-[13.5px] font-semibold mt-3">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};

export default TestCard;
