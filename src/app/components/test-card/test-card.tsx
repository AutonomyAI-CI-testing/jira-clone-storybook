// Color palette for the TestCard UI - extracted from design system
const COLORS = {
  // Header and primary text
  headerText: "#b5b5b5",
  // Collapsed section text
  collapsedText: "#8b9291",
  // Expanded section title
  expandedTitle: "#b2b2b1",
  // Form labels
  labelPrimary: "#a4a4a3",
  labelSecondary: "#a3a3a2",
  // Form input styling
  inputBackground: "#272822",
  inputBorderPrimary: "#a5adad",
  inputBorderSecondary: "#929291",
  inputTextPrimary: "#737470",
  inputTextSecondary: "#71726e",
  // Buttons
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  // Bottom section heading
  bottomHeading: "#b0b0b0",
};

// Reusable info icon component - used in form labels throughout the card
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="9"
      textAnchor="middle"
      fontSize="8"
      fill={color}
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

// Settings menu icon - shown in the card header
const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="8" r="1.5" fill={COLORS.headerText} />
    <circle cx="7" cy="3" r="1.5" fill={COLORS.headerText} />
    <circle cx="7" cy="13" r="1.5" fill={COLORS.headerText} />
    <path
      d="M7 2V14M3 8H11"
      stroke={COLORS.headerText}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-black p-5">
      {/* Header with settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="font-primary-bold text-sm"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section - indicates a collapsed item above the active section */}
      <div className="mb-20 flex items-center gap-2">
        <span style={{ color: COLORS.collapsedText }} className="text-xs">
          ▲
        </span>
        <span
          className="font-primary-bold text-xs"
          style={{ color: COLORS.collapsedText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - the expanded/active section title */}
      <div className="mb-10 flex items-center gap-2">
        <span style={{ color: COLORS.expandedTitle }} className="text-sm">
          ▼
        </span>
        <h2
          className="font-primary-bold text-sm"
          style={{ color: COLORS.expandedTitle }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field - read-only input for Figma token */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <label
            className="font-primary-bold text-xs"
            style={{ color: COLORS.labelPrimary }}
          >
            Personal Access Token
          </label>
          <InfoIcon color={COLORS.labelPrimary} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border px-3 py-2 font-primary-bold text-xs"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorderPrimary,
            color: COLORS.inputTextPrimary,
          }}
          readOnly
        />
      </div>

      {/* Design URL field - read-only input for Figma file URL */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <label
            className="font-primary-bold text-xs"
            style={{ color: COLORS.labelSecondary }}
          >
            Design URL
          </label>
          <InfoIcon color={COLORS.labelSecondary} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border px-3 py-2 font-primary-bold text-xs"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorderSecondary,
            color: COLORS.inputTextSecondary,
          }}
          readOnly
        />
      </div>

      {/* Action buttons - typically Figma design sync controls */}
      <div className="mb-12 flex gap-3">
        <button
          className="flex-1 rounded py-2 font-primary-bold text-xs"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2 font-primary-bold text-xs"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section - placeholder for list of recent design operations */}
      <div>
        <h3
          className="font-primary-bold text-sm"
          style={{ color: COLORS.bottomHeading }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
