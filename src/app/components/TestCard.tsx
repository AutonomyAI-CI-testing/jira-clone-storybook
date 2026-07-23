const GearIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-md rounded-lg bg-[#1a1a1a] p-6 text-neutral-200 font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-neutral-200">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-neutral-400 hover:text-neutral-200"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-neutral-400"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-neutral-300"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-neutral-300">
                Personal Access Token
              </label>
              <span className="text-neutral-500">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-neutral-500 bg-[#222] px-3 py-2.5 text-sm text-neutral-400 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-neutral-300">Design URL</label>
              <span className="text-neutral-500">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-neutral-500 bg-[#222] px-3 py-2.5 text-sm text-neutral-400 outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#9a4b2e] px-8 py-2.5 text-sm font-medium text-neutral-300"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#9a4b2e] px-8 py-2.5 text-sm font-medium text-neutral-300"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <h2 className="text-base font-medium text-neutral-300">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
