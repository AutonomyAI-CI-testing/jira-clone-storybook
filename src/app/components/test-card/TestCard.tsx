export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#272822] p-4 w-[254px] font-sans flex flex-col gap-3">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</span>
        <span className="text-[#b5b5b5] text-base">⚙</span>
      </div>

      {/* 2. Chevron + muted text */}
      <div className="flex items-center gap-2">
        <span className="text-[#8b9291] text-xs">∧</span>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-6" />

      {/* 4. Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span className="text-[#b2b2b1] font-semibold text-xs">∧</span>
        <span className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label + info icon */}
      <div className="flex items-center gap-1 mt-2">
        <span className="text-[#a4a4a3] font-semibold text-[11.5px]">Personal Access Token</span>
        <span className="text-[#a4a4a3] text-xs">ⓘ</span>
      </div>

      {/* 6. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2 text-[#737470] text-[11.5px] font-semibold placeholder:text-[#737470] outline-none"
      />

      {/* 7. Design URL label + info icon */}
      <div className="flex items-center gap-1 mt-1">
        <span className="text-[#a3a3a2] font-semibold text-[11.5px]">Design URL</span>
        <span className="text-[#a3a3a2] text-xs">ⓘ</span>
      </div>

      {/* 8. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2 text-[#71726e] text-[11.5px] font-semibold placeholder:text-[#71726e] outline-none"
      />

      {/* 9. Buttons row */}
      <div className="flex gap-3 justify-center mt-2">
        <button className="bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] rounded px-6 py-2 w-[85px] h-[37px]">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] rounded px-6 py-2 w-[85px] h-[37px]">
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</span>
      </div>
    </div>
  );
};
