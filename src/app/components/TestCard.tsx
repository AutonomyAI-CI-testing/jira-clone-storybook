export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 w-[280px] min-h-[508px] font-sans flex flex-col"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#b5b5b5] font-semibold text-sm">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] opacity-70 text-base">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#8b9291] text-xs">∧</span>
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[#b2b2b1] text-xs">∧</span>
        <span className="text-[#b2b2b1] font-semibold text-sm">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#a4a4a3] text-xs font-semibold">
            Personal Access Token
          </span>
          <span className="text-[#a4a4a3] text-xs opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#a3a3a2] text-xs font-semibold">
            Design URL
          </span>
          <span className="text-[#a3a3a2] text-xs opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button className="bg-[#843a17] rounded-lg px-6 py-2 text-[#8c8078] text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-[#843a17] rounded-lg px-6 py-2 text-[#8c8078] text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] font-semibold text-xl">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
