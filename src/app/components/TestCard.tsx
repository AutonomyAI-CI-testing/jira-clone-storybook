export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-6 bg-black px-5 py-5"
      style={{ width: "254px", minHeight: "508px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-300">UI magician Agent</h1>
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="2" />
          <circle cx="12" cy="8" r="1" fill="currentColor" />
          <circle cx="14" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <circle cx="10" cy="12" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400">˄</span>
        <span className="text-xs font-semibold text-gray-500">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">˄</span>
          <h2 className="text-sm font-semibold text-gray-300">Add New Design</h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-gray-400">
              Personal Access Token
            </label>
            <span className="text-gray-500">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="border border-gray-600 bg-transparent px-3 py-2 text-xs font-semibold text-gray-500 placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-gray-400">
              Design URL
            </label>
            <span className="text-gray-500">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="border border-gray-600 bg-transparent px-3 py-2 text-xs font-semibold text-gray-500 placeholder-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-semibold text-gray-400 hover:bg-orange-600">
          Awesome
        </button>
        <button className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-semibold text-gray-400 hover:bg-orange-600">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-300">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
