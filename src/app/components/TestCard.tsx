export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 min-h-screen w-full">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        {/* Gear / settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2 mt-3">
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
          className="text-gray-400 flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#c47f5a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h2 className="text-white text-xl font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-300 text-sm font-medium">Personal Access Token</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 flex-shrink-0"
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
          className="w-full bg-[#3a3a3a] border border-gray-600 text-gray-400 rounded px-3 py-2 text-sm placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-300 text-sm font-medium">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 flex-shrink-0"
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
          className="w-full bg-[#3a3a3a] border border-gray-600 text-gray-400 rounded px-3 py-2 text-sm placeholder-gray-500 outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#c1612a] text-white rounded-lg px-6 py-3 font-semibold text-sm flex-1">
          Awesome
        </button>
        <button className="bg-[#c1612a] text-white rounded-lg px-6 py-3 font-semibold text-sm flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white text-xl font-bold mt-10">Recent Breakdowns</h2>
    </div>
  );
};
