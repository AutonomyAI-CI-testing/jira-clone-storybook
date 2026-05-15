import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Theme colors for the dark UI
const COLORS = {
  background: "#1e1a17",
  textPrimary: "#e0d8d0",
  textSecondary: "#8a8580",
  border: "#5a5550",
  button: "#94551a",
  inputBg: "rgba(255, 255, 255, 0.05)",
  white: "#ffffff",
} as const;

const ICON_SIZES = {
  small: 16,
  medium: 20,
  large: 24,
} as const;

interface FormFieldProps {
  label: string;
  placeholder: string;
}

/**
 * Renders a read-only form field with label and info icon.
 * Fields are read-only to indicate this is a display/configuration view.
 */
const FormField = ({ label, placeholder }: FormFieldProps) => (
  <div className="mt-6 flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label
        className="font-primary text-sm"
        style={{ color: COLORS.textPrimary }}
      >
        {label}
      </label>
      <FiInfo size={ICON_SIZES.small} style={{ color: COLORS.textSecondary }} />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="rounded-none border px-3 py-3 font-primary text-sm"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.border,
        color: COLORS.textSecondary,
      }}
    />
  </div>
);

interface ActionButtonProps {
  children: React.ReactNode;
}

/**
 * Styled action button with consistent theme colors.
 */
const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    className="flex-1 rounded-none px-6 py-3 font-primary-bold text-sm"
    style={{
      backgroundColor: COLORS.button,
      color: COLORS.white,
    }}
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      className="flex w-[480px] flex-col gap-8 rounded-lg p-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h2
          className="font-primary-bold text-2xl"
          style={{ color: COLORS.textPrimary }}
        >
          UI magician Agent
        </h2>
        <FiSettings
          size={ICON_SIZES.large}
          style={{ color: COLORS.textPrimary }}
        />
      </div>

      {/* Collapsed accordion item - visual indicator of previous designs */}
      <div className="flex flex-col gap-3">
        <FiChevronUp
          size={ICON_SIZES.medium}
          style={{ color: COLORS.textSecondary }}
        />
        <span
          className="font-primary text-base"
          style={{ color: COLORS.textSecondary }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer between collapsed and expanded sections */}
      <div className="h-4" />

      {/* Expanded accordion item - active section for adding new design */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp
          size={ICON_SIZES.medium}
          style={{ color: COLORS.textPrimary }}
        />
        <span
          className="font-primary-bold text-base"
          style={{ color: COLORS.textPrimary }}
        >
          Add New Design
        </span>
      </div>

      {/* Figma integration configuration fields */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary actions for the design workflow */}
      <div className="mt-6 flex gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section header for historical data */}
      <h3
        className="mt-8 font-primary-bold text-base"
        style={{ color: COLORS.textPrimary }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer with branding */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-sm" style={{ color: COLORS.textSecondary }}>
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
