export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen p-5 flex flex-col gap-4 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">∧</span>
        <span className="text-[#c87941] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-base">∧</span>
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Form area */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token label */}
        <div className="flex items-center gap-2">
          <span className="text-gray-200 text-sm font-medium">
            Personal Access Token
          </span>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>

        {/* Token input */}
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-gray-600 text-gray-400 rounded px-3 py-2 w-full placeholder-gray-500 outline-none"
          readOnly
        />

        {/* Design URL label */}
        <div className="flex items-center gap-2">
          <span className="text-gray-200 text-sm font-medium">Design URL</span>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>

        {/* URL input */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-gray-600 text-gray-400 rounded px-3 py-2 w-full placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mt-2">
        <button className="bg-[#b8571e] text-white font-semibold px-6 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#b8571e] text-white font-semibold px-6 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};
