export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-64 bg-black p-5">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-300 text-base font-semibold">
          UI magician Agent
        </h1>
        <svg
          className="text-gray-400 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="1" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M9 9h6M9 15h6" strokeWidth="1" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          className="text-gray-400 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline points="18 15 12 9 6 15" strokeWidth="2" />
        </svg>
        <span className="text-gray-500 text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          className="text-gray-400 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <polyline points="18 15 12 9 6 15" strokeWidth="2" />
        </svg>
        <span className="text-gray-400 text-base font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-gray-500 text-sm font-semibold">
            Personal Access Token
          </label>
          <svg
            className="text-gray-500 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="currentColor"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="border-gray-600 bg-gray-900 text-gray-600 placeholder-gray-700 w-full border px-3 py-2 text-sm"
          readOnly
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-gray-500 text-sm font-semibold">
            Design URL
          </label>
          <svg
            className="text-gray-500 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="currentColor"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="border-gray-600 bg-gray-900 text-gray-600 placeholder-gray-700 w-full border px-3 py-2 text-sm"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button className="bg-orange-700 text-orange-900 hover:bg-orange-600 flex-1 rounded px-4 py-2 text-center text-sm font-semibold">
          Awesome
        </button>
        <button className="bg-orange-700 text-orange-900 hover:bg-orange-600 flex-1 rounded px-4 py-2 text-center text-sm font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-gray-400 text-base font-semibold">
        Recent Breakdowns
      </div>
    </div>
  );
};
