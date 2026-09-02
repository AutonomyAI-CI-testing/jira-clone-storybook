export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] h-[508px] bg-[#272822] font-sans font-semibold flex flex-col overflow-hidden"
    >
      {/* Section 1 — Header row */}
      <div className="flex justify-between items-center px-5 pt-5">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Section 2 — Subtitle row */}
      <div className="flex items-center gap-1.5 px-5 mt-2">
        {/* Chevron-up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Section 3 — Add New Design header */}
      <div className="flex items-center gap-1.5 px-5 mb-4">
        {/* Chevron-up/down */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Section 4 — Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11.5px] text-[#a4a4a3]">Personal Access Token</span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          className="border border-[#a5adad] bg-[#272822] rounded px-2 py-1.5 w-full text-[11.5px] text-[#737470] outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Section 5 — Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
          {/* Info icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          className="border-2 border-[#929291] bg-[#272822] rounded px-2 py-1.5 w-full text-[10.5px] text-[#71726e] outline-none"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Section 6 — Buttons */}
      <div className="flex gap-3 px-5 mb-4">
        <button className="flex-1 py-2 bg-[#843a17] rounded text-[11.5px] text-[#8c8078] font-semibold">
          Awesome
        </button>
        <button className="flex-1 py-2 bg-[#843a17] rounded text-[11.5px] text-[#8c8078] font-semibold">
          Prepare
        </button>
      </div>

      {/* Section 7 — Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
}
