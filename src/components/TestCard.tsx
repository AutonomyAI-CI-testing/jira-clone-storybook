export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#222] p-5 w-full min-h-screen font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] font-bold text-base">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-[#8b9291] text-sm">∧</span>
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[#b2b2b1] font-bold text-sm">∧</span>
        <span className="text-[#b2b2b1] font-bold text-base">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm font-semibold">
            Personal Access Token
          </span>
          <span className="text-[#a4a4a3] text-sm">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-transparent border border-[#555] rounded px-3 py-2 w-full text-[#737470] placeholder-[#737470] text-sm outline-none focus:border-[#777]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a3a3a2] text-sm font-semibold">
            Design URL
          </span>
          <span className="text-[#a3a3a2] text-sm">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-transparent border border-[#555] rounded px-3 py-2 w-full text-[#737470] placeholder-[#737470] text-sm outline-none focus:border-[#777]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mb-10">
        <button className="bg-[#b5541c] text-[#e8d5c8] rounded-lg px-6 py-3 font-semibold text-sm">
          Awesome
        </button>
        <button className="bg-[#b5541c] text-[#e8d5c8] rounded-lg px-6 py-3 font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] font-bold text-base">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
