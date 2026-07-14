export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen p-6 flex flex-col gap-4 max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <span className="text-white text-2xl">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <span className="text-[#c87941] text-sm">∧</span>
        <span className="text-[#c87941] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-lg">∧</span>
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <span className="text-white text-sm opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#3a3a3a] border border-[#555] text-gray-400 placeholder-gray-500 rounded px-3 py-3 w-full text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <span className="text-white text-sm opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#3a3a3a] border border-[#555] text-gray-400 placeholder-gray-500 rounded px-3 py-3 w-full text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-2">
        <button className="bg-[#b5451b] text-white font-semibold rounded-lg px-8 py-3 hover:opacity-90">
          Awesome
        </button>
        <button className="bg-[#b5451b] text-white font-semibold rounded-lg px-8 py-3 hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
