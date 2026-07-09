export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2b2b2b] text-neutral-200 w-[320px] min-h-screen p-5 flex flex-col gap-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-neutral-100">UI magician Agent</span>
        <span className="text-neutral-400 text-xl">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-[#c87941] text-sm">
        <span>∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <span className="text-neutral-200 font-bold text-base">∧</span>
        <span className="text-neutral-100 font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-neutral-300 text-sm font-medium">Personal Access Token</span>
          <span className="text-neutral-400 text-sm border border-neutral-500 rounded-full w-4 h-4 flex items-center justify-center text-xs leading-none">i</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-neutral-500 rounded px-3 py-2 text-neutral-400 text-sm placeholder-neutral-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-neutral-300 text-sm font-medium">Design URL</span>
          <span className="text-neutral-400 text-sm border border-neutral-500 rounded-full w-4 h-4 flex items-center justify-center text-xs leading-none">i</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-neutral-500 rounded px-3 py-2 text-neutral-400 text-sm placeholder-neutral-500 outline-none"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-[#b85c2c] text-white font-semibold py-3 rounded-lg text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2c] text-white font-semibold py-3 rounded-lg text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-neutral-100 font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
