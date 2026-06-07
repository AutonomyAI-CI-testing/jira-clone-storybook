// Color palette for dark theme UI
const COLORS = {
  // Primary backgrounds and surfaces
  cardBg: "#2a2a2a",
  inputBg: "#1a1a1a",
  inputBorder: "#3a3a3a",
  // Icon and text colors
  headerText: "#b5b5b5",
  gearIcon: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeader: "#b2b2b1",
  labelText: "#a4a4a3",
  infoIcon: "#a4a4a3",
  inputText: "#737470",
  inputPlaceholder: "#737470",
  designUrlText: "#71726e",
  designUrlPlaceholder: "#71726e",
  buttonBg: "#b5451b",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
};

/**
 * Icon components for the TestCard UI.
 * These are extracted from the main component to improve readability and maintainability.
 */

const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.gearIcon}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.infoIcon}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

/**
 * Renders an action button with consistent styling.
 * Used in pairs for form submission actions.
 */
const ActionButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <button
    className="rounded-lg px-6 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
    style={{
      backgroundColor: COLORS.buttonBg,
      color: COLORS.buttonText,
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

/**
 * Renders a labeled form input field with an info icon.
 * Used for token and URL inputs in the design connection form.
 */
const FormField = ({
  label,
  placeholder,
  textColor,
  placeholderColor,
}: {
  label: string;
  placeholder: string;
  textColor: string;
  placeholderColor: string;
}) => (
  <div>
    <div className="mb-1 flex items-center gap-1">
      <span className="text-xs font-semibold" style={{ color: textColor }}>
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border px-3 py-2 text-xs outline-none"
      style={{
        borderColor: COLORS.inputBorder,
        backgroundColor: COLORS.inputBg,
        color: textColor,
      }}
      aria-label={label}
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[400px] rounded p-4"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Header: Title with settings icon */}
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle: Description of the agent's capability */}
      <div className="mt-1 flex items-center gap-1">
        <ChevronUpIcon stroke={COLORS.subtitleText} />
        <span
          className="text-xs font-semibold"
          style={{ color: COLORS.subtitleText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual separator between header and form section */}
      <div className="h-8" />

      {/* Section header for form inputs */}
      <div className="mb-4 flex items-center gap-2">
        <ChevronUpIcon stroke={COLORS.sectionHeader} />
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.sectionHeader }}
        >
          Add New Design
        </span>
      </div>

      {/* Form: Figma personal access token input */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        textColor={COLORS.inputText}
        placeholderColor={COLORS.inputPlaceholder}
      />

      {/* Form: Figma design file URL input */}
      <div className="mt-3">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          textColor={COLORS.designUrlText}
          placeholderColor={COLORS.designUrlPlaceholder}
        />
      </div>

      {/* Action buttons for submitting form */}
      <div className="mt-4 flex justify-center gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer: Section label for recent items */}
      <div className="mt-6">
        <p
          className="text-sm font-semibold"
          style={{ color: COLORS.footerText }}
        >
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
