const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

/**
 * TestCard is a standalone visual component replicating a specific Figma design.
 * It uses hardcoded values and is primarily used for demonstration and testing.
 *
 * Note: Uses arbitrary Tailwind colors and fixed dimensions as specified in requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto flex min-h-screen w-full max-w-sm flex-col gap-4 px-5 py-6"
      style={{ backgroundColor: "#262621", color: "#b5b5b5" }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold" style={{ color: "#c8c8c4" }}>
          UI magician Agent
        </span>
        <span style={{ color: "#9a9a94" }}>
          <GearIcon />
        </span>
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2" style={{ color: "#8b7355" }}>
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="my-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2" style={{ color: "#c8c8c4" }}>
        <span style={{ color: "#8b8b85" }}>
          <ChevronUpIcon />
        </span>
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {/* Label with info icon - matches Figma layout */}
          <label className="text-sm" style={{ color: "#a0a09e" }}>
            Personal Access Token
          </label>
          <span style={{ color: "#7a7a74" }}>
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#1e1e1a",
            border: "1px solid #6b6b6b",
            color: "#6b6b68",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {/* Label with info icon - matches Figma layout */}
          <label className="text-sm" style={{ color: "#a0a09e" }}>
            Design URL
          </label>
          <span style={{ color: "#7a7a74" }}>
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#1e1e1a",
            border: "2px solid #7a7a72",
            color: "#6b6b68",
          }}
        />
      </div>

      {/* Action Buttons - Orange/Brown color scheme from design */}
      <div className="mt-1 flex gap-3">
        <button
          className="flex-1 rounded-lg py-3 font-semibold"
          style={{ backgroundColor: "#843a17", color: "#c8a882" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-semibold"
          style={{ backgroundColor: "#7a3615", color: "#b89870" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-lg font-semibold" style={{ color: "#c0c0ba" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
