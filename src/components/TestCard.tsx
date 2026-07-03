export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen text-white p-4 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <span className="text-lg font-bold text-[#d4d4d4]">UI magician Agent</span>
        <span className="text-[#d4d4d4] text-xl">⚙</span>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 pb-6">
        <span className="text-[#8b9291] text-sm">^</span>
        <span className="text-[#8b9291] text-sm italic">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 pb-4">
        <span className="text-white text-base">^</span>
        <span className="text-white text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm font-medium">Personal Access Token</span>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded text-[#737470] placeholder-[#737470] px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm font-medium">Design URL</span>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#4a5568] rounded text-[#737470] placeholder-[#737470] px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#c1622f] text-white font-semibold py-3 rounded-lg hover:bg-[#a85228] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1622f] text-white font-semibold py-3 rounded-lg hover:bg-[#a85228] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-[#d4d4d4]">Recent Breakdowns</span>
      </div>
    </div>
  );
}
