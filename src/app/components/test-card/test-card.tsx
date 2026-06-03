export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full flex-col gap-6 bg-black p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-700">UI magician Agent</h1>
        <button
          type="button"
          className="text-gray-600 hover:text-gray-500"
          aria-label="Settings"
        >
          <svg
            className="h-5 w-5"
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
      <div className="space-y-3">
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-gray-600 hover:border-gray-700"
        >
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-gray-700">Add New Design</h2>
          <svg
            className="h-4 w-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <span>Personal Access Token</span>
              <button
                type="button"
                className="text-gray-700 hover:text-gray-600"
                aria-label="Info"
              >
                <svg
                  className="h-3.5 w-3.5"
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
            </label>
            <input
              type="text"
              placeholder="Enter your token"
              className="w-full rounded border border-gray-800 bg-gray-950 px-3 py-2 text-xs text-gray-500 placeholder-gray-700 focus:border-gray-700 focus:outline-none"
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <span>Design URL</span>
              <button
                type="button"
                className="text-gray-700 hover:text-gray-600"
                aria-label="Info"
              >
                <svg
                  className="h-3.5 w-3.5"
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
            </label>
            <input
              type="text"
              placeholder="https://figma.com/..."
              className="w-full rounded border border-gray-800 bg-gray-950 px-3 py-2 text-xs text-gray-500 placeholder-gray-700 focus:border-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            className="flex-1 rounded bg-orange-800 px-4 py-2 text-xs font-medium text-orange-200 hover:bg-orange-700"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-orange-800 px-4 py-2 text-xs font-medium text-orange-200 hover:bg-orange-700"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto border-t border-gray-800 pt-6">
        <h3 className="text-xs font-semibold text-gray-700">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
