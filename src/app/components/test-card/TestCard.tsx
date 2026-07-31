export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-full max-w-sm min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8 text-[#c07a40]">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
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
          <h2 className="text-lg font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm font-medium text-gray-200">
              Personal Access Token
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm font-medium text-gray-200">
              Design URL
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#b05a20] text-white font-medium py-3 rounded-xl text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#8b4513] text-white font-medium py-3 rounded-xl text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
