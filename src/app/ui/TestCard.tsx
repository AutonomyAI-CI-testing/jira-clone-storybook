export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen bg-[#1e1e1b] font-sans flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-tight">
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

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-8">
        {/* Chevron up */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-tight">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-5">
          {/* Chevron down */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
            <span className="text-[#737470] text-[11.5px] font-semibold">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
              Design URL
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
            <span className="text-[#71726e] text-[10.5px] font-semibold">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-10">
          <button className="bg-[#843a17] rounded px-5 py-2 text-[#8c8078] text-[11.5px] font-semibold">
            Awesome
          </button>
          <button className="bg-[#843a17] rounded px-5 py-2 text-[#8c8078] text-[11.5px] font-semibold">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
