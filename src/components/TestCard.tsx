const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b9291"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ color = "#8b9291" }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
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
    stroke="#8b9291"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col px-5 py-5 font-sans"
      style={{ backgroundColor: "#2a2a2a", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon color="#8b9291" />
        <span className="text-xs font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Add New Design row */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-1.5">
        <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        className="mb-4 w-full rounded border px-3 py-2 text-xs font-semibold outline-none"
        style={{
          backgroundColor: "#3a3a37",
          borderColor: "#4a4a47",
          color: "#737470",
        }}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-1.5">
        <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        className="mb-6 w-full rounded border px-3 py-2 text-xs font-semibold outline-none"
        style={{
          backgroundColor: "#3a3a37",
          borderColor: "#4a4a47",
          color: "#737470",
        }}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Button row */}
      <div className="mb-8 flex gap-4">
        <button
          className="flex-1 rounded-lg py-3 text-xs font-semibold"
          style={{ backgroundColor: "#b85c2a", color: "#e8d0c0" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-xs font-semibold"
          style={{ backgroundColor: "#b85c2a", color: "#e8d0c0" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
