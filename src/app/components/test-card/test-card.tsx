// Color palette for the UI theme
const COLORS = {
  background: "#000000",
  primary: "#b5b5b5",
  secondary: "#8b9291",
  tertiary: "#b2b2b1",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  icon: "#737470",
  inputBorder: "#444444",
  inputBg: "#1a1a1a",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  buttonBg: "#974f0c",
  buttonBgHover: "#8c4409",
  buttonText: "#c8a882",
  heading: "#b0b0b0",
  footerBorder: "#d1d5db",
} as const;

/**
 * Settings icon - used in header
 * Shows gear with radiating lines to indicate configuration options
 */
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m4.22-15.22l-4.24 4.24m-5.96 5.96l-4.24 4.24m10.46 0l-4.24-4.24m5.96-5.96l-4.24-4.24" />
  </svg>
);

/**
 * Collapse icon - used for expandable sections
 * Points upward to indicate collapsed/expanded state
 */
const CollapseIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`h-4 w-4 text-[${color}]`}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/**
 * Expand icon - used for expandable sections
 * Points downward to indicate expanded/collapsed state
 */
const ExpandIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`h-4 w-4 text-[${color}]`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/**
 * Reusable form field component for token/URL inputs
 * Encapsulates label, info button, and input styling
 */
const FormField = ({
  label,
  placeholder,
  inputTextColor,
}: {
  label: string;
  placeholder: string;
  inputTextColor: string;
}) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold" style={{ color: COLORS.label }}>
        {label}
      </label>
      <button
        className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border hover:opacity-80"
        style={{
          borderColor: COLORS.icon,
          color: COLORS.icon,
        }}
        aria-label="Information"
      >
        <span className="text-2xs font-bold">i</span>
      </button>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border px-3 py-2 text-xs focus:border-[#666666] focus:outline-none"
      style={{
        borderColor: COLORS.inputBorder,
        backgroundColor: COLORS.inputBg,
        color: inputTextColor,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 p-5" style={{ backgroundColor: COLORS.background }}>
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.primary }}>
          UI magician Agent
        </h1>
        <button
          className="inline-flex h-5 w-5 items-center justify-center rounded hover:opacity-80"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible content section with description text */}
      <div className="mb-8 flex items-start gap-2">
        <button
          className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center hover:opacity-80"
          aria-label="Toggle section"
        >
          <CollapseIcon color={COLORS.secondary} />
        </button>
        <p className="text-xs" style={{ color: COLORS.secondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mb-8 flex items-center gap-2">
        <button
          className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center hover:opacity-80"
          aria-label="Toggle section"
        >
          <ExpandIcon color={COLORS.tertiary} />
        </button>
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.tertiary }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form fields for user input */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputTextColor={COLORS.inputText}
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputTextColor={COLORS.inputTextAlt}
      />

      {/* Action buttons for submitting form */}
      <div className="mb-8 flex gap-3">
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent activity section header */}
      <h3 className="text-sm font-semibold" style={{ color: COLORS.heading }}>
        Recent Breakdowns
      </h3>

      {/* Footer with copyright info */}
      <div
        className="mt-6 border-t pt-3 text-center"
        style={{ borderColor: COLORS.footerBorder }}
      >
        <p className="text-xs" style={{ color: COLORS.heading }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
