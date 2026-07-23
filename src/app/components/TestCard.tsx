export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-[420px] bg-[#1a1a1a] px-6 pb-10 pt-8 text-[#e8e8e8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-xl font-medium tracking-tight text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="mt-0.5 text-[#b0b0b0]"
        >
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
        </button>
      </div>

      {/* Collapsed session title */}
      <button
        type="button"
        className="mb-10 flex items-center gap-2 text-left text-[15px] text-[#c8c8c8]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl…</span>
      </button>

      {/* Add New Design */}
      <div className="mb-12">
        <button
          type="button"
          className="mb-6 flex items-center gap-2 text-left text-lg font-medium text-[#d0d0d0]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[15px] text-[#cfcfcf]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#9a9a9a]">
            figd_xxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[15px] text-[#cfcfcf]">Design URL</label>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#9a9a9a]">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#b45309] px-6 py-2.5 text-[15px] text-[#c4a484]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#b45309] px-6 py-2.5 text-[15px] text-[#c4a484]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-medium text-[#d0d0d0]">Recent Breakdowns</h2>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a8a8a8]"
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
  <span
    className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] leading-none text-[#8a8a8a]"
    aria-hidden="true"
  >
    i
  </span>
);

export default TestCard;
