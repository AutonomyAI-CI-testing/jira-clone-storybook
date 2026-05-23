import { useState } from "react";
import cx from "classix";

// Color constants for consistent theming
const COLORS = {
  HEADER_TEXT: "#b5b5b5",
  SECTION_TITLE: "#b2b2b1",
  SUBSECTION_TEXT: "#8b9291",
  LABEL_TEXT: "#a4a4a3",
  DESIGN_URL_LABEL: "#a3a3a2",
  INPUT_BG: "#272822",
  INPUT_BORDER: "#929291",
  INPUT_TEXT: "#737470",
  DESIGN_URL_BORDER: "#a5adad",
  DESIGN_URL_TEXT: "#71726e",
  BUTTON_BG: "#843a17",
  BUTTON_TEXT: "#8c8078",
  RECENT_BREAKDOWNS: "#b0b0b0",
  FOOTER_TEXT: "#8b9291",
};

// Collapsible arrow icon component
const CollapsibleIcon = ({
  isOpen,
  color,
}: {
  isOpen: boolean;
  color: string;
}) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{
      color,
      transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
      transition: "transform 0.2s",
    }}
  >
    <polyline points="1 1 6 6 11 1" />
  </svg>
);

// Info icon component used in form labels
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    style={{ color }}
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="5" x2="7.5" y2="7.5" />
    <circle cx="7.5" cy="11" r="0.5" fill="currentColor" />
  </svg>
);

// Settings icon component in header
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color: COLORS.HEADER_TEXT }}
  >
    <circle cx="8" cy="8" r="2" />
    <circle cx="8" cy="2" r="1" />
    <circle cx="8" cy="14" r="1" />
    <circle cx="2" cy="8" r="1" />
    <circle cx="14" cy="8" r="1" />
    <circle cx="3.5" cy="3.5" r="0.5" />
    <circle cx="12.5" cy="12.5" r="0.5" />
    <circle cx="3.5" cy="12.5" r="0.5" />
    <circle cx="12.5" cy="3.5" r="0.5" />
  </svg>
);

// Form input field with label and info icon
const FormField = ({
  label,
  placeholder,
  type = "text",
  labelColor,
  iconColor,
  bgColor,
  borderColor,
  textColor,
  isPassword = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  labelColor: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  isPassword?: boolean;
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label
        className="text-[11.5px] font-semibold"
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <InfoIcon color={iconColor} />
    </div>
    <input
      type={isPassword ? "password" : type}
      placeholder={placeholder}
      className={cx(
        "placeholder-gray-600 w-full px-3 py-3 font-semibold",
        isPassword ? "border-2" : "border",
        "border-gray-600 bg-gray-900 text-[11.5px]"
      )}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color: textColor,
      }}
      readOnly
    />
  </div>
);

export const TestCard = () => {
  // Track which collapsible sections are expanded
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="text-font-default w-full max-w-md bg-black p-5">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.HEADER_TEXT }}
        >
          UI magician Agent
        </h1>
        <button
          className="hover:bg-gray-800 flex items-center justify-center rounded-full p-1"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsHeaderOpen(!isHeaderOpen)}
          className="flex items-center gap-2"
        >
          <CollapsibleIcon isOpen={isHeaderOpen} color={COLORS.HEADER_TEXT} />
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.SUBSECTION_TEXT }}
          >
            From entire frame to a singl...
          </span>
        </button>

        {isHeaderOpen && (
          <div className="mt-4 space-y-4 pl-6">
            {/* Content for first section would go here */}
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          className="mb-6 flex items-center gap-2"
        >
          <CollapsibleIcon
            isOpen={isAddNewDesignOpen}
            color={COLORS.SECTION_TITLE}
          />
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: COLORS.SECTION_TITLE }}
          >
            Add New Design
          </span>
        </button>

        {isAddNewDesignOpen && (
          <div className="space-y-5 pl-6">
            {/* Personal Access Token Field */}
            <FormField
              label="Personal Access Token"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              type="password"
              labelColor={COLORS.LABEL_TEXT}
              iconColor={COLORS.LABEL_TEXT}
              bgColor={COLORS.INPUT_BG}
              borderColor={COLORS.INPUT_BORDER}
              textColor={COLORS.INPUT_TEXT}
              isPassword
            />

            {/* Design URL Field */}
            <FormField
              label="Design URL"
              placeholder="https://www.figma.com/file/:"
              labelColor={COLORS.DESIGN_URL_LABEL}
              iconColor={COLORS.DESIGN_URL_LABEL}
              bgColor={COLORS.INPUT_BG}
              borderColor={COLORS.DESIGN_URL_BORDER}
              textColor={COLORS.DESIGN_URL_TEXT}
            />

            {/* Action Buttons */}
            <div className="mt-7 flex gap-4">
              <button
                className="text-gray-400 flex-1 rounded-md border-none px-4 py-3 text-center text-[11.5px] font-semibold transition-colors hover:opacity-80"
                style={{
                  backgroundColor: COLORS.BUTTON_BG,
                  color: COLORS.BUTTON_TEXT,
                }}
              >
                Awesome
              </button>
              <button
                className="text-gray-400 flex-1 rounded-md border-none px-4 py-3 text-center text-[11.5px] font-semibold transition-colors hover:opacity-80"
                style={{
                  backgroundColor: COLORS.BUTTON_BG,
                  color: COLORS.BUTTON_TEXT,
                }}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-gray-800 border-t pt-6">
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.RECENT_BREAKDOWNS }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p
          className="text-[11.5px] font-semibold"
          style={{ color: COLORS.FOOTER_TEXT }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
