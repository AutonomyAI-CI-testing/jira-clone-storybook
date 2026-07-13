export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#222222] p-5 text-white w-[320px] flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white">UI magician Agent</span>
        <span className="text-xl text-white">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-sm text-[#c8764a]">
        <span className="text-xs">∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Vertical spacer */}
      <div className="h-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-white">∧</span>
        <span className="font-bold text-xl text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-1 text-sm text-white">
          Personal Access Token
          <span className="text-gray-400 text-base">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded bg-[#333333] border border-[#555555] px-3 py-2 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#777777]"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-1 text-sm text-white">
          Design URL
          <span className="text-gray-400 text-base">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded bg-[#333333] border border-[#555555] px-3 py-2 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#777777]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b86a36] px-6 py-3 text-white font-semibold hover:bg-[#a05a2c] transition-colors">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b86a36] px-6 py-3 text-white font-semibold hover:bg-[#a05a2c] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="h-4" />
      <span className="font-bold text-xl text-white">Recent Breakdowns</span>
    </div>
  );
};
