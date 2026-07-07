export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2b2b2b] w-[254px] p-4 flex flex-col gap-3 font-semibold">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-sm">UI magician Agent</span>
        <span className="text-[#b5b5b5] text-lg">⚙</span>
      </div>

      {/* Chevron subtitle */}
      <div className="flex items-center gap-1">
        <span className="text-[#8b9291] text-xs">∧</span>
        <span className="text-[#8b9291] text-xs">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <span className="text-[#b2b2b1] text-sm">∧</span>
        <span className="text-[#b2b2b1] text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs">Personal Access Token</span>
          <span className="text-[#a4a4a3] text-xs">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-transparent border border-[#4a4a48] rounded px-2 py-2 text-[#737470] text-xs w-full placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs">Design URL</span>
          <span className="text-[#a4a4a3] text-xs">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-transparent border border-[#4a4a48] rounded px-2 py-2 text-[#737470] text-xs w-full placeholder-[#737470] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-2">
        <button className="bg-[#b85c2a] text-[#8c8078] text-sm font-semibold px-6 py-2 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-[#8c8078] text-sm font-semibold px-6 py-2 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-sm">Recent Breakdowns</span>
      </div>
    </div>
  );
};
