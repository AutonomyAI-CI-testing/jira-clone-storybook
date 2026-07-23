export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] bg-[#1a1a1a] text-[#e5e5e5] px-6 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold tracking-tight">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#a3a3a3] hover:text-[#e5e5e5]"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed frame line */}
        <button
          type="button"
          className="flex items-center gap-2 text-[#c4c4c4] text-sm mb-8 w-full text-left"
        >
          <ChevronUpIcon className="shrink-0 opacity-70" />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="flex items-center gap-2 text-[#c4c4c4] text-base font-medium mb-5"
          >
            <ChevronUpIcon className="shrink-0" />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm text-[#b0b0b0] mb-2">
              Personal Access Token
              <InfoIcon />
            </label>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <label className="flex items-center gap-2 text-sm text-[#b0b0b0] mb-2">
              Design URL
              <InfoIcon />
            </label>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a65b32] px-6 py-2.5 text-sm font-medium text-[#e8d5c8] min-w-[110px]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a65b32] px-6 py-2.5 text-sm font-medium text-[#e8d5c8] min-w-[110px]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="text-lg font-medium text-[#d4d4d4] mt-4">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

function GearIcon() {
  return (
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
}

function ChevronUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 8 L6 4 L10 8" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="text-[#8a8a8a]"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 7v4" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default TestCard;
