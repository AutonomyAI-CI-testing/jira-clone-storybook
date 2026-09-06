export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-[254px] p-4 font-['Inter'] flex flex-col gap-3"
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
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Sub-row: chevron-up + muted subtitle */}
      <div className="flex items-center gap-2">
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
          <polyline points="1 6 5 2 9 6" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 6 5 2 9 6" />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            width="14"
            height="14"
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
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] font-semibold placeholder-[#737470] px-3 py-2 w-full outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          {/* Info icon */}
          <svg
            width="14"
            height="14"
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
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-[#272822] border-2 border-[#929291] text-[#71726e] text-[11.5px] font-semibold placeholder-[#71726e] px-3 py-2 w-full outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 justify-center pt-1">
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-6 py-2">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-6 py-2">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns footer */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
