export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-4 bg-[#1e1e1e] p-5 text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        <span className="text-xl text-gray-400">⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <span className="text-xs text-[#c1501a]">∧</span>
        <span className="text-sm text-[#c1501a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="py-3" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-white">∧</span>
        <span className="text-base font-bold">Add New Design</span>
      </div>

      {/* 5. Label: Personal Access Token */}
      <div className="flex items-center gap-1">
        <span className="text-sm text-gray-300">Personal Access Token</span>
        <span className="text-xs text-gray-400">ℹ</span>
      </div>

      {/* 6. Input: token */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      />

      {/* 7. Label: Design URL */}
      <div className="flex items-center gap-1">
        <span className="text-sm text-gray-300">Design URL</span>
        <span className="text-xs text-gray-400">ℹ</span>
      </div>

      {/* 8. Input: URL */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      />

      {/* 9. Two buttons */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-lg bg-[#c1501a] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#a04215] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="pt-2">
        <span className="text-base font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
