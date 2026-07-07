export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white min-h-screen p-6 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-gray-400 text-2xl">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-gray-400 text-sm">^</span>
        <span className="text-amber-600 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-white text-sm font-semibold">^</span>
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200 font-medium">Personal Access Token</label>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200 font-medium">Design URL</label>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
