/**
 * TestCard Component
 *
 * A self-contained card UI for the "UI magician Agent" interface.
 * Displays agent status, design import form, and recent breakdowns.
 * Uses custom gray and orange color palette defined in tailwind config.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-black p-5 w-64">
      {/* Header with agent title and settings icon */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold text-gray-400">
          UI magician Agent
        </h1>
        {/* Settings Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-gray-400"
        >
          <path
            d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M8 1v2.5M8 12.5V15M1 8h2.5M12.5 8H15M3.5 3.5l1.77 1.77M10.73 10.73l1.77 1.77M12.5 3.5l-1.77 1.77M5.27 10.73l-1.77 1.77"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="flex items-start gap-2 mb-4 pb-4 border-b border-gray-700">
        {/* Chevron Icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="mt-0.5 flex-shrink-0 text-gray-500"
        >
          <path
            d="M5.5 10.5L10 6 5.5 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-xs font-semibold text-gray-500 leading-tight">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron Icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-gray-500 flex-shrink-0"
          >
            <path
              d="M5.5 1.5L10 6 5.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-xs font-semibold text-gray-400">
            Add New Design
          </h2>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <label className="text-xs font-semibold text-gray-400">
                Personal Access Token
              </label>
              {/* Info Icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-gray-500"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="6"
                  y="7.5"
                  textAnchor="middle"
                  className="text-xs fill-current"
                  fontSize="8"
                >
                  i
                </text>
              </svg>
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full px-3 py-2 text-xs font-semibold bg-gray-800 text-gray-500 border border-gray-700 rounded placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Design URL Field */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <label className="text-xs font-semibold text-gray-400">
                Design URL
              </label>
              {/* Info Icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-gray-500"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="6"
                  y="7.5"
                  textAnchor="middle"
                  className="text-xs fill-current"
                  fontSize="8"
                >
                  i
                </text>
              </svg>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full px-3 py-2 text-xs font-semibold bg-gray-800 text-gray-500 border border-gray-700 rounded placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        <button className="flex-1 px-4 py-2 text-xs font-semibold bg-orange-700 text-gray-500 rounded hover:bg-orange-600 active:bg-orange-800 transition-colors">
          Awesome
        </button>
        <button className="flex-1 px-4 py-2 text-xs font-semibold bg-orange-700 text-gray-500 rounded hover:bg-orange-600 active:bg-orange-800 transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-2">
        <h3 className="text-xs font-semibold text-gray-400">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
