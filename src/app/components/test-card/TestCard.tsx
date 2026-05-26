import { useState } from "react";
import cx from "classix";

/**
 * Icon components for consistent inline SVG patterns.
 * These prevent duplication of SVG markup across the component.
 */

/** Settings/gear icon used in the header */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-6 w-6 text-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m4.22-15.22l-4.24 4.24m0 5.96l4.24 4.24M1 12h6m6 0h6M4.46 4.46l4.24 4.24m5.96 0l4.24-4.24M4.46 19.54l4.24-4.24m5.96 0l4.24 4.24" />
  </svg>
);

/**
 * Chevron up icon used in collapsible sections.
 * Color is controlled via props to support different text colors.
 */
interface ChevronIconProps {
  colorClass: string;
}

const ChevronUpIcon = ({ colorClass }: ChevronIconProps): JSX.Element => (
  <svg
    className={cx("h-5 w-5 flex-shrink-0", colorClass)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/** Information/help icon used in form field labels */
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-icon-subtle"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * Form field component to reduce duplication of input layout and styling.
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormField = ({
  label,
  placeholder,
  value,
  onChange,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label className="text-sm font-semibold text-font-subtle">{label}</label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cx(
        "w-full border border-border-input bg-background-input px-4 py-3 text-sm font-semibold text-font-subtlest placeholder-font-subtlest",
        "focus-visible:border-border-focused focus-visible:outline-none"
      )}
    />
  </div>
);

/**
 * Primary action button with warning/accent styling.
 * Used for both "Awesome" and "Prepare" actions.
 */
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    className={cx(
      "flex-1 rounded-md bg-background-warning-bold px-6 py-3 text-center text-sm font-semibold text-font-inverse",
      "hover:bg-background-warning-bold-hovered focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-warning active:bg-background-warning-bold-pressed"
    )}
  >
    {label}
  </button>
);

/**
 * Collapsible section item with chevron and text.
 */
interface CollapsibleSectionProps {
  text: string;
  isActive?: boolean;
}

const CollapsibleSection = ({
  text,
  isActive = false,
}: CollapsibleSectionProps): JSX.Element => (
  <div className="mb-10 flex items-center gap-3">
    <ChevronUpIcon colorClass={isActive ? "text-font" : "text-icon-subtle"} />
    <span
      className={cx(
        "text-sm font-semibold",
        isActive ? "text-font" : "text-font-subtle"
      )}
    >
      {text}
    </span>
  </div>
);

export const TestCard = (): JSX.Element => {
  const [tokenValue, setTokenValue] = useState<string>("");
  const [urlValue, setUrlValue] = useState<string>("");

  return (
    <div className="w-full max-w-md bg-elevation-surface p-6">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-font">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsible sections — currently read-only display */}
      <CollapsibleSection
        text="From entire frame to a singl..."
        isActive={false}
      />
      <CollapsibleSection text="Add New Design" isActive={true} />

      {/* Form for entering Figma credentials */}
      <div className="mb-8 space-y-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          value={tokenValue}
          onChange={setTokenValue}
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          value={urlValue}
          onChange={setUrlValue}
        />
      </div>

      {/* Action buttons for user confirmation */}
      <div className="mb-12 flex gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section header and footer */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-font">Recent Breakdowns</h2>
      </div>

      {/* Copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-sm text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};
