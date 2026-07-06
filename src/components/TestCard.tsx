export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] min-h-screen p-5 max-w-[380px] mx-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[#b5b5b5] text-xl font-semibold">
          UI magician Agent
        </h1>
        <span className="text-[#b5b5b5] text-xl">⚙</span>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#8b9291] text-sm">^</span>
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#b2b2b1] text-base font-bold">^</span>
        <h2 className="text-[#b2b2b1] text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[#737470] placeholder-[#737470] text-sm outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a4a4a3] text-sm">Design URL</label>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[#71726e] placeholder-[#71726e] text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-3 px-6 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-3 px-6 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[#b0b0b0] text-lg font-semibold">
        Recent Breakdowns
      </h3>
    </div>
  );
};
