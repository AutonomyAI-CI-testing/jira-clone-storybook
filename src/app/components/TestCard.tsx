export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-5 w-full max-w-sm font-sans min-h-screen"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-xl text-[#aaa]">⚙</span>
      </div>

      {/* Collapsed section indicator */}
      <div className="flex items-center gap-2 text-sm text-[#c0622a]">
        <span className="text-xs">∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="my-6" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-white font-bold">∧</span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label + input */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm text-[#ccc]">Personal Access Token</label>
          <span className="text-sm text-[#aaa]">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#1a1a1a] border border-[#555] rounded px-3 py-2 text-sm text-[#aaa] placeholder:text-[#666] outline-none"
        />
      </div>

      {/* Design URL label + input */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm text-[#ccc]">Design URL</label>
          <span className="text-sm text-[#aaa]">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#1a1a1a] border border-[#555] rounded px-3 py-2 text-sm text-[#aaa] placeholder:text-[#666] outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8 justify-center">
        <button className="bg-[#c0622a] text-white font-semibold rounded-lg px-6 py-2 text-sm">
          Awesome
        </button>
        <button className="bg-[#c0622a] text-white font-semibold rounded-lg px-6 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="text-xl font-bold text-white mt-6">Recent Breakdowns</div>
    </div>
  );
};
