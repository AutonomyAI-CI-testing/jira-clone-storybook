export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-80 p-5 rounded-lg flex flex-col gap-5"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">UI magician Agent</span>
        <span className="text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-[#b85c2a] text-sm">∧</span>
        <span className="text-[#b85c2a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-white font-bold text-sm">∧</span>
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Personal Access Token
            </label>
            <span className="text-zinc-400 text-xs">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-zinc-800 border border-zinc-600 text-zinc-400 placeholder-zinc-500 rounded px-3 py-2 text-sm w-full outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Design URL
            </label>
            <span className="text-zinc-400 text-xs">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-zinc-800 border border-zinc-600 text-zinc-400 placeholder-zinc-500 rounded px-3 py-2 text-sm w-full outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="bg-[#b85c2a] text-white px-6 py-2 rounded-lg font-medium flex-1">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white px-6 py-2 rounded-lg font-medium flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
