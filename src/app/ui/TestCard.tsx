export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] min-h-screen p-6 font-sans">

      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-10">
        <span className="text-gray-400 text-sm">∧</span>
        <span className="text-[#b5501a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white text-sm">∧</span>
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-gray-300 text-sm font-medium">Personal Access Token</label>
          <span className="text-gray-400 text-sm">ℹ</span>
        </div>
        <input
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-gray-300 text-sm font-medium">Design URL</label>
          <span className="text-gray-400 text-sm">ℹ</span>
        </div>
        <input
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5501a] text-white font-semibold py-3 rounded-lg">Awesome</button>
        <button className="flex-1 bg-[#b5501a] text-white font-semibold py-3 rounded-lg">Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>

    </div>
  );
};
