import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 rounded-lg bg-gray-900 p-4 text-gray-400"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-gray-700 pb-3">
        <h2 className="text-sm font-semibold text-gray-300">
          UI magician Agent
        </h2>
        <span className="text-gray-500">⚙️</span>
      </div>

      {/* Collapsible Section */}
      <div className="mb-4 flex items-center justify-between border-b border-gray-700 pb-3">
        <p className="text-xs text-gray-400">
          From entire frame to a singl...
        </p>
        <span className="text-gray-500">▼</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 flex items-center justify-between pb-3">
        <h3 className="text-sm font-semibold text-gray-300">
          Add New Design
        </h3>
        <span className="text-gray-500">›</span>
      </div>

      {/* Input Fields */}
      <div className="mb-4 space-y-3">
        {/* Personal Access Token */}
        <div>
          <label className="mb-1 flex items-center text-xs text-gray-400">
            Personal Access Token
            <span className="ml-1 text-gray-500">ℹ️</span>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              "w-full rounded border border-gray-600 bg-gray-800 px-2 py-1.5",
              "text-xs text-gray-300 placeholder-gray-600",
              "focus:border-gray-500 focus:outline-none"
            )}
          />
        </div>

        {/* Design URL */}
        <div>
          <label className="mb-1 flex items-center text-xs text-gray-400">
            Design URL
            <span className="ml-1 text-gray-500">ℹ️</span>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "w-full rounded border border-gray-600 bg-gray-800 px-2 py-1.5",
              "text-xs text-gray-300 placeholder-gray-600",
              "focus:border-gray-500 focus:outline-none"
            )}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          className={cx(
            "flex-1 rounded border border-gray-600 px-3 py-1.5",
            "text-xs font-medium text-gray-400",
            "hover:bg-gray-800 active:bg-gray-700"
          )}
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded border border-gray-600 px-3 py-1.5",
            "text-xs font-medium text-gray-400",
            "hover:bg-gray-800 active:bg-gray-700"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-gray-700 pt-3">
        <h3 className="text-xs font-semibold text-gray-400">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
