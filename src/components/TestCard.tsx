export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-5 text-white font-sans">

      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron + muted subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5703a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm text-[#b5703a]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-[#cccccc]">Personal Access Token</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        className="w-full bg-[#383838] border border-[#555555] rounded px-3 py-2 text-sm text-[#888888] placeholder-[#666666] outline-none mb-4"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-[#cccccc]">Design URL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        className="w-full bg-[#383838] border border-[#555555] rounded px-3 py-2 text-sm text-[#888888] placeholder-[#666666] outline-none mb-6"
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons row */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#c1541a] text-white font-semibold rounded-lg py-3 text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1541a] text-white font-semibold rounded-lg py-3 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-10">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
