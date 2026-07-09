export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2b2b2b] text-[#e5e5e5] min-h-screen p-5" style={{fontFamily:'sans-serif'}}>
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-[#a3a3a3] text-2xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#b85c2c] text-sm mb-10">
        <span className="text-xs">∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white text-xs">∧</span>
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm text-[#d4d4d4] font-medium">Personal Access Token</label>
        <span className="text-[#a3a3a3] text-sm">ℹ</span>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full bg-transparent border border-[#525252] rounded text-[#a3a3a3] text-sm px-3 py-2 mb-4 outline-none"
        style={{color:'#a3a3a3'}}
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm text-[#d4d4d4] font-medium">Design URL</label>
        <span className="text-[#a3a3a3] text-sm">ℹ</span>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full bg-transparent border border-[#525252] rounded text-[#a3a3a3] text-sm px-3 py-2 mb-6 outline-none"
        style={{color:'#a3a3a3'}}
      />

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b85c2c] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a04f25] transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c2c] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a04f25] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
