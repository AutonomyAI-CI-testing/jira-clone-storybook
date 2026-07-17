export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[360px] min-h-screen p-5 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* Chevron subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-[#c87941] text-sm">^</span>
        <span className="text-[#c87941] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-white text-sm font-semibold">^</span>
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm font-medium">Personal Access Token</span>
          <span className="text-gray-400 text-xs border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center leading-none">
            i
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-[#555] rounded text-gray-400 text-sm px-3 py-2 w-full outline-none placeholder-gray-600"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm font-medium">Design URL</span>
          <span className="text-gray-400 text-xs border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center leading-none">
            i
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-[#555] rounded text-gray-400 text-sm px-3 py-2 w-full outline-none placeholder-gray-600"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-[#b85c2c] hover:bg-[#a04e22] text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#9e4e24] hover:bg-[#8a4020] text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns footer */}
      <div>
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
