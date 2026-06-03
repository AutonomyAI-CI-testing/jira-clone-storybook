export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-6 font-primary text-font-subtler"
    >
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-300">
            UI magician Agent
          </h1>
          <button className="text-gray-400 hover:text-gray-300">⚙️</button>
        </div>

        {/* Collapsible Section */}
        <div className="rounded border border-gray-700 bg-gray-950 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-400">
              From entire frame to a singl...
            </p>
            <span className="text-gray-500">▼</span>
          </div>
        </div>

        {/* Add New Design Section */}
        <div className="rounded border border-gray-700 bg-gray-950 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400">
              Add New Design
            </span>
            <span className="text-gray-500">›</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-400">
              Personal Access Token
            </label>
            <input
              type="password"
              placeholder="••••••••••••••••"
              className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
              readOnly
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-400">
              Design URL
            </label>
            <input
              type="text"
              placeholder="https://www.figma.com/file/..."
              className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded bg-amber-900 px-4 py-2 text-xs font-semibold text-amber-100 hover:bg-amber-800">
            Awesome
          </button>
          <button className="flex-1 rounded bg-amber-900 px-4 py-2 text-xs font-semibold text-amber-100 hover:bg-amber-800">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="rounded border border-gray-700 bg-gray-950 p-4">
          <h3 className="text-xs font-semibold text-gray-400">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
