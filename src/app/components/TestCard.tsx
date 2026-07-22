/** Self-contained panel approximating the “UI magician Agent” Figma design. */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-[420px] bg-[#1a1c16] px-6 py-8 text-[#c8c9c2] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-tight text-[#e8e8e3]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#9a9b93]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed section row */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[#b0b1a9]"
      >
        <ChevronUpIcon />
        <span className="truncate text-base">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-lg font-medium text-[#d0d1c9]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-base text-[#c8c9c2]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#6b6c64] bg-[#22241c] px-3 py-2.5 text-[#8a8b83]">
            figd_xxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-base text-[#c8c9c2]">Design URL</label>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#8a8b83] bg-[#22241c] px-3 py-2.5 text-[#9a9b93]">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#b8612a] px-6 py-2.5 text-base font-medium text-[#d4a88a]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#b8612a] px-6 py-2.5 text-base font-medium text-[#d4a88a]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4">
        <h2 className="text-lg font-medium text-[#d0d1c9]">Recent Breakdowns</h2>
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

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
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
    aria-hidden="true"
    className="shrink-0 text-[#8a8b83]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default TestCard;
