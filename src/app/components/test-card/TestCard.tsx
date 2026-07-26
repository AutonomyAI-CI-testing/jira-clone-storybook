export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-full max-w-sm bg-[#1a1a1a] px-6 py-8 font-sans text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium text-[#d4d4d4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#c8c8c8]"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed accordion row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
        >
          <ChevronUpIcon className="h-3 w-3 shrink-0 rotate-180" />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
          >
            <ChevronUpIcon className="h-3 w-3 shrink-0" />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-lg bg-[#a0522d] px-8 py-2.5 text-sm font-medium text-[#c4a882]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a0522d] px-8 py-2.5 text-sm font-medium text-[#c4a882]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <h2 className="text-base font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7.5L6 4.5L9 7.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#7a7a7a"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7v4" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.6" fill="#7a7a7a" stroke="none" />
  </svg>
);
