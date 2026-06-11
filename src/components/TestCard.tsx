
export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-[#b5b5b5] font-sans text-sm">

      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h1>
        <span className="text-[#b5b5b5] text-lg">⚙</span>
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center mb-6">
        <span className="text-[#8b9291] text-lg mr-2">∧</span>
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a single component, the agent slices and dices everything you need</p>
      </div>

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        <span className="text-[#b2b2b1] text-lg mr-2">∧</span>
        <h2 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="personalAccessToken" className="flex items-center text-[#a4a4a3] text-[11.5px] mb-1">
          Personal Access Token <span className="text-[#a4a4a3] ml-1">ⓘ</span>
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#3c3c3c] border border-[#555] text-white placeholder-[#737470] text-[11.5px]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designURL" className="flex items-center text-[#a3a3a2] text-[11.5px] mb-1">
          Design URL <span className="text-[#a3a3a2] ml-1">ⓘ</span>
        </label>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file/:id/:name"
          className="w-full p-2 rounded-md bg-[#3c3c3c] border border-[#555] text-white placeholder-[#71726e] text-[11.5px]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#b5541c] text-[#8c8078] text-[11.5px] font-semibold shadow-md">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#b5541c] text-[#8c8078] text-[11.5px] font-semibold shadow-md">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Heading */}
      <div>
        <h2 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
