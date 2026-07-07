export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] min-h-screen w-full max-w-[400px] p-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[#b5b5b5] text-xl font-semibold">UI magician Agent</h1>
        <span className="text-[#b5b5b5] text-2xl">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-16">
        <span className="text-[#8b9291] text-sm">∧</span>
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#b2b2b1] text-lg">∧</span>
        <h2 className="text-[#b2b2b1] text-xl font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#4a4a47] rounded px-3 py-3 text-[#737470] placeholder-[#737470] text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a3a3a2] text-sm">Design URL</label>
          <span className="text-[#a3a3a2] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#4a4a47] rounded px-3 py-3 text-[#71726e] placeholder-[#71726e] text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-16">
        <button className="bg-[#b45309] text-[#f5e6d8] font-medium px-8 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#9a4a18] text-[#c8a48c] font-medium px-8 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#b0b0b0] text-xl font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
