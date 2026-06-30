export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</h2>
        <span className="text-[#b5b5b5] text-lg">⚙</span>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#8b7355] text-sm">˄</span>
        <p className="text-[#8b7355] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="my-6"></div>

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1] text-base">˄</span>
        <h3 className="text-[#b2b2b1] font-bold text-base">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="accessToken" className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          id="accessToken"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded-md p-2 text-[#b5b5b5] placeholder-[#555] focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-sm">Design URL</label>
          <span className="text-[#a4a4a3] text-sm">ⓘ</span>
        </div>
        <input
          id="designUrl"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded-md p-2 text-[#b5b5b5] placeholder-[#555] focus:outline-none"
        />
      </div>

      {/* Buttons Row */}
      <div className="flex gap-4 justify-start mb-8">
        <button className="bg-[#b5522a] text-[#8c8078] rounded-lg px-6 py-3 text-sm font-semibold">
          Awesome
        </button>
        <button className="bg-[#b5522a] text-[#8c8078] rounded-lg px-6 py-3 text-sm font-semibold">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <p className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</p>
      </div>
    </div>
  );
}
