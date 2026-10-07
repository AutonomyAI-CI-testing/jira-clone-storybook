/**
 * TestCard — a self-contained smoke-test recreation of the "UI magician Agent"
 * panel from a Figma frame. Standalone by design: no props, no state, no imports
 * from the app's design system. Values are approximate on purpose.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col rounded-md bg-[#1c1c1c] p-6 text-[#eaeaea]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-medium text-[#f5f5f5]">
          UI magician Agent
        </span>
        <IconGear />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-5 flex items-center gap-2 rounded bg-[#2a2a2a] px-3 py-3 text-[#9a9a9a]">
        <IconChevronUp />
        <span className="text-[14px]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-10 flex items-center gap-2 text-[#f5f5f5]">
        <IconChevronUp />
        <span className="text-[20px] font-medium">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <LabelWithInfo label="Personal Access Token" />
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-11 w-full rounded-sm border border-[#3a3a3a] bg-[#1e1e1e] px-3 text-[14px] text-[#eaeaea] placeholder-[#6f6f6f] outline-none"
      />

      {/* Design URL */}
      <LabelWithInfo label="Design URL" className="mt-6" />
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-11 w-full rounded-sm border border-[#3a3a3a] bg-[#1e1e1e] px-3 text-[14px] text-[#eaeaea] placeholder-[#6f6f6f] outline-none"
      />

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="h-11 flex-1 rounded-sm bg-[#bf4a15] text-[16px] text-[#f5f5f5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-11 flex-1 rounded-sm bg-[#bf4a15] text-[16px] text-[#f5f5f5]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-12 text-[20px] font-medium text-[#9a9a9a]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;

function LabelWithInfo({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-[16px] font-medium text-[#f5f5f5]">{label}</span>
      <IconInfo />
    </div>
  );
}

function IconGear() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#eaeaea]"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.43.65.79.79H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#eaeaea]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function IconChevronUp() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <polyline points="6 15 12 9 18 15" />
    </svg>
  );
}
