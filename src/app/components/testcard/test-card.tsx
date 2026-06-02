// Settings/gear icon SVG used in the header
const SettingsIcon = () => (
  <svg
    className="h-4 w-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 002.572 1.065c.426 1.756 2.924 1.756 3.35 0a1.724 1.724 0 002.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 001.065-2.572c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 00-1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Downward arrow icon used in collapsible sections
const DownArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

// Right arrow icon used in collapsible sections
const RightArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Information icon used in field labels
const InfoIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-2xl space-y-6 rounded-lg bg-black p-6">
        {/* Header with Settings Icon */}
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-400">UI magician Agent</h1>
          <button className="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-800">
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="space-y-3 border-b border-gray-700 pb-4">
          <button className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-gray-400">
            <span>From entire frame to a singl...</span>
            <DownArrowIcon />
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-3 border-b border-gray-700 pb-4">
          <button className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-gray-400">
            <span>Add New Design</span>
            <RightArrowIcon />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <span>Personal Access Token</span>
              <InfoIcon />
            </label>
            <input
              type="text"
              placeholder="Enter token"
              className="w-full rounded border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <span>Design URL</span>
              <InfoIcon />
            </label>
            <input
              type="text"
              placeholder="Enter design URL"
              className="w-full rounded border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 rounded bg-amber-900 px-4 py-2 text-xs font-semibold text-gray-400 hover:bg-amber-800 active:bg-amber-950">
            Awesome
          </button>
          <button className="flex-1 rounded bg-amber-900 px-4 py-2 text-xs font-semibold text-gray-400 hover:bg-amber-800 active:bg-amber-950">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-xs font-semibold text-gray-500">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};
