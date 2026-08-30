export const TestCard = () => (
  <div
    id="testElem"
    className="bg-[#272822] p-5 w-[254px] min-h-[508px] flex flex-col font-semibold"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between mb-3">
      <span className="text-[#b5b5b5] text-[13.5px]">UI magician Agent</span>
      {/* Gear / settings icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
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

    {/* 2. Subtitle row */}
    <div className="flex items-center gap-2">
      {/* Small chevron-up */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="5"
        viewBox="0 0 10 6"
        fill="none"
        stroke="#8b9291"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 5 5 1 9 5" />
      </svg>
      <span className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</span>
    </div>

    {/* 3. Spacer */}
    <div className="h-12" />

    {/* 4. Add New Design section header */}
    <div className="flex items-center gap-2 mb-5">
      {/* Larger chevron-up */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        viewBox="0 0 10 6"
        fill="none"
        stroke="#b2b2b1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 5 5 1 9 5" />
      </svg>
      <span className="text-[#b2b2b1] text-[13.5px]">Add New Design</span>
    </div>

    {/* 5. Personal Access Token */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[#a4a4a3] text-[11.5px]">Personal Access Token</span>
      {/* Info circle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
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
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="w-full border border-[#a5adad] bg-[#272822] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] mb-4 outline-none"
    />

    {/* 6. Design URL */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[#a3a3a2] text-[11.5px]">Design URL</span>
      {/* Info circle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
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
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="w-full border-2 border-[#929291] bg-[#272822] rounded px-3 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e] mb-5 outline-none"
    />

    {/* 7. Buttons row */}
    <div className="flex gap-3 mb-8">
      <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2">
        Awesome
      </button>
      <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold py-2">
        Prepare
      </button>
    </div>

    {/* 8. Recent Breakdowns */}
    <span className="text-[#b0b0b0] text-[13.5px]">Recent Breakdowns</span>
  </div>
);

export default TestCard;
