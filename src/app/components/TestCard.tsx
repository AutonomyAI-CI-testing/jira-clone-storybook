export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1b] w-60 p-4 rounded flex flex-col gap-3 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-sm font-semibold">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
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

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
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
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-3" />

      {/* Add New Design row */}
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
        <span className="text-[#b2b2b1] text-sm font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg
            width="13"
            height="13"
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
        <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
          <span className="text-[#737470] text-xs font-semibold">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-xs font-semibold">
            Design URL
          </span>
          {/* Info circle icon */}
          <svg
            width="13"
            height="13"
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
        <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
          <span className="text-[#71726e] text-xs font-semibold">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-1">
        <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold py-2 px-3">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold py-2 px-3">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="my-3" />

      {/* Recent Breakdowns */}
      <span className="text-[#b0b0b0] text-sm font-semibold">
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
