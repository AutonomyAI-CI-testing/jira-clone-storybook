export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-4 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-bold">UI magician Agent</h2>
        <span className="text-[#b5b5b5] text-lg">⚙</span>
      </div>

      {/* Sub-row */}
      <div className="flex items-center mb-6">
        <span className="text-[#b5b5b5] mr-2 text-lg">^</span>
        <p className="text-[#8b9291] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="h-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <span className="text-[#b5b5b5] mr-2 text-lg">^</span>
        <h3 className="text-[#b5b5b5] text-base font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label htmlFor="pat" className="text-[#a4a4a3] text-sm flex items-center mb-2">
          Personal Access Token <span className="ml-1 text-[#a4a4a3]">ⓘ</span>
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#1e1e1e] border border-[#555] text-[#737470] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label htmlFor="design-url" className="text-[#a4a4a3] text-sm flex items-center mb-2">
          Design URL <span className="ml-1 text-[#a4a4a3]">ⓘ</span>
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#1e1e1e] border border-[#555] text-[#737470] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-6 py-2 bg-[#a0522d] text-white rounded-lg text-sm">
          Awesome
        </button>
        <button className="px-6 py-2 bg-[#a0522d] text-white rounded-lg text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h3 className="text-[#b5b5b5] text-base font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}