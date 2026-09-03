export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#272825] font-sans text-left"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M13.4 8c0-.23-.02-.45-.06-.67l1.45-1.13-1.38-2.39-1.74.7a5.1 5.1 0 0 0-1.16-.67L10.2 2H7.8l-.31 1.84a5.1 5.1 0 0 0-1.16.67l-1.74-.7L3.21 6.2l1.45 1.13A4.1 4.1 0 0 0 4.6 8c0 .23.02.45.06.67L3.21 9.8l1.38 2.39 1.74-.7c.36.26.75.48 1.16.67L7.8 14h2.4l.31-1.84c.41-.19.8-.41 1.16-.67l1.74.7 1.38-2.39-1.45-1.13c.04-.22.06-.44.06-.67z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L5 2L1 6" stroke="#8b9291" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[14px] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[14px]">
              Personal Access Token
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6" stroke="#929291" strokeWidth="1" />
              <line x1="7" y1="6.5" x2="7" y2="10" stroke="#929291" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.75" fill="#929291" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
            <span className="text-[#737470] text-[11.5px] font-semibold leading-[14px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[14px]">
              Design URL
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6" stroke="#929291" strokeWidth="1" />
              <line x1="7" y1="6.5" x2="7" y2="10" stroke="#929291" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.75" fill="#929291" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
            <span className="text-[#71726e] text-[10.5px] font-semibold leading-[13px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-1">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
