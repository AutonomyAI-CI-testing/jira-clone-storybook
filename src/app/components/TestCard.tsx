export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272120" }}
      className="min-h-screen w-full max-w-sm mx-auto p-5 flex flex-col gap-6 font-sans"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-80"
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
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-600 flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-amber-600 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white font-bold text-2xl">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center">
        <button
          style={{ backgroundColor: "#b55a2a" }}
          className="flex-1 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b55a2a" }}
          className="flex-1 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
}
