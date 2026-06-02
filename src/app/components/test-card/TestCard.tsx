export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center min-h-screen bg-black p-4"
    >
      <div className="w-full max-w-xs bg-black text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-sm font-semibold text-gray-400">
            UI magician Agent
          </h1>
          <button className="text-gray-500 hover:text-gray-300">⚙</button>
        </div>

        {/* Collapsible Section */}
        <div className="mb-6 flex items-center gap-2 p-3 bg-gray-900 rounded border border-gray-800">
          <span className="text-gray-400">^</span>
          <span className="text-xs text-gray-500">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">
            Add New Design
          </h2>

          {/* Personal Access Token Field */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-gray-500">
                Personal Access Token
              </label>
              <span className="text-gray-600 text-xs">ℹ</span>
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              className="w-full px-3 py-2 text-xs bg-gray-900 border border-gray-700 rounded text-gray-600 placeholder-gray-700 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Design URL Field */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-gray-500">
                Design URL
              </label>
              <span className="text-gray-600 text-xs">ℹ</span>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full px-3 py-2 text-xs bg-gray-900 border border-gray-700 rounded text-gray-600 placeholder-gray-700 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 text-xs font-semibold bg-gray-700 text-gray-600 rounded hover:bg-gray-600 transition-colors">
              Awesome
            </button>
            <button className="flex-1 px-4 py-2 text-xs font-semibold bg-gray-700 text-gray-600 rounded hover:bg-gray-600 transition-colors">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="pt-4 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-400">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
