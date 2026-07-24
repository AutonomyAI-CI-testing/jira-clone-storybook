export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-md bg-[#1a1a1a] px-6 py-8 text-[#c8c8c8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-xl font-medium text-[#c8c8c8]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19.4 13a7.7 7.7 0 0 0 .05-2l2.05-1.6-2-3.46-2.45 1a7.9 7.9 0 0 0-1.73-1L15 3h-6l-.32 2.94a7.9 7.9 0 0 0-1.73 1l-2.45-1-2 3.46L4.55 11a7.7 7.7 0 0 0 0 2l-2.05 1.6 2 3.46 2.45-1a7.9 7.9 0 0 0 1.73 1L9 21h6l.32-2.94a7.9 7.9 0 0 0 1.73-1l2.45 1 2-3.46L19.4 13Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Collapsed recent item */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-6 flex items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#888] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a8572a] px-8 py-2.5 text-sm font-medium text-[#d4a882]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a8572a] px-8 py-2.5 text-sm font-medium text-[#d4a882]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <p className="mt-8 text-base text-[#c8c8c8]">Recent Breakdowns</p>
    </div>
  );
};

const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 14l6-6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#777] text-[10px] leading-none text-[#9a9a9a]">
    i
  </span>
);
