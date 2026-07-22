export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm bg-[#1c1e18] px-6 py-5 text-[#c5c5bd] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-[#c8c8c0]">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="p-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#a8a89e]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#b0b0a8]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Expanded section */}
      <div className="mb-4">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-sm font-medium text-[#c8c8c0]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#b8b8b0]">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6a7272] bg-[#272822] px-3 py-2.5 text-sm text-[#c5c5bd] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#b8b8b0]">
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-[#8a9292] bg-[#272822] px-3 py-2.5 text-sm text-[#c5c5bd] outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b85c2e] px-6 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b85c2e] px-6 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <h2 className="text-sm font-medium text-[#c8c8c0]">Recent Breakdowns</h2>
    </div>
  );
};

const ChevronUp = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    className="shrink-0 text-[#a8a89e]"
    aria-hidden
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

const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[#8a8a82]"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 11v5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="0.75" fill="currentColor" />
  </svg>
);

export default TestCard;
