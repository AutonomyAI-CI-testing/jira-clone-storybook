export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-300">
          UI magician Agent
        </h1>
        {/* Settings gear icon */}
        <button
          className="focus-visible:outline-none"
          aria-label="Settings"
        >
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      {/* Collapsed section 1 */}
      <div className="mb-12 flex items-center gap-3">
        {/* Chevron up icon (collapsed state) */}
        <svg
          className="h-5 w-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-sm text-gray-600">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8 flex items-center gap-3">
        {/* Chevron down icon (expanded state) */}
        <svg
          className="h-5 w-5 text-gray-400"
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
        <span className="text-base font-semibold text-gray-400">
          Add New Design
        </span>
      </div>

      {/* Form section */}
      <div className="mb-8 space-y-5">
        {/* Personal Access Token */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-500">
              Personal Access Token
            </label>
            {/* Info icon */}
            <button
              className="focus-visible:outline-none"
              aria-label="Personal Access Token info"
            >
              <svg
                className="h-4 w-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-600 placeholder-gray-700 focus-visible:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-500">
              Design URL
            </label>
            {/* Info icon */}
            <button
              className="focus-visible:outline-none"
              aria-label="Design URL info"
            >
              <svg
                className="h-4 w-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <input
            type="url"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-700 placeholder-gray-700 focus-visible:outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-3">
        <button
          className="flex-1 rounded bg-orange-700 px-6 py-2 text-sm font-semibold text-orange-100 hover:bg-orange-800 active:bg-orange-900 focus-visible:outline-none"
          aria-label="Awesome"
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded bg-orange-700 px-6 py-2 text-sm font-semibold text-orange-100 hover:bg-orange-800 active:bg-orange-900 focus-visible:outline-none"
          aria-label="Prepare"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-base font-semibold text-gray-300">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
