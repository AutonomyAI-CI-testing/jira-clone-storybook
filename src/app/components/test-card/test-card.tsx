import { useState } from "react";
import cx from "classix";

// Color palette for the UI magician agent card
const COLORS = {
  headerText: "#b5b5b5",
  section1Text: "#8b9291",
  section2Text: "#b2b2b1",
  labelText: "#a4a4a3",
  labelText2: "#a3a3a2",
  recentBreakdownsText: "#b0b0b0",
  inputBorderColor: "#4a4a4a",
  inputBgColor: "#1a1a1a",
  inputTextColor: "#737470",
  inputTextColor2: "#71726e",
  expandedBgColor: "rgba(181, 181, 181, 0.05)",
  buttonBgColor: "#c66a3d",
  buttonTextColor: "#8c8078",
  buttonHoverBgColor: "#d97a4d",
} as const;

// SVG icon component for expandable sections
interface ExpandIconProps {
  isExpanded: boolean;
  color: string;
}

const ExpandIcon = ({ isExpanded, color }: ExpandIconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ color }}
    className={cx("transition-transform", isExpanded && "rotate-180")}
  >
    <polyline points="6 2 10 6 6 10" />
  </svg>
);

// SVG icon component for menu buttons
interface IconProps {
  size: number;
  color: string;
}

const MenuIcon = ({ size, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color }}
  >
    <circle cx="10" cy="10" r="2" />
    <circle cx="10" cy="3" r="2" />
    <circle cx="10" cy="17" r="2" />
    <path d="M10 5 v10" />
  </svg>
);

// SVG icon component for info buttons
const InfoIcon = ({ size, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color }}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 5 v6" />
    <path d="M8 5 h0" />
  </svg>
);

// Helper component for form field labels with info icon
interface LabelWithIconProps {
  label: string;
  color: string;
  iconColor: string;
}

const LabelWithIcon = ({ label, color, iconColor }: LabelWithIconProps) => (
  <div className="mb-2 flex items-center gap-2">
    <label className="text-xs font-semibold" style={{ color }}>
      {label}
    </label>
    <button className="flex items-center justify-center rounded">
      <InfoIcon size={16} color={iconColor} />
    </button>
  </div>
);

// Helper component for input fields with consistent styling
interface InputFieldProps {
  placeholder: string;
  textColor: string;
  disabled?: boolean;
}

const InputField = ({ placeholder, textColor, disabled }: InputFieldProps) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded border px-3 py-2 text-xs font-semibold"
    style={{
      borderColor: COLORS.inputBorderColor,
      backgroundColor: COLORS.inputBgColor,
      color: textColor,
    }}
    disabled={disabled}
  />
);

// Helper component for button with hover effects
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor =
      COLORS.buttonHoverBgColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor =
      COLORS.buttonBgColor;
  };

  return (
    <button
      className="flex-1 rounded py-2 text-xs font-semibold transition-colors"
      style={{
        backgroundColor: COLORS.buttonBgColor,
        color: COLORS.buttonTextColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export const TestCard = (): JSX.Element => {
  const [section1Expanded, setSection1Expanded] = useState(true);
  const [section2Expanded, setSection2Expanded] = useState(true);

  return (
    <div
      id="testElem"
      className="w-64 bg-black p-5"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center rounded">
          <MenuIcon size={20} color={COLORS.headerText} />
        </button>
      </div>

      {/* Section 1: Collapsible */}
      <div className="mb-6">
        <button
          onClick={() => setSection1Expanded(!section1Expanded)}
          className="mb-3 flex items-center gap-2"
        >
          <ExpandIcon isExpanded={section1Expanded} color={COLORS.headerText} />
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.section1Text }}
          >
            From entire frame to a singl...
          </span>
        </button>
        {section1Expanded && (
          <div
            className="rounded bg-opacity-10 p-3"
            style={{ backgroundColor: COLORS.expandedBgColor }}
          />
        )}
      </div>

      {/* Section 2: Add New Design */}
      <div className="mb-6">
        <button
          onClick={() => setSection2Expanded(!section2Expanded)}
          className="mb-3 flex items-center gap-2"
        >
          <ExpandIcon
            isExpanded={section2Expanded}
            color={COLORS.section2Text}
          />
          <span
            className="text-sm font-semibold"
            style={{ color: COLORS.section2Text }}
          >
            Add New Design
          </span>
        </button>
        {section2Expanded && (
          <div className="space-y-4">
            {/* Personal Access Token Field */}
            <div>
              <LabelWithIcon
                label="Personal Access Token"
                color={COLORS.labelText}
                iconColor={COLORS.labelText}
              />
              <InputField
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                textColor={COLORS.inputTextColor}
                disabled
              />
            </div>

            {/* Design URL Field */}
            <div>
              <LabelWithIcon
                label="Design URL"
                color={COLORS.labelText2}
                iconColor={COLORS.labelText2}
              />
              <InputField
                placeholder="https://www.figma.com/file/:"
                textColor={COLORS.inputTextColor2}
                disabled
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <ActionButton label="Awesome" />
              <ActionButton label="Prepare" />
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
