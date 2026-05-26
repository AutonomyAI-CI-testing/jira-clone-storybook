// Color palette for the dark theme UI
const COLORS = {
  background: "#2b2d28",
  header: "#b5b5b5",
  headerIcon: "#7a7a7a",
  sectionButton: "#9ca3af",
  sectionButtonAlt: "#a3a3a2",
  infoButtonIcon: "#707070",
  inputBorder: "#404240",
  inputBackground: "#1a1c19",
  inputText: "#8b9291",
  actionButton: "#843a17",
  actionButtonText: "#8c8078",
  footerBorder: "#d1d5db",
  footerText: "#a3a3a2",
} as const;

// Icon components
const SettingsIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Gear/Settings icon */}
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 12v4" />
    <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24" />
    <path d="M1 12h6m6 0h6" />
    <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 11v-3m0-1.5h.01" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 11 8 5 14 11" />
  </svg>
);

// Form input field component with consistent styling
interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField = ({ label, placeholder }: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label
        className="text-xs font-semibold"
        style={{ color: COLORS.sectionButtonAlt }}
      >
        {label}
      </label>
      <button
        className="flex items-center justify-center"
        style={{ color: COLORS.infoButtonIcon }}
      >
        <InfoIcon />
      </button>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-3 py-2 text-xs font-semibold focus:outline-none"
      style={{
        border: `1px solid ${COLORS.inputBorder}`,
        backgroundColor: COLORS.inputBackground,
        color: COLORS.inputText,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-64 flex-col p-5 text-sm"
      style={{ backgroundColor: COLORS.background, minHeight: "650px" }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center"
          style={{ color: COLORS.headerIcon }}
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible section buttons */}
      <div className="mb-5">
        <button
          className="flex items-center gap-2 text-xs font-semibold"
          style={{ color: COLORS.sectionButton }}
        >
          <ChevronUpIcon />
          From entire frame to a singl...
        </button>
      </div>

      <div className="mb-6">
        <button
          className="flex items-center gap-2 text-xs font-semibold"
          style={{ color: COLORS.sectionButtonAlt }}
        >
          <ChevronUpIcon />
          Add New Design
        </button>
      </div>

      {/* Form fields for credentials */}
      <div className="mb-5 space-y-4">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-6 flex gap-3">
        <button
          className="flex-1 rounded px-4 py-2.5 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.actionButton,
            color: COLORS.actionButtonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2.5 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.actionButton,
            color: COLORS.actionButtonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent breakdowns section */}
      <div>
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.sectionButtonAlt }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div
        className="mt-auto border-t pt-3 text-center"
        style={{ borderColor: COLORS.footerBorder }}
      >
        <p className="text-xs" style={{ color: COLORS.footerText }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
