export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-white p-6 min-h-screen w-[320px]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-gray-400 text-2xl leading-none">⚙️</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-gray-400 text-sm font-semibold">^</span>
        <span className="text-[#c47a4a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white text-sm font-semibold">^</span>
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <span className="text-gray-400 text-sm">ℹ️</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#444] rounded text-gray-300 placeholder-gray-500 p-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <span className="text-gray-400 text-sm">ℹ️</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#555] rounded text-gray-300 placeholder-gray-500 p-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b5451b] text-white rounded-lg px-6 py-3 font-semibold text-sm">
          Awesome
        </button>
        <button className="bg-[#b5451b] text-white rounded-lg px-6 py-3 font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
}
