export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2b2b2b] min-h-screen w-full p-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-[#a0a0a0] text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#c17a3a] text-sm font-bold">^</span>
        <span className="text-[#c17a3a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-white text-sm font-bold">^</span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            Personal Access Token
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#888] text-xs text-[#888]">
            i
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-3 text-sm text-[#999] placeholder-[#777] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">Design URL</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#888] text-xs text-[#888]">
            i
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#777] bg-[#3a3a3a] px-3 py-3 text-sm text-[#999] placeholder-[#777] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b5541e] py-4 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5541e] py-4 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
