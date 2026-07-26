/**
 * Smoke-test panel mirroring the "UI magician Agent" Figma design.
 * Self-contained, no props. Approximate styling is intentional.
 */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[320px] bg-[#1a1c1a] text-gray-300 px-5 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[18px] font-medium text-gray-200">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-gray-400 hover:text-gray-200"
          >
            <CogIcon />
          </button>
        </div>

        {/* Collapsed context row */}
        <button
          type="button"
          className="flex items-center gap-2 text-sm text-gray-400 mb-8"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button
            type="button"
            className="flex items-center gap-2 text-[15px] text-gray-300 mb-5"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-gray-300">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full bg-[#2a2c2a] border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-400 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-gray-300">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full bg-[#2a2c2a] border border-gray-400 rounded px-3 py-2.5 text-sm text-gray-300 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b4532a] px-5 py-2.5 text-sm text-gray-300"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b4532a] px-5 py-2.5 text-sm text-gray-300"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-[15px] text-gray-300">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}

function CogIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
