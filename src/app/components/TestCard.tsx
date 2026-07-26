/**
 * TestCard — self-contained smoke-test panel approximating the
 * Figma "UI magician Agent" design. No props; static content only.
 */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-[420px] bg-[#1a1a1a] px-8 py-8 text-[#c8c8c8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <h1 className="text-[22px] font-medium leading-tight text-[#cfcfcf]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="mt-0.5 text-[#9a9a9a]"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#9a9a9a]"
        >
          <ChevronUpIcon className="shrink-0 opacity-80" />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-6">
          <button
            type="button"
            className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#cfcfcf]"
          >
            <ChevronUpIcon className="shrink-0" />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-5">
            <label className="mb-2 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
              <span>Personal Access Token</span>
              <InfoIcon />
            </label>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded-sm border border-[#3a3a3a] bg-[#242424] px-3 py-2.5 text-[14px] text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <label className="mb-2 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
              <span>Design URL</span>
              <InfoIcon />
            </label>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded-sm border-2 border-[#9a9a9a] bg-[#242424] px-3 py-2.5 text-[14px] text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b3542c] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b3542c] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16">
          <h2 className="text-[18px] font-medium text-[#cfcfcf]">
            Recent Breakdowns
          </h2>
        </div>
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
      strokeWidth="1.6"
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
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#8a8a8a]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
