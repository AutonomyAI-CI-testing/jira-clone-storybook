
export function TestCard() {
  /**
   * TestCard is a visual smoke-test component designed to verify Tailwind CSS
   * and component scaffolding. It uses exact hex codes from Figma for styling.
   * 
   * Architecture:
   * - Root: #testElem with dark theme (#2a2a2a)
   * - Icons: Inline SVG or Unicode characters to avoid extra dependencies
   * - Colors: Tailwind arbitrary values [#hex] match the Figma design spec
   */
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 text-[#b5b5b5] font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-[#b5b5b5]">UI magician Agent</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#b5b5b5]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.492 15.397a.75.75 0 011.026.112l1.644 2.221a.75.75 0 01-.112 1.026l-2.221 1.644a.75.75 0 01-1.026-.112l-1.644-2.221a.75.75 0 01.112-1.026l2.221-1.644zM10.25 10a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zM12.919 1.701a.75.75 0 00-1.026-.112L10.272 3.81a.75.75 0 00.112 1.026l2.221 1.644a.75.75 0 001.026-.112l1.644-2.221a.75.75 0 00-.112-1.026l-2.221-1.644zM11.75 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#8b9291]">‹</span>
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1]">‹</span>
        <h2 className="text-lg text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Form Area */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="flex items-center gap-2 text-[#a4a4a3] mb-2">
            Personal Access Token
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#a4a4a3]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2c.834 0 1.5.666 1.5 1.5v3a1 1 0 002 0v-3.5a3.5 3.5 0 10-7 0v1a1 1 0 002 0V9z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md bg-[#4a4a4a] border border-[#71726e] text-[#a4a4a3] placeholder-[#737470]"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-[#a4a4a3] mb-2">
            Design URL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#a4a4a3]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2c.834 0 1.5.666 1.5 1.5v3a1 1 0 002 0v-3.5a3.5 3.5 0 10-7 0v1a1 1 0 002 0V9z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/"
            className="w-full p-2 rounded-md bg-[#4a4a4a] border border-[#71726e] text-[#a4a4a3] placeholder-[#737470]"
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#8b4513] text-[#8c8078] font-bold">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#8b4513] text-[#8c8078] font-bold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h2 className="text-lg text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
}
