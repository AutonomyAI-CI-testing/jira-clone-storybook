// Color palette for the TestCard component
const COLORS = {
  // Background and surface
  background: "#000000",
  surfaceDark: "#272822",
  // Text colors
  textPrimary: "#b5b5b5",
  textSecondary: "#b2b2b1",
  textTertiary: "#a4a4a3",
  textMuted: "#8b9291",
  textPlaceholder: "#737470",
  textInputPlaceholder: "#71726e",
  // Icon colors
  iconPrimary: "#d4d4d4",
  // Border colors
  borderPrimary: "#a5adad",
  borderSecondary: "#929291",
  borderDivider: "#a3a3a2",
  // Button colors
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  // Section headers
  headerText: "#b0b0b0",
};

/**
 * Icon component for settings/gear icon
 * Used in the header for configuration
 */
const GearIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ color: COLORS.iconPrimary }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

/**
 * Chevron/arrow icon component
 * Used for collapsible section indicators
 */
const ChevronIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ color: COLORS.iconPrimary }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

/**
 * Info icon component (circle with 'i')
 * Used to provide additional information about form fields
 */
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ color: COLORS.iconPrimary }}
  >
    <circle cx="12" cy="12" r="10" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

/**
 * Form field component with label and info icon
 * Encapsulates the common pattern of field label with optional help information
 */
interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  borderColor: string;
  placeholderColor: string;
}

const FormField = ({
  label,
  type,
  placeholder,
  borderColor,
  placeholderColor,
}: FormFieldProps): JSX.Element => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <label
        className="text-xs font-bold"
        style={{ color: COLORS.textTertiary }}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border px-3 py-2 text-xs font-bold focus:outline-none"
      style={{
        backgroundColor: COLORS.surfaceDark,
        borderColor: borderColor,
        color: placeholderColor,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-full max-w-sm p-5"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsible section - initially closed */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <ChevronIcon />
          <span
            className="text-xs font-bold"
            style={{ color: COLORS.textMuted }}
          >
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design section - main form */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon />
          <h2
            className="text-sm font-bold"
            style={{ color: COLORS.textSecondary }}
          >
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token input field */}
        <FormField
          label="Personal Access Token"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor={COLORS.borderPrimary}
          placeholderColor={COLORS.textPlaceholder}
        />

        {/* Design URL input field */}
        <FormField
          label="Design URL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          borderColor={COLORS.borderSecondary}
          placeholderColor={COLORS.textInputPlaceholder}
        />

        {/* Action buttons for form submission */}
        <div className="flex gap-4">
          <button
            className="flex-1 rounded-md px-4 py-3 text-xs font-bold transition-colors"
            style={{
              backgroundColor: COLORS.buttonBackground,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-md px-4 py-3 text-xs font-bold transition-colors"
            style={{
              backgroundColor: COLORS.buttonBackground,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section - displays past activity */}
      <div className="mt-12">
        <h3 className="text-sm font-bold" style={{ color: COLORS.headerText }}>
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright information */}
      <div
        className="border-t pt-3 text-center"
        style={{ borderColor: "#c5c5c5" }}
      >
        <p className="text-xs" style={{ color: COLORS.textPlaceholder }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
