export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-xl bg-[#1c1c1c] px-6 py-6 font-sans text-[#c8c8c8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-tight text-[#d0d0d0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#9a9a9a] hover:text-[#c8c8c8]"
        >
          <svg
            width="20"
            height="20"
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
        </button>
      </div>

      {/* Collapsed row */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-6">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c8c8c8] outline-none"
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
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c8c8c8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="min-w-[120px] rounded-lg bg-[#a8542a] px-6 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-lg bg-[#a8542a] px-6 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-base font-medium text-[#c8c8c8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="14"
    height="14"
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
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#8a8a8a]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default TestCard;
