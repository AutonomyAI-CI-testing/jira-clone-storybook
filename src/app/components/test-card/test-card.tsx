import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";
import { CSSProperties } from "react";

// Design system color references
const COLORS = {
  primary: "var(--DarkNeutral900)",
  secondary: "var(--DarkNeutral700)",
  border: "var(--DarkNeutral400)",
  background: "var(--DarkNeutral100)",
  accent: "var(--Orange700)",
} as const;

const ICON_SIZES = {
  small: 16,
  medium: 20,
  large: 28,
} as const;

interface InputFieldProps {
  label: string;
  placeholder: string;
  showInfoIcon?: boolean;
  marginBottom?: string;
}

/**
 * Renders a labeled input field with optional info icon.
 * Read-only by design to match the UI magician Agent configuration card pattern.
 */
const InputField = ({
  label,
  placeholder,
  showInfoIcon = true,
  marginBottom = "mb-10",
}: InputFieldProps): JSX.Element => {
  const inputStyle: CSSProperties = {
    background: "transparent",
    borderColor: COLORS.border,
    color: COLORS.secondary,
  };

  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <span
          className="font-primary text-sm"
          style={{ color: COLORS.primary }}
        >
          {label}
        </span>
        {showInfoIcon && (
          <FiInfo size={ICON_SIZES.medium} style={{ color: COLORS.secondary }} />
        )}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        readOnly
        className={`${marginBottom} w-full rounded border-2 px-4 py-4 font-primary text-sm`}
        style={inputStyle}
      />
    </>
  );
};

/**
 * TestCard component displays a UI magician Agent configuration interface.
 * Features collapsible sections, input fields for Figma integration,
 * and primary action buttons.
 */
export const TestCard = (): JSX.Element => {
  const cardStyle: CSSProperties = {
    background: COLORS.background,
  };

  const primaryButtonStyle: CSSProperties = {
    background: COLORS.accent,
  };

  return (
    <div
      className="w-full max-w-[508px] rounded p-10"
      style={cardStyle}
    >
      {/* Header with settings icon */}
      <div className="mb-16 flex items-center justify-between py-4">
        <h2
          className="font-primary-bold text-xl"
          style={{ color: COLORS.primary }}
        >
          UI magician Agent
        </h2>
        <FiSettings size={ICON_SIZES.large} style={{ color: COLORS.primary }} />
      </div>

      {/* Collapsible preview text */}
      <div className="mb-32 flex items-center gap-2">
        <FiChevronUp size={ICON_SIZES.small} style={{ color: COLORS.secondary }} />
        <span
          className="font-primary text-sm"
          style={{ color: COLORS.secondary }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-12 flex items-center gap-2">
        <FiChevronUp size={ICON_SIZES.small} style={{ color: COLORS.primary }} />
        <h3
          className="font-primary-bold text-base"
          style={{ color: COLORS.primary }}
        >
          Add New Design
        </h3>
      </div>

      {/* Figma integration inputs */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        marginBottom="mb-10"
      />
      
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        marginBottom="mb-16"
      />

      {/* Primary action buttons */}
      <div className="mb-20 flex gap-4">
        <button
          className="flex-1 rounded px-8 py-4 font-primary-bold text-sm text-white"
          style={primaryButtonStyle}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-8 py-4 font-primary-bold text-sm text-white"
          style={primaryButtonStyle}
        >
          Prepare
        </button>
      </div>

      {/* Recent activity section */}
      <h3
        className="font-primary-bold text-base"
        style={{ color: COLORS.primary }}
      >
        Recent Breakdowns
      </h3>

      {/* Copyright footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span
          className="font-primary text-sm"
          style={{ color: COLORS.secondary }}
        >
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
