export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2928] px-5 py-6 font-sans"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-xl text-[#a0896e]">⚙</span>
      </div>

      {/* Collapsed section */}
      <div className="mb-8 flex items-center gap-2">
        <span className="text-sm text-[#a0896e]">∧</span>
        <span className="text-sm text-[#a0896e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="mb-5 flex items-center gap-2">
          <span className="text-base text-white">∧</span>
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#d4c4b0]">
              Personal Access Token
            </label>
            <span className="text-sm text-[#a0896e]">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#4a4540] bg-[#343230] px-3 py-2.5 text-sm text-[#a0896e] placeholder-[#6b5d52] outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#d4c4b0]">
              Design URL
            </label>
            <span className="text-sm text-[#a0896e]">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#6b5d52] bg-[#343230] px-3 py-2.5 text-sm text-[#a0896e] placeholder-[#6b5d52] outline-none"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 rounded-lg bg-[#b5522a] px-4 py-3 text-sm font-semibold text-white">
            Awesome
          </button>
          <button className="flex-1 rounded-lg bg-[#b5522a] px-4 py-3 text-sm font-semibold text-white">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
