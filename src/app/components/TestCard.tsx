export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[360px] rounded-lg bg-[#1a1c16] px-5 py-5 text-[#c8cbb8] font-sans"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h1 className="text-lg font-medium tracking-tight text-[#c8cbb8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="mt-0.5 text-[#9a9d8c] hover:text-[#c8cbb8]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
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
      <div className="mb-8 flex items-center gap-2 text-sm text-[#9a9d8c]">
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-10">
        <div className="mb-5 flex items-center gap-2 text-base font-medium text-[#c8cbb8]">
          <ChevronUp />
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b39f]">
            <span>Personal Access Token</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#3a3d32] bg-[#141510] px-3 py-2.5 text-sm text-[#8a8d7c] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b39f]">
            <span>Design URL</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9a9d8c] bg-[#141510] px-3 py-2.5 text-sm text-[#8a8d7c] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#c45a2c] px-5 py-2.5 text-sm font-medium text-[#d4b8a8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#c45a2c] px-5 py-2.5 text-sm font-medium text-[#d4b8a8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-base font-medium text-[#c8cbb8]">
        Recent Breakdowns
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
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#8a8d7c]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default TestCard;
