export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#272822] w-[254px] p-4 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-sm font-semibold">
          UI magician Agent
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </div>

      {/* Collapsed label row */}
      <div className="flex items-center gap-1 mb-6">
        <span className="text-[#8b9291] text-xs">▲</span>
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-1 mb-4">
        <span className="text-[#b2b2b1] text-sm">▲</span>
        <span className="text-[#b2b2b1] text-sm font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-xs font-medium">
            Personal Access Token
          </span>
          <span className="text-[#a4a4a3] text-xs">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] text-xs placeholder-[#737470] p-2 rounded outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-xs font-medium">Design URL</span>
          <span className="text-[#a3a3a2] text-xs">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] text-xs placeholder-[#71726e] p-2 rounded outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold rounded px-5 py-2">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold rounded px-5 py-2">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-sm font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
