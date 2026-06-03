export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="text-gray-400 max-w-sm space-y-4 bg-black p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 text-sm font-semibold">
          UI magician Agent
        </h1>
        <svg
          className="text-gray-500 h-4 w-4"
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
      </div>

      {/* Collapsible Section */}
      <div className="flex items-center gap-2">
        <svg
          className="text-gray-500 h-3 w-3"
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
        <p className="text-gray-400 truncate text-xs">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="border-gray-800 flex items-center justify-between border-t pt-3">
        <span className="text-gray-400 text-xs font-semibold">
          Add New Design
        </span>
        <svg
          className="text-gray-500 h-3 w-3"
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
      </div>

      {/* Form Section */}
      <div className="space-y-3">
        {/* Personal Access Token */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <label className="text-gray-400 text-xs font-semibold">
              Personal Access Token
            </label>
            <svg
              className="text-gray-600 h-3 w-3"
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
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="border-gray-700 text-gray-500 placeholder-gray-600 focus:border-gray-600 w-full border bg-black px-2 py-1.5 text-xs outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <label className="text-gray-400 text-xs font-semibold">
              Design URL
            </label>
            <svg
              className="text-gray-600 h-3 w-3"
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
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="border-gray-700 text-gray-500 placeholder-gray-600 focus:border-gray-600 w-full border bg-black px-2 py-1.5 text-xs outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="border-gray-700 bg-gray-800 text-gray-500 hover:bg-gray-700 flex-1 border px-3 py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-amber-900 text-gray-600 hover:bg-amber-800 flex-1 px-3 py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-gray-800 border-t pt-3">
        <p className="text-gray-400 text-xs font-semibold">Recent Breakdowns</p>
      </div>
    </div>
  );
};
