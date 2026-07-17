export function TestCard(): JSX.Element {
  const GearIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cccccc"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#888888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );

  const ChevronUp = ({ size = 18 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cccccc"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a1a", color: "#cccccc", minWidth: 320, maxWidth: 380 }}
      className="flex flex-col p-5 rounded-xl"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-6">
        <ChevronUp size={14} />
        <span className="text-sm" style={{ color: "#a07060" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <ChevronUp size={18} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium" style={{ color: "#cccccc" }}>
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-md border px-3 py-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#888888",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium" style={{ color: "#cccccc" }}>
            Design URL
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-md border px-3 py-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#888888",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          className="flex-1 rounded-lg px-5 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5541b" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-5 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5541b" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
