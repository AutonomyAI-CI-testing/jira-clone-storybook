// TestCard component for displaying UI agent configuration interface
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="mx-auto max-w-sm rounded-lg bg-[#2a2a2a] p-6 shadow-lg"
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <span className="text-xl text-[#b5b5b5]">⚙</span>
    </div>

    {/* Subtitle row */}
    <div className="mt-2 flex items-center gap-2">
      <span className="text-[#8b9291]">^</span>
      <p className="text-sm text-[#8b9291]">From entire frame to a singl...</p>
    </div>

    {/* Spacer */}
    <div className="mt-8"></div>

    {/* Add New Design section */}
    <div className="flex items-center gap-2">
      <span className="text-[#b2b2b1]">^</span>
      <h2 className="text-xl font-bold text-[#b2b2b1]">Add New Design</h2>
    </div>

    {/* Form block */}
    <div className="mt-6 space-y-4">
      {/* Personal Access Token Input */}
      <div>
        <label className="mb-1 flex items-center gap-1 text-sm text-[#a4a4a3]">
          Personal Access Token <span className="text-[#a4a4a3]">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-[#1a1a1a] px-3 py-2 text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#b85c30]"
        />
      </div>

      {/* Design URL Input */}
      <div>
        <label className="mb-1 flex items-center gap-1 text-sm text-[#a3a3a2]">
          Design URL <span className="text-[#a3a3a2]">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#444] bg-[#1a1a1a] px-3 py-2 text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#b85c30]"
        />
      </div>
    </div>

    {/* Button row */}
    <div className="mt-6 flex gap-4">
      <button className="rounded-xl bg-[#b85c30] px-6 py-3 font-semibold text-[#f0d5c0]">
        Awesome
      </button>
      <button className="rounded-xl bg-[#b85c30] px-6 py-3 font-semibold text-[#f0d5c0]">
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns heading */}
    <h3 className="mt-10 text-xl font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
