export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-[#b5b5b5] p-5 w-full max-w-sm font-sans rounded"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-sm text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-lg">⚙</span>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mb-8">
        <span className="text-[#8b9291] text-xs">∧</span>
        <span className="text-[#8b9291] text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1] text-sm">∧</span>
        <span className="text-[#b2b2b1] font-semibold text-sm">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Label */}
      <div className="flex items-center gap-1 mb-1">
        <span className="text-[#a4a4a3] text-xs font-medium">
          Personal Access Token
        </span>
        <span className="text-[#a4a4a3] text-xs">ⓘ</span>
      </div>

      {/* Personal Access Token Input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] mb-3 outline-none"
      />

      {/* Design URL Label */}
      <div className="flex items-center gap-1 mb-1">
        <span className="text-[#a3a3a2] text-xs font-medium">Design URL</span>
        <span className="text-[#a3a3a2] text-xs">ⓘ</span>
      </div>

      {/* Design URL Input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#272822] border border-[#929291] rounded px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] mb-4 outline-none"
      />

      {/* Button Row */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-sm font-medium py-2 px-4 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-sm font-medium py-2 px-4 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] font-semibold text-sm">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
