export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] p-5 font-[Inter,sans-serif] flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
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
          className="opacity-80"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1.5">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-1.5 mb-1">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#a4a4a3" strokeWidth="1.5" />
            <path d="M10 9v5" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="6.5" r="0.75" fill="#a4a4a3" />
          </svg>
        </div>
        <div className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2">
          <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#a3a3a2" strokeWidth="1.5" />
            <path d="M10 9v5" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="6.5" r="0.75" fill="#a3a3a2" />
          </svg>
        </div>
        <div className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2">
          <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button
          className="bg-[#843a17] rounded-[4px] px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] w-[85px] h-[37px]"
          type="button"
        >
          Awesome
        </button>
        <button
          className="bg-[#843a17] rounded-[4px] px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] w-[85px] h-[37px]"
          type="button"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
