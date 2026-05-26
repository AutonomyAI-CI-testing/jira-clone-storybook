// Color palette for the dark-themed card
const COLORS = {
  background: "#000000",
  text: {
    primary: "#d1d5db", // Light gray for main headings
    secondary: "#9ca3af", // Medium gray for labels
    tertiary: "#6b7280", // Darker gray for secondary text
    muted: "#4b5563", // Very dark gray for disabled/muted states
  },
  input: {
    background: "#111827",
    border: "#4b5563",
    text: "#4b5563",
  },
  button: {
    background: "#c2410c", // Orange
    text: "#7c2d12", // Dark orange-brown
  },
  border: "#d1d5db",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-full max-w-[508px] p-8 text-sm"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header section with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="text-base font-semibold"
          style={{ color: COLORS.text.primary }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section showing truncated design frame name */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <p className="font-semibold" style={{ color: COLORS.text.tertiary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Main form section for adding new designs */}
      <div>
        {/* Section header */}
        <div className="mb-6 flex items-center gap-2">
          <ChevronUpIcon />
          <h2
            className="text-base font-semibold"
            style={{ color: COLORS.text.secondary }}
          >
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token input field */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <label
              className="font-semibold"
              style={{ color: COLORS.text.secondary }}
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-4 py-3 font-semibold"
            style={{
              border: `1px solid ${COLORS.input.border}`,
              backgroundColor: COLORS.input.background,
              color: COLORS.input.text,
            }}
          />
        </div>

        {/* Design URL input field */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <label
              className="font-semibold"
              style={{ color: COLORS.text.secondary }}
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full px-4 py-3 font-semibold"
            style={{
              border: `1px solid ${COLORS.input.border}`,
              backgroundColor: COLORS.input.background,
              color: COLORS.input.text,
            }}
          />
        </div>

        {/* Action buttons for form submission */}
        <div className="mb-12 flex gap-4">
          <button
            className="flex-1 rounded px-6 py-3 font-semibold transition-colors"
            style={{
              backgroundColor: COLORS.button.background,
              color: COLORS.button.text,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-6 py-3 font-semibold transition-colors"
            style={{
              backgroundColor: COLORS.button.background,
              color: COLORS.button.text,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent design breakdowns section */}
      <div>
        <h3
          className="text-base font-semibold"
          style={{ color: COLORS.text.primary }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Card footer with copyright */}
      <div
        className="pt-3 text-center"
        style={{ borderTop: `1px solid ${COLORS.border}` }}
      >
        <p>© AutonomyAI</p>
      </div>
    </div>
  );
};

// Settings/gear icon component
const SettingsIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ color: COLORS.text.secondary }}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24" />
    <path d="M1 12h6m6 0h6" />
    <path d="M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24" />
    <path d="M12 17v6m0-6v-6" />
    <path d="M19.78 19.78l-4.24-4.24m-3.08-3.08l-4.24-4.24" />
    <path d="M23 12h-6m-6 0H5" />
    <path d="M19.78 4.22l-4.24 4.24m-3.08 3.08l-4.24 4.24" />
  </svg>
);

// Chevron up icon component for collapsible sections
const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ color: COLORS.text.tertiary }}
  >
    <polyline points="12 10 8 6 4 10" />
  </svg>
);

// Info icon component for field help text
const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ color: COLORS.text.tertiary }}
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" />
    <text
      x="10"
      y="14"
      textAnchor="middle"
      fontSize="12"
      fontWeight="bold"
      fill="currentColor"
      className="text-gray-500"
    >
      i
    </text>
  </svg>
);
