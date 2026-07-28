export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] rounded-xl p-5 w-[320px] flex flex-col gap-4 text-white"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2 text-[#c1704a] text-sm">
        <span>∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">∧</span>
          <span className="text-xl font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-200">
              Personal Access Token
            </label>
            <span className="text-gray-400 text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#1e1e1e] border border-[#4a4a4a] rounded-md px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#c1704a] w-full"
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-200">
              Design URL
            </label>
            <span className="text-gray-400 text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#1e1e1e] border border-[#4a4a4a] rounded-md px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#c1704a] w-full"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-1">
          <button className="flex-1 bg-[#b5451b] hover:bg-[#c1522e] text-white font-semibold py-2 px-4 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b5451b] hover:bg-[#c1522e] text-white font-semibold py-2 px-4 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
