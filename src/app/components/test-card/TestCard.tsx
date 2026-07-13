export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full max-w-sm p-6 flex flex-col gap-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        <span className="text-white text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-[#c8753a] text-sm">∧</span>
        <span className="text-[#c8753a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <span className="text-white text-base">∧</span>
          <span className="text-white text-xl font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-white text-sm font-semibold">
              Personal Access Token
            </label>
            <span className="text-white text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-white text-sm font-semibold">
              Design URL
            </label>
            <span className="text-white text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 mt-2">
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04e22] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04e22] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="text-white text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
