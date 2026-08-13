export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] flex flex-col gap-3 p-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M7 4L4 1L1 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        {/* Chevron down */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1L6 6L11 1" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          className="w-full h-[37px] flex items-center px-3"
          style={{ background: "#272822", border: "1px solid #a5adad" }}
        >
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          className="w-full h-[37px] flex items-center px-3"
          style={{ background: "#272822", border: "2px solid #929291" }}
        >
          <span className="text-[#71726e] text-[11.5px] font-semibold leading-[13.92px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 h-[37px] flex items-center justify-center"
          style={{ background: "#843a17", borderRadius: "4px" }}
        >
          <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
            Awesome
          </span>
        </button>
        <button
          className="flex-1 h-[37px] flex items-center justify-center"
          style={{ background: "#843a17", borderRadius: "4px" }}
        >
          <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
            Prepare
          </span>
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
