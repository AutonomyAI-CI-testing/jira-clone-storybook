export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] rounded-lg p-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg">UI magician Agent</span>
        <span className="text-white text-xl cursor-pointer">⚙</span>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#c17a4a] text-xs">˄</span>
        <span className="text-[#c17a4a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-white text-xs">˄</span>
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <label className="text-sm text-white">Personal Access Token</label>
          <span className="text-white text-xs">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <label className="text-sm text-white">Design URL</label>
          <span className="text-white text-xs">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#a04f24] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#a04f24] transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};
