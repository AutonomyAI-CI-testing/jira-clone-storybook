export function TestCard() {
  return (
    <div
      id="testElem"
      className="font-sans w-full max-w-sm p-5 min-h-screen"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-10" style={{ color: "#c97b4b" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <h2 className="text-base font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 py-3 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "#b5521f" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "#b5521f" }}
          >
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
}

export default TestCard;
