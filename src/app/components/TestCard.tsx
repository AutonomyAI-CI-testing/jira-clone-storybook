export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] p-6 flex flex-col w-full max-w-sm text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white">UI magician Agent</span>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1 mt-2">
        <span className="text-gray-400 text-sm">∧</span>
        <span className="text-[#c1501a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="my-6" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-base">∧</span>
        <span className="font-bold text-white text-xl">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-sm text-gray-200">Personal Access Token</span>
        <span className="text-gray-400 text-sm">ℹ</span>
      </div>

      {/* 6. Personal Access Token input */}
      <input
        className="mt-2 w-full bg-[#2a2a2a] border border-[#444] rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 outline-none"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-sm text-gray-200">Design URL</span>
        <span className="text-gray-400 text-sm">ℹ</span>
      </div>

      {/* 8. Design URL input */}
      <input
        className="mt-2 w-full bg-[#2a2a2a] border border-[#444] rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 outline-none"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* 9. Action buttons */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-[#c1501a] text-white rounded-lg px-6 py-3 font-semibold">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1501a] text-white rounded-lg px-6 py-3 font-semibold">
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="mt-8">
        <span className="font-bold text-white text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};
