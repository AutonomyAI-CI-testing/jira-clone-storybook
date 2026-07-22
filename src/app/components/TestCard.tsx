export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-6 text-[#e8e8e8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-tight text-[#f0f0f0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a0a0a0] hover:text-[#e8e8e8]"
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

      {/* Collapsed summary row */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#c5c5c5]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <button
        type="button"
        className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#d0d0d0]"
      >
        <ChevronUp />
        <span>Add New Design</span>
      </button>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-[#c8c8c8]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          readOnly
          defaultValue=""
          placeholder="figd_xxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none placeholder:text-[#8a8a8a]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-[#c8c8c8]">Design URL</label>
          <InfoIcon />
        </div>
        <input
          type="text"
          readOnly
          defaultValue=""
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none placeholder:text-[#9a9a9a]"
        />
      </div>

      {/* Actions */}
      <div className="mb-12 flex justify-center gap-3">
        <button
          type="button"
          className="min-w-[110px] rounded-md bg-[#c45c26] px-6 py-2.5 text-sm font-medium text-[#e8c4b0] hover:bg-[#d4682e]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="min-w-[110px] rounded-md bg-[#c45c26] px-6 py-2.5 text-sm font-medium text-[#e8c4b0] hover:bg-[#d4682e]"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <h2 className="text-base font-medium text-[#e0e0e0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M3 7.5L6 4.5L9 7.5" />
  </svg>
);

const InfoIcon = () => (
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] leading-none text-[#8a8a8a]">
    i
  </span>
);

export default TestCard;
