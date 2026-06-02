export const TestCard = () => {
  return (
    <div id="testElem" className="w-64 bg-black p-5">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-300">UI magician Agent</h1>
        <button className="text-gray-400 hover:text-gray-300">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="19" cy="12" r="1" fill="currentColor" />
            <circle cx="5" cy="12" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-5 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>From entire frame to a singl...</span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-5">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-gray-300">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13m-7 4v6m0-6l4-4m-4 4l-4-4m4 4v6m0-6l4 4m-4-4l-4 4"
            />
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          {/* Token Input */}
          <div>
            <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-gray-400">
              <span>Personal Access Token</span>
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <path
                  d="M12 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z"
                  fill="currentColor"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="Paste your token here"
              className="w-full rounded border border-gray-600 bg-gray-900 px-3 py-2 text-xs font-semibold text-gray-500 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>

          {/* URL Input */}
          <div>
            <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-gray-400">
              <span>Design URL</span>
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <path
                  d="M12 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z"
                  fill="currentColor"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="https://figma.com/..."
              className="w-full rounded border border-gray-600 bg-gray-900 px-3 py-2 text-xs font-semibold text-gray-500 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded border border-orange-900 bg-orange-900 px-3 py-2 text-xs font-semibold text-orange-700 hover:bg-orange-800 active:bg-orange-950">
            Awesome
          </button>
          <button className="flex-1 rounded border border-orange-900 bg-orange-900 px-3 py-2 text-xs font-semibold text-orange-700 hover:bg-orange-800 active:bg-orange-950">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="text-xs font-semibold text-gray-400">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
