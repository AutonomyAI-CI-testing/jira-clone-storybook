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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 6.5L6 1.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="M8 7v4"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem">
      <div className="flex min-h-[520px] w-full max-w-sm flex-col bg-[#1a1a1a] px-6 py-6 text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <h1 className="text-lg font-medium text-[#d4d4d4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-[#9a9a9a]"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed frame row */}
        <button
          type="button"
          className="mb-8 flex items-center gap-2 text-sm text-[#9a9a9a]"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex items-center gap-2 text-base font-medium text-[#c8c8c8]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">
                Personal Access Token
              </label>
              <span className="text-[#8a8a8a]" aria-hidden="true">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#bdbdbd] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Design URL</label>
              <span className="text-[#8a8a8a]" aria-hidden="true">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#bdbdbd] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a34520] px-6 py-2.5 text-sm font-medium text-[#d4b8a8]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a34520] px-6 py-2.5 text-sm font-medium text-[#d4b8a8]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-auto">
          <h2 className="text-base font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
