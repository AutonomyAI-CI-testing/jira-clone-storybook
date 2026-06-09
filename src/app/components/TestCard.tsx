import React from "react";

const COLORS = {
  bg: "#1e1e1e",
  text: "#b0b0b0",
  headerText: "#b5b5b5",
  subtleText: "#8b9291",
  labelActive: "#b2b2b1",
  labelInactive: "#a4a4a3",
  inputBg: "#2d2d2d",
  inputBorder: "#444",
  inputPlaceholder: "#737470",
  buttonBg: "#8c5a3a",
  buttonText: "#8c8078",
};

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[580px] w-[320px] flex-col space-y-6 p-6"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* Header section with agent title and settings accessibility */}
      <div className="mb-6 flex items-center justify-between">
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h2>
        <SettingsIcon color={COLORS.headerText} />
      </div>

      {/* Context indicator for active frame/scope */}
      <div
        className="mb-6 flex items-center space-x-2 text-xs"
        style={{ color: COLORS.subtleText }}
      >
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Form Section Header */}
      <div
        className="mb-4 mt-6 flex items-center space-x-2 text-sm font-semibold"
        style={{ color: COLORS.labelActive }}
      >
        <ChevronUpIcon />
        <h3>Add New Design</h3>
      </div>

      {/* Configuration Form */}
      <div className="space-y-5 pt-5">
        <InputGroup
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputGroup
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      {/* Primary Action Row */}
      <div className="mt-6 flex justify-between space-x-2">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* History section footer */}
      <h3 className="mt-6 text-sm font-semibold" style={{ color: COLORS.text }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

/**
 * Sub-components extracted for readability and reuse.
 * We keep internal logic simple as this is a specific configuration card.
 */

const SettingsIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.74l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1-1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.74l.15-.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.74l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V2a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-up"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-info"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const InputGroup = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="space-y-1">
    <label
      className="flex items-center space-x-1 text-xs font-semibold"
      style={{ color: COLORS.labelInactive }}
    >
      <span>{label}</span>
      <InfoIcon />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="focus:border-blue-500 w-full border p-2 text-xs transition-colors focus:outline-none"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.inputPlaceholder,
        borderRadius: "4px",
      }}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    className="flex-1 rounded py-2 text-xs font-semibold transition-opacity hover:opacity-90"
    style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
  >
    {label}
  </button>
);

export default TestCard;
