export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm bg-[#2a2a2a] p-5 text-white"
    >
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <span className="text-xl text-white">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="mb-8 flex items-center gap-2">
        <span className="text-sm text-[#b85c2a]">∧</span>
        <span className="text-sm text-[#b85c2a]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-base font-bold text-white">∧</span>
        <h2 className="text-base font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <span className="text-sm text-white opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-2.5 text-sm text-[#999] placeholder:text-[#999] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Design URL</label>
          <span className="text-sm text-white opacity-70">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-2.5 text-sm text-[#999] placeholder:text-[#999] outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-bold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-bold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
