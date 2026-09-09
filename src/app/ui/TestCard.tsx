export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] p-5 w-64"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-base">⚙</span>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#8b9291] text-[11.5px] font-semibold">^</span>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1] text-[11.5px] font-semibold">^</span>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
          Personal Access Token
        </span>
        <span className="text-[#a4a4a3] text-xs">ⓘ</span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#272822] border border-[#a5adad] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] px-2 py-2 mb-3 focus:outline-none focus:border-2 focus:border-[#929291]"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
          Design URL
        </span>
        <span className="text-[#a3a3a2] text-xs">ⓘ</span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#272822] border border-[#929291] border-2 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] px-2 py-2 mb-3 focus:outline-none"
      />

      {/* Button row */}
      <div className="flex gap-3 mt-1 mb-6">
        <button
          type="button"
          className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded py-2 px-3"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded py-2 px-3"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold mt-2">
        Recent Breakdowns
      </h3>
    </div>
  );
};
