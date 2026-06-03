export const TestCardView = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen w-full bg-black p-5">
      <div className="mx-auto w-full max-w-xs">
        {/* Header with title and settings icon */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-base font-semibold text-gray-300">
            UI magician Agent
          </h1>
          {/* Settings icon placeholder */}
          <div className="h-4 w-4 rounded-full border border-gray-400" />
        </div>

        {/* First collapsible section */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            {/* Chevron up icon */}
            <div className="h-3 w-3 border-b-2 border-l-2 border-gray-300" />
            <span className="text-sm font-semibold text-gray-500">
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Add New Design section */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            {/* Chevron up icon */}
            <div className="h-3 w-3 border-b-2 border-l-2 border-gray-300" />
            <span className="text-base font-semibold text-gray-400">
              Add New Design
            </span>
          </div>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-500">
              Personal Access Token
            </label>
            {/* Info icon placeholder */}
            <div className="h-4 w-4 rounded-full border border-gray-500" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-600 placeholder-gray-700"
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-500">
              Design URL
            </label>
            {/* Info icon placeholder */}
            <div className="h-4 w-4 rounded-full border border-gray-500" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-600 placeholder-gray-700"
            readOnly
          />
        </div>

        {/* Action buttons */}
        <div className="mb-8 flex gap-4">
          <button
            type="button"
            className="flex-1 rounded bg-orange-700 py-2.5 text-center text-sm font-semibold text-orange-200 transition-colors hover:bg-orange-600"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-orange-700 py-2.5 text-center text-sm font-semibold text-orange-200 transition-colors hover:bg-orange-600"
          >
            Prepare
          </button>
        </div>

        {/* Footer text */}
        <div className="text-base font-semibold text-gray-400">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
