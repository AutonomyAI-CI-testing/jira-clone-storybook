// Color constants for dark theme
const COLORS = {
  background: "#000000",
  border: "#444444",
  headerText: "#b5b5b5",
  secondaryText: "#8b9291",
  tertiaryText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelAlt: "#a3a3a2",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  headingText: "#b0b0b0",
  buttonBg: "#b8633d",
  buttonText: "#8c8078",
} as const;

// Icon size constants
const ICON_SIZES = {
  settings: { width: 20, height: 20 },
  info: { width: 14, height: 14 },
} as const;

// Reusable info icon component
const InfoIcon = (): JSX.Element => (
  <svg
    width={ICON_SIZES.info.width}
    height={ICON_SIZES.info.height}
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    style={{ color: COLORS.labelText }}
  >
    <circle cx="7" cy="7" r="6" />
    <text x="7" y="9" fontSize="10" textAnchor="middle" fill="currentColor">
      i
    </text>
  </svg>
);

// Settings gear icon component
const SettingsIcon = (): JSX.Element => (
  <svg
    width={ICON_SIZES.settings.width}
    height={ICON_SIZES.settings.height}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color: COLORS.headerText }}
  >
    <circle cx="10" cy="10" r="2" />
    <path d="M10 1.5v3M10 15.5v3M1.5 10h3M15.5 10h3M3.5 3.5l2.12 2.12M14.38 14.38l2.12 2.12M3.5 16.5l2.12-2.12M14.38 5.62l2.12-2.12" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 bg-black p-5"
      style={{
        backgroundColor: COLORS.background,
      }}
    >
      {/* Header Section with title and settings */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="font-primary text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible button sections - arrow indicates expand/collapse state */}
      <div className="mb-8">
        <button className="flex items-center gap-2 text-sm font-semibold">
          <span style={{ color: COLORS.headerText }}>▲</span>
          <span style={{ color: COLORS.secondaryText }}>
            From entire frame to a singl...
          </span>
        </button>
      </div>

      <div className="mb-8">
        <button className="flex items-center gap-2 text-sm font-semibold">
          <span style={{ color: COLORS.headerText }}>▲</span>
          <span style={{ color: COLORS.tertiaryText }}>Add New Design</span>
        </button>
      </div>

      {/* Personal Access Token input field - read-only for display */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.labelText }}
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border px-3 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.background,
            borderColor: COLORS.border,
            color: COLORS.inputText,
          }}
          readOnly
        />
      </div>

      {/* Design URL input field - read-only for display */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.labelAlt }}
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border px-3 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.background,
            borderColor: COLORS.border,
            color: COLORS.inputTextAlt,
          }}
          readOnly
        />
      </div>

      {/* Action buttons - both use same styling for visual consistency */}
      <div className="mb-8 flex gap-4">
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold transition-all hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold transition-all hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section header for recent breakdowns list */}
      <div>
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.headingText }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
