export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] bg-[#1a1a1a] text-gray-200 px-5 py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-medium text-gray-200">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-gray-400">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="flex items-center gap-2 text-gray-400 text-sm mb-8 w-full text-left"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Expanded: Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="flex items-center gap-2 text-gray-300 text-base mb-5"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-500 text-[10px] text-gray-400">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-300 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-500 text-[10px] text-gray-400">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-gray-400 rounded px-3 py-2.5 text-sm text-gray-300 outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="bg-[#a3542d] hover:bg-[#b46238] text-gray-200 text-sm font-medium rounded-md px-8 py-2.5 min-w-[120px]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#a3542d] hover:bg-[#b46238] text-gray-200 text-sm font-medium rounded-md px-8 py-2.5 min-w-[120px]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base text-gray-300 font-normal">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
