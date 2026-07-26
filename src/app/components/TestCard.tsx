export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-md bg-[#1a1a1a] px-6 py-6 text-[#e8e8e8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-tight text-[#f0f0f0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#c8c8c8] hover:text-white"
        >
          <svg
            width="20"
            height="20"
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

      {/* Mode line */}
      <button
        type="button"
        className="mb-10 flex items-center gap-2 text-sm text-[#b0b0b0]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <button
        type="button"
        className="mb-5 flex items-center gap-2 text-base font-medium text-[#d8d8d8]"
      >
        <ChevronUp />
        <span>Add New Design</span>
      </button>

      {/* Personal Access Token */}
      <div className="mb-4">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#cfcfcf]">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#cfcfcf]">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8] outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mb-12 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-md bg-[#a8572a] px-8 py-2.5 text-sm font-medium text-[#e8c4a8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a8572a] px-8 py-2.5 text-sm font-medium text-[#e8c4a8]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base font-medium text-[#e0e0e0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
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
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#9a9a9a]"
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

export default TestCard;
