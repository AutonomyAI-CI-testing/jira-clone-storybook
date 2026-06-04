export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-black p-6 w-full max-w-md mx-auto text-left">
      {/* Header with Title and Settings Icon */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white text-base font-semibold">UI magician Agent</h1>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
          <circle cx="17" cy="12" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8 flex items-start gap-2">
        <svg
          className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline points="18 15 12 9 6 15" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-xs text-gray-500 font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Header */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <h2 className="text-sm text-gray-600 font-semibold">Add New Design</h2>
      </div>

      {/* Form Section */}
      <div className="space-y-6 mb-8">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-gray-500 font-semibold">
              Personal Access Token
            </label>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="12">
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-gray-900 border border-gray-600 px-3 py-2 text-xs text-gray-500 placeholder-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-gray-500 font-semibold">Design URL</label>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="12">
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-gray-900 border border-gray-600 px-3 py-2 text-xs text-gray-500 placeholder-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="flex-1 bg-orange-700 hover:bg-orange-800 text-gray-400 font-semibold py-2 px-4 rounded text-sm transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-orange-700 hover:bg-orange-800 text-gray-400 font-semibold py-2 px-4 rounded text-sm transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-sm text-gray-500 font-semibold">Recent Breakdowns</h3>
    </div>
  );
};
