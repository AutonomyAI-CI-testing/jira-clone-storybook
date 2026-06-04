export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto w-full max-w-md bg-black p-6 text-left"
    >
      {/* Header with Title and Settings Icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base font-semibold text-white">
          UI magician Agent
        </h1>
        <svg
          className="text-gray-400 h-5 w-5"
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
          className="text-gray-500 mt-0.5 h-4 w-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline
            points="18 15 12 9 6 15"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-gray-500 text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Header */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          className="text-gray-500 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline
            points="6 9 12 15 18 9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="text-gray-600 text-sm font-semibold">Add New Design</h2>
      </div>

      {/* Form Section */}
      <div className="mb-8 space-y-6">
        {/* Personal Access Token Field */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-gray-500 text-xs font-semibold">
              Personal Access Token
            </label>
            <svg
              className="text-gray-500 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <text
                x="12"
                y="15"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
              >
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-gray-900 border-gray-600 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full border px-3 py-2 text-xs focus:outline-none"
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-gray-500 text-xs font-semibold">
              Design URL
            </label>
            <svg
              className="text-gray-500 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <text
                x="12"
                y="15"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
              >
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-gray-900 border-gray-600 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full border px-3 py-2 text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="bg-orange-700 hover:bg-orange-800 text-gray-400 flex-1 rounded px-4 py-2 text-sm font-semibold transition-colors">
          Awesome
        </button>
        <button className="bg-orange-700 hover:bg-orange-800 text-gray-400 flex-1 rounded px-4 py-2 text-sm font-semibold transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-gray-500 text-sm font-semibold">Recent Breakdowns</h3>
    </div>
  );
};
