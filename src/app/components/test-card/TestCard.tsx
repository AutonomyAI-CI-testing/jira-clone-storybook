export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] bg-[#242424] px-5 py-5 font-sans text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-xl text-white">⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs text-[#aaa]">^</span>
        <span className="text-sm text-[#c8764a]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* 3. Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-white">^</span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="mt-5">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-sm text-[#ccc]">Personal Access Token</span>
          <span className="text-xs text-[#aaa]">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#2e2e2e] px-3 py-2 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* 5. Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-sm text-[#ccc]">Design URL</span>
          <span className="text-xs text-[#aaa]">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#2e2e2e] px-3 py-2 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* 6. Orange buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#c0622a] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#a8541f] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* 7. Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
