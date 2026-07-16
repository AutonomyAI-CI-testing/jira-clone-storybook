export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-4 bg-[#1e1e1e] p-6 text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-xl text-gray-400">⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <span className="text-sm text-[#c1501a]">^</span>
        <span className="text-sm text-[#c1501a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-4" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">^</span>
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* 5. Label: Personal Access Token */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">
          Personal Access Token
        </span>
        <span className="text-sm text-gray-400">ℹ</span>
      </div>

      {/* 6. Input: PAT */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded border border-[#444444] bg-[#2a2a2a] px-4 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
      />

      {/* 7. Label: Design URL */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">Design URL</span>
        <span className="text-sm text-gray-400">ℹ</span>
      </div>

      {/* 8. Input: Design URL */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded border border-[#444444] bg-[#2a2a2a] px-4 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
      />

      {/* 9. Button row */}
      <div className="flex justify-center gap-4">
        <button className="rounded-lg bg-[#c1501a] px-6 py-3 font-semibold text-white">
          Awesome
        </button>
        <button className="rounded-lg bg-[#c1501a] px-6 py-3 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="mt-4">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
