// Color constants used throughout the component
const COLORS = {
  primary: "#B5B5B5",
  secondary: "#B2B2B1",
  tertiary: "#A4A4A3",
  muted: "#8B9291",
  inputBg: "#272822",
  inputText: "#737470",
  border: "#A5ADAD",
  buttonBg: "#843A17",
  buttonText: "#8C8078",
} as const;

// Reusable icon components for better maintainability
const AtomSettingsIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <circle
      cx="12"
      cy="12"
      r="2.5"
      stroke={COLORS.primary}
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke={COLORS.primary}
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke={COLORS.primary}
      strokeWidth="1.2"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke={COLORS.primary}
      strokeWidth="1.2"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const ChevronUpIcon = ({
  color,
  size = 14,
}: {
  color: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M9 7.5L6 4.5L3 7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Info"
  >
    <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" fill="none" />
    <path
      d="M8 7.5V11M8 5H8.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Form field component to reduce duplication
interface FormFieldProps {
  label: string;
  labelColor: string;
  value: string;
  borderWidth: string;
  borderColor: string;
  marginBottom: string;
}

const FormField = ({
  label,
  labelColor,
  value,
  borderWidth,
  borderColor,
  marginBottom,
}: FormFieldProps) => (
  <div className={marginBottom}>
    <div className="mb-3 flex items-center gap-2">
      <label className="text-sm font-semibold" style={{ color: labelColor }}>
        {label}
      </label>
      <InfoIcon color={labelColor} />
    </div>
    <div
      className="w-full rounded border px-5 py-4"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor,
        borderWidth,
      }}
    >
      <span
        className="text-sm font-semibold"
        style={{ color: COLORS.inputText }}
      >
        {value}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[360px] bg-[#1C1D17] p-8">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold" style={{ color: COLORS.primary }}>
          UI magician Agent
        </h1>
        <AtomSettingsIcon />
      </div>

      {/* Collapsible section indicator - shows truncated text with chevron */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon color={COLORS.muted} />
        <p
          className="truncate text-sm font-semibold leading-none"
          style={{ color: COLORS.muted }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon color={COLORS.secondary} size={16} />
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.secondary }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form fields for Personal Access Token and Design URL */}
      <FormField
        label="Personal Access Token"
        labelColor={COLORS.tertiary}
        value="figd_xxxxxxxxxxxxxxxxxx"
        borderWidth="1px"
        borderColor="#A5ADAD"
        marginBottom="mb-8"
      />

      <FormField
        label="Design URL"
        labelColor="#A3A3A2"
        value="https://www.figma.com/file/:"
        borderWidth="2px"
        borderColor="#929291"
        marginBottom="mb-10"
      />

      {/* Action buttons - both styled consistently */}
      <div className="mb-16 flex gap-4">
        <button
          className="rounded px-8 py-3 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="rounded px-8 py-3 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section placeholder */}
      <div>
        <h3 className="text-base font-semibold" style={{ color: "#B0B0B0" }}>
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-12 border-t pt-3 text-center">
        <p className="text-sm" style={{ color: "#B0B0B0" }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
