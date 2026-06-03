export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-xs bg-black p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <svg
          className="text-gray-500 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
          <path d="M12 9v.01M12 15v.01M9 12h.01M15 12h.01" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="mb-10 flex items-start gap-3">
        <span className="text-gray-500 mt-1 text-xs">^</span>
        <p className="text-gray-600 text-xs font-semibold">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-10 flex items-start gap-3">
        <span className="text-gray-500 mt-1 text-xs">^</span>
        <h2 className="text-gray-400 text-sm font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-gray-500 text-xs font-semibold">
            Personal Access Token
          </label>
          <svg
            className="text-gray-600 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" opacity="0.3" />
            <path d="M12 8v4m0 4v.01" stroke="currentColor" fill="none" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="border-gray-600 text-gray-600 placeholder-gray-700 w-full border bg-black px-3 py-2 text-xs font-semibold"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-gray-500 text-xs font-semibold">
            Design URL
          </label>
          <svg
            className="text-gray-600 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" opacity="0.3" />
            <path d="M12 8v4m0 4v.01" stroke="currentColor" fill="none" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="border-gray-600 text-gray-600 placeholder-gray-700 w-full border bg-black px-3 py-2 text-xs font-semibold"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-12 flex gap-3">
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-800 flex-1 rounded px-4 py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-800 flex-1 rounded px-4 py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-gray-400 text-sm font-semibold">Recent Breakdowns</h3>
    </div>
  );
};
