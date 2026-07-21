export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2520] min-h-screen w-full p-5 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <span className="text-gray-400 text-2xl">⚙️</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">^</span>
        <span className="text-gray-400 italic text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span className="text-white text-sm">^</span>
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-gray-300 text-sm">Personal Access Token</span>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#1e1a16] border border-gray-600 rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-gray-300 text-sm">Design URL</span>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#1e1a16] border border-gray-600 rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
      />

      {/* Buttons row */}
      <div className="flex gap-4 mt-2">
        <button className="flex-1 bg-[#b85c38] text-white font-semibold rounded-lg py-3">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c38] text-white font-semibold rounded-lg py-3">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-6">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
