export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#282828] p-5 max-w-xs font-sans">
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-sm font-semibold">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-base">⚙</span>
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#8b9291] text-xs">^</span>
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Section heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1] text-sm">^</span>
        <span className="text-[#b2b2b1] text-sm font-semibold">
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#a4a4a3] text-xs font-semibold">
          Personal Access Token
        </span>
        <span className="text-[#a4a4a3] text-xs">ⓘ</span>
      </div>

      {/* 5. PAT Input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full bg-[#1e1e1e] border border-[#444] text-[#737470] placeholder-[#737470] text-xs font-semibold rounded px-3 py-3 mb-3 outline-none"
      />

      {/* 6. Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#a3a3a2] text-xs font-semibold">Design URL</span>
        <span className="text-[#a3a3a2] text-xs">ⓘ</span>
      </div>

      {/* 7. Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full bg-[#1e1e1e] border border-[#444] text-[#71726e] placeholder-[#71726e] text-xs font-semibold rounded px-3 py-3 mb-4 outline-none"
      />

      {/* 8. Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button className="bg-[#B5522B] text-[#e8d5c8] text-xs font-semibold rounded-xl px-6 py-3">
          Awesome
        </button>
        <button className="bg-[#B5522B] text-[#e8d5c8] text-xs font-semibold rounded-xl px-6 py-3">
          Prepare
        </button>
      </div>

      {/* 9. Footer heading */}
      <span className="text-[#b0b0b0] text-sm font-semibold">
        Recent Breakdowns
      </span>
    </div>
  );
};
