export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-64 bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <h1 className="text-sm font-semibold text-gray-300">UI magician Agent</h1>
          <button className="text-gray-500 hover:text-gray-300 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="border-b border-gray-800">
          <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-900 transition-colors">
            <span className="text-xs font-semibold text-gray-400">
              From entire frame to a singl...
            </span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="border-b border-gray-800">
          <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-900 transition-colors">
            <span className="text-xs font-semibold text-gray-400">Add New Design</span>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        {/* Form Section */}
        <div className="px-4 py-4 space-y-4">
          {/* Personal Access Token Field */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-400">
                Personal Access Token
              </label>
              <button className="text-gray-600 hover:text-gray-400 transition-colors">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter token..."
              className="w-full bg-gray-900 border border-gray-700 rounded px-2.5 py-1.5 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-400">
                Design URL
              </label>
              <button className="text-gray-600 hover:text-gray-400 transition-colors">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter URL..."
              className="w-full bg-gray-900 border border-gray-700 rounded px-2.5 py-1.5 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-3 flex gap-2">
          <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-gray-200 text-xs font-semibold py-2 rounded transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-gray-200 text-xs font-semibold py-2 rounded transition-colors">
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-800">
          <p className="text-xs font-semibold text-gray-500">Recent Breakdowns</p>
        </div>
      </div>
    </div>
  );
}
