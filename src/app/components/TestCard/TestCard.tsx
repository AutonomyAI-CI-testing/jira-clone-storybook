export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] min-h-screen w-full max-w-sm p-6 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#c0622f] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2.5" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#2a2a2a] border border-[#52525b] text-[#a0a0a0] placeholder-[#666666] rounded px-3 py-3 text-sm w-full outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2.5" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#2a2a2a] border border-[#52525b] text-[#a0a0a0] placeholder-[#666666] rounded px-3 py-3 text-sm w-full outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mt-2">
        <button className="bg-[#b45309] text-white font-semibold px-8 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#b45309] text-white font-semibold px-8 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};
