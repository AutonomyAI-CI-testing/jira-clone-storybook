export const TestCard = () => {
  return (
    <div id="testElem" className="text-gray-400 font-sans bg-black">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header with title and settings icon */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-gray-300 text-sm font-semibold">
            UI magician Agent
          </h1>
          <button className="text-gray-400 hover:text-gray-300">⚙</button>
        </div>

        {/* Collapsible section 1 */}
        <div className="mb-6">
          <div className="hover:text-gray-300 flex cursor-pointer items-center gap-2 py-3">
            <span className="text-gray-400">^</span>
            <span className="text-gray-400 text-xs font-semibold">
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Add New Design collapsible section */}
        <div className="mb-6">
          <div className="hover:text-gray-300 flex cursor-pointer items-center gap-2 py-3">
            <span className="text-gray-400">^</span>
            <span className="text-gray-400 text-xs font-semibold">
              Add New Design
            </span>
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-5">
          {/* Personal Access Token field */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-gray-400 text-xs font-semibold">
                Personal Access Token
              </label>
              <span className="text-gray-500 cursor-help">ⓘ</span>
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="bg-gray-950 border-gray-700 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full rounded border px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          {/* Design URL field */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-gray-400 text-xs font-semibold">
                Design URL
              </label>
              <span className="text-gray-500 cursor-help">ⓘ</span>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="bg-gray-950 border-gray-700 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full rounded border px-3 py-2 text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex gap-3">
          <button className="bg-amber-900 hover:bg-amber-800 text-amber-100 flex-1 rounded px-4 py-2 text-xs font-semibold transition-colors">
            Awesome
          </button>
          <button className="bg-amber-900 hover:bg-amber-800 text-amber-100 flex-1 rounded px-4 py-2 text-xs font-semibold transition-colors">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div className="border-gray-800 mt-6 border-t pt-6">
          <p className="text-gray-400 text-xs font-semibold">
            Recent Breakdowns
          </p>
        </div>
      </div>
    </div>
  );
};
