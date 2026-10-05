/**
 * TestCard — smoke-test component.
 *
 * A self-contained reproduction of the "UI magician Agent" Figma panel.
 * Approximate spacing/colour/type values only; no props, no data, no handlers.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-full max-w-[508px] bg-[#101214] p-10 font-primary text-[#e6edf3]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[20px] leading-tight">
          UI magician Agent
        </h1>
        <GearIcon className="h-6 w-6 shrink-0 text-[#e6edf3]" />
      </div>

      {/* Collapsed row */}
      <div className="mt-7 flex items-center gap-4">
        <ChevronUp className="h-4 w-4 shrink-0 text-[#e6edf3]" />
        <span className="truncate text-[15px] text-[#e6edf3]">
          From entire frame to a singl…
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-40 flex items-center gap-4">
        <ChevronUp className="h-4 w-4 shrink-0 text-[#e6edf3]" />
        <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-14">
        <div className="flex items-center gap-3">
          <span className="text-[15px]">Personal Access Token</span>
          <InfoBadge />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mt-2 h-[62px] w-full rounded border-[1.5px] border-[#596773] bg-[#22272b] px-5 text-[15px] text-[#e6edf3] outline-none placeholder:text-[#8c9bab]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <span className="text-[15px]">Design URL</span>
          <InfoBadge />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-[62px] w-full rounded border-[1.5px] border-[#596773] bg-[#22272b] px-5 text-[15px] text-[#e6edf3] outline-none placeholder:text-[#8c9bab]"
        />
      </div>

      {/* Button row */}
      <div className="mt-16 flex justify-center gap-9">
        <button
          type="button"
          className="h-[60px] w-[170px] rounded-md bg-[#a1441f] text-center font-primary text-[15px] text-[#e6edf3] hover:bg-[#b34e26]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[60px] w-[170px] rounded-md bg-[#a1441f] text-center font-primary text-[15px] text-[#e6edf3] hover:bg-[#b34e26]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 font-primary-bold text-[20px]">Recent Breakdowns</h2>
    </div>
  );
}

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.91a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoBadge = () => (
  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#8c9bab] text-[10px] leading-none text-[#8c9bab]">
    i
  </span>
);

export default TestCard;
