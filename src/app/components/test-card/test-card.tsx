// Shared button style for action buttons to reduce duplication
const BUTTON_STYLE =
  "flex-1 rounded bg-amber-900 px-4 py-2 text-xs font-medium text-amber-700 hover:bg-amber-800 active:bg-amber-900";

// Shared input style for both token and URL inputs
const INPUT_STYLE =
  "w-full rounded border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-500 placeholder-gray-700 focus:border-gray-500 focus:outline-none";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-md rounded-lg bg-black p-6">
      {/* Header Section: Title with menu icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-300 text-sm font-semibold">
          UI magician Agent
        </h1>
        <div className="border-gray-600 text-gray-400 flex h-5 w-5 items-center justify-center rounded-full border text-xs">
          ⋯
        </div>
      </div>

      {/* Collapsible Section: Collapsed state with preview text */}
      <div className="text-gray-400 mb-6 flex items-center gap-2 text-xs">
        <span className="text-gray-500">▲</span>
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Expandable Section: Form inputs area */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-gray-500 text-xs">▼</span>
        <h2 className="text-gray-300 text-xs font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1">
          <label className="text-gray-400 text-xs">Personal Access Token</label>
          <span className="text-gray-600 text-xs">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_STYLE}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1">
          <label className="text-gray-400 text-xs">Design URL</label>
          <span className="text-gray-600 text-xs">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={INPUT_STYLE}
        />
      </div>

      {/* Action Buttons: Primary actions for design submission */}
      <div className="mb-6 flex gap-3">
        <button className={BUTTON_STYLE}>Awesome</button>
        <button className={BUTTON_STYLE}>Prepare</button>
      </div>

      {/* Footer Section: List of recent items */}
      <div className="text-gray-400 text-xs">Recent Breakdowns</div>
    </div>
  );
};
