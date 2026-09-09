export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272822] p-5 font-sans w-[254px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-none">
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
      <div className="flex items-center gap-1.5 mt-2">
        {/* Chevron up icon */}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-none">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-none">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-none">
          Personal Access Token
        </span>
        {/* Info circle icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mt-3">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-none">
          Design URL
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
      />

      {/* Buttons row */}
      <div className="flex gap-3 mt-4">
        <button
          type="button"
          className="bg-[#843a17] rounded-sm px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold leading-none"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#843a17] rounded-sm px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold leading-none"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section label */}
      <div className="mt-6">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-none">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
