export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[390px] min-h-screen bg-[#1a1a1a] p-6 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-white text-2xl leading-none">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-12">
        <span className="text-[#c1632a] text-sm font-semibold">^</span>
        <span className="text-[#c1632a] text-sm italic truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg">^</span>
          <h2 className="text-white font-bold text-lg">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-white text-sm font-medium">
              Personal Access Token
            </label>
            <span className="text-neutral-400 text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 text-neutral-400 placeholder:text-neutral-500 text-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-white text-sm font-medium">Design URL</label>
            <span className="text-neutral-400 text-sm">ⓘ</span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 text-neutral-400 placeholder:text-neutral-500 text-sm outline-none"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-2">
          <button
            type="button"
            className="bg-[#b5451b] text-white font-semibold text-sm px-6 py-3 rounded-lg flex-1"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#b5451b] text-white font-semibold text-sm px-6 py-3 rounded-lg flex-1"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
