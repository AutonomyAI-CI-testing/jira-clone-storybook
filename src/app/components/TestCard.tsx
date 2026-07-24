const GearIcon = () => (
  <svg
    width="18"
    height="18"
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

const ChevronUpIcon = () => (
  <svg
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

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export function TestCard(): JSX.Element {
  return (
    <div id="testElem">
      <div
        className="w-[340px] rounded-lg px-6 py-8"
        style={{ backgroundColor: "#27272a", color: "#e4e4e7" }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium" style={{ color: "#e4e4e7" }}>
            UI magician Agent
          </h1>
          <button
            type="button"
            style={{ color: "#a1a1aa" }}
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsible hint */}
        <button
          type="button"
          className="mb-8 flex items-center gap-2 text-sm"
          style={{ color: "#a1a1aa" }}
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl…</span>
        </button>

        {/* Add New Design */}
        <div
          className="mb-5 flex items-center gap-2 text-base font-medium"
          style={{ color: "#d4d4d8" }}
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm" style={{ color: "#d4d4d8" }}>
              Personal Access Token
            </label>
            <span style={{ color: "#71717a" }} aria-hidden="true">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxx"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#3f3f46",
              border: "1px solid #52525b",
              color: "#d4d4d8",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm" style={{ color: "#d4d4d8" }}>
              Design URL
            </label>
            <span style={{ color: "#71717a" }} aria-hidden="true">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#3f3f46",
              border: "1px solid #71717a",
              color: "#d4d4d8",
            }}
          />
        </div>

        {/* Actions */}
        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md px-6 py-2.5 text-sm font-medium"
            style={{ backgroundColor: "#9a3412", color: "#e4e4e7" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md px-6 py-2.5 text-sm font-medium"
            style={{ backgroundColor: "#9a3412", color: "#e4e4e7" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="text-base font-medium" style={{ color: "#d4d4d8" }}>
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
}

export default TestCard;
