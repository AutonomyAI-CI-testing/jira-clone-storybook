export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full max-w-md flex-col bg-[#1e1e1e] p-8 text-[#d9d9d9]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsible row */}
      <div className="mt-6 flex items-center gap-2 text-sm text-[#9a9a9a]">
        <ChevronIcon />
        <span className="truncate">From entire frame to a singl…</span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-2 text-base font-medium text-[#e6e6e6]">
        <ChevronIcon />
        <span>Add New Design</span>
      </div>

      {/* Field 1 */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#c0c0c0]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2 text-[#c0c0c0] placeholder:text-[#7a7a7a]"
        />
      </div>

      {/* Field 2 */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#c0c0c0]">Design URL</label>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2 text-[#c0c0c0] placeholder:text-[#7a7a7a]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="rounded bg-[#b8501e] px-6 py-2 font-medium text-[#f5f5f5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#b8501e] px-6 py-2 font-medium text-[#f5f5f5]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-12 text-lg font-medium text-[#d9d9d9]">
        Recent Breakdowns
      </h2>
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#c0c0c0]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#9a9a9a]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
