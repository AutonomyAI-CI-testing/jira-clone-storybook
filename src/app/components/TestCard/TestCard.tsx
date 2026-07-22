const GearIcon = () => (
  <svg
    width="20"
    height="20"
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

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex min-h-[640px] w-full max-w-md flex-col bg-[#1e211e] px-6 py-8 font-sans text-white">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="mt-1 text-white/80 hover:text-white"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Context / subtitle */}
        <button
          type="button"
          className="mb-12 flex items-center gap-2 text-left text-sm text-[#a67c5d]"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-6 flex items-center gap-2 text-left text-xl font-semibold text-white"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-5">
            <label className="mb-2 flex items-center gap-2 text-base text-[#c8c8c8]">
              Personal Access Token
              <span className="text-[#9a9a9a]" aria-hidden>
                <InfoIcon />
              </span>
            </label>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded border border-[#6b6b6b] bg-[#2a2d2a] px-3 py-2.5 text-sm text-white outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <label className="mb-2 flex items-center gap-2 text-base text-[#c8c8c8]">
              Design URL
              <span className="text-[#9a9a9a]" aria-hidden>
                <InfoIcon />
              </span>
            </label>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2d2a] px-3 py-2.5 text-sm text-white outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-lg bg-[#b5522a] px-8 py-2.5 text-base font-medium text-white hover:bg-[#c45d32]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#b5522a] px-8 py-2.5 text-base font-medium text-white hover:bg-[#c45d32]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="mt-auto text-xl font-semibold text-white">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
