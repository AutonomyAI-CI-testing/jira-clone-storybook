export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#222222] w-full max-w-sm px-5 py-4 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed row */}
      <div className="mt-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm text-[#bf7040]">From entire frame to a singl...</span>
      </div>

      <div className="mt-8" />

      {/* Add New Design header */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555555] bg-[#333333] px-3 py-2 text-sm text-gray-300 placeholder-gray-600 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555555] bg-[#333333] px-3 py-2 text-sm text-gray-300 placeholder-gray-600 outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 rounded-xl bg-[#a0522d] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-xl bg-[#a0522d] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-10 text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
