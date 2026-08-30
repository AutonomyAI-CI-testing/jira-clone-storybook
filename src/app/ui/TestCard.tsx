export const TestCard = () => (
  <div
    id="testElem"
    className="bg-[#272822] p-5 w-[254px] min-h-[508px] flex flex-col font-sans"
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between mb-3">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
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
    <div className="flex items-center gap-2 mb-3">
      {/* Small chevron-up */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="5"
        viewBox="0 0 10 6"
        fill="none"
        stroke="#8b9291"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 5 5 1 9 5" />
      </svg>
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* 3. Spacer */}
    <div className="h-12" />

    {/* 4. Add New Design section header */}
    <div className="flex items-center gap-2 mb-4">
      {/* Larger chevron-up */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        viewBox="0 0 10 6"
        fill="none"
        stroke="#b2b2b1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 5 5 1 9 5" />
      </svg>
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* 5. Personal Access Token */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
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
      type="text"
      readOnly
      defaultValue=""
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="w-full border border-[#a5adad] bg-[#272822] rounded px-3 py-2 mb-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
    />

    {/* 6. Design URL */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
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
      type="text"
      readOnly
      defaultValue=""
      placeholder="https://www.figma.com/file/:"
      className="w-full border-2 border-[#929291] bg-[#272822] rounded px-3 py-2 mb-4 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
    />

    {/* 7. Buttons */}
    <div className="flex gap-3 mb-8">
      <button className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2">
        Awesome
      </button>
      <button className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2">
        Prepare
      </button>
    </div>

    {/* 8. Recent Breakdowns */}
    <div className="mt-auto">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

export default TestCard;
