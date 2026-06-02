export const TestCard = () => {
  return (
    <div id="testElem" className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-[254px] bg-black border border-gray-700 rounded-md shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h2 className="text-sm font-semibold text-gray-400">UI magician Agent</h2>
          <span className="text-gray-500">⚙️</span>
        </div>

        {/* Collapsible Section */}
        <div className="px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold cursor-pointer">
            <span>▼</span>
            <span className="truncate">Design Importer Configuration Section</span>
          </div>
        </div>

        {/* Add New Design Section */}
        <div className="px-4 py-3 border-b border-gray-700">
          <div className="flex items-center justify-between cursor-pointer">
            <span className="text-xs font-semibold text-gray-500">Add New Design</span>
            <span className="text-gray-500">›</span>
          </div>
        </div>

        {/* Personal Access Token */}
        <div className="px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-xs font-semibold text-gray-500">Personal Access Token</label>
            <span className="text-gray-600">ⓘ</span>
          </div>
          <input
            type="password"
            placeholder="Enter token"
            className="w-full px-2 py-1.5 text-xs bg-gray-900 border border-gray-600 rounded text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Design URL */}
        <div className="px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-xs font-semibold text-gray-500">Design URL</label>
            <span className="text-gray-600">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://figma.com/..."
            className="w-full px-2 py-1.5 text-xs bg-gray-900 border border-gray-600 rounded text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 px-4 py-3 border-b border-gray-700">
          <button className="flex-1 px-3 py-2 text-xs font-semibold text-gray-600 bg-orange-700 hover:bg-orange-800 rounded transition-colors">
            Awesome
          </button>
          <button className="flex-1 px-3 py-2 text-xs font-semibold text-gray-600 bg-orange-700 hover:bg-orange-800 rounded transition-colors">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="px-4 py-3">
          <h3 className="text-xs font-semibold text-gray-500 mb-2">Recent Breakdowns</h3>
          <div className="text-xs text-gray-600">No recent items</div>
        </div>
      </div>
    </div>
  );
};
