import { useState } from "react";
import { FaChevronUp as ChevronUp } from "react-icons/fa";

// Color palette for the dark-themed card interface
const COLORS = {
  // Background colors
  cardBg: "#2b2b2b",
  inputBg: "#3a3a3a",
  // Text colors
  headerText: "#b5b5b5",
  sectionHeaderText: "#b2b2b1",
  secondarySectionText: "#8b9291",
  labelText: "#a4a4a3",
  placeholderText: "#737470",
  buttonText: "#8c8078",
  footerText: "#a4a4a3",
  recentBreakdownsText: "#b0b0b0",
  // Icon/border colors
  settingsIconColor: "#b5b5b5",
  infoIconColor: "#a3a3a2",
  inputBorder: "#555",
  sectionDivider: "#444",
} as const;

const BUTTON_STYLE = {
  backgroundColor: "#a36d4e",
  color: COLORS.buttonText,
} as const;

// SVG icon for settings button in header
const SettingsIcon = () => (
  <svg
    className="h-5 w-5"
    style={{
      color: COLORS.settingsIconColor,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "1.5",
    }}
    viewBox="0 0 24 24"
  >
    <path d="M12 8.75V4m0 16v-4.75M8.75 12H4m16 0h-4.75M6.34 6.34l-3.36-3.36M20.66 20.66l-3.36-3.36M17.66 6.34l3.36-3.36M6.34 20.66l-3.36 3.36" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

// SVG icon for info tooltips next to field labels
const InfoIcon = () => (
  <svg
    className="h-4 w-4"
    style={{
      color: COLORS.infoIconColor,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "1.5",
    }}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

// Collapsible section header with chevron indicator
interface CollapsibleHeaderProps {
  isOpen: boolean;
  onClick: () => void;
  label: string;
  textColor: string;
  chevronColor: string;
  isSecondary?: boolean;
}

const CollapsibleHeader = ({
  isOpen,
  onClick,
  label,
  textColor,
  chevronColor,
  isSecondary,
}: CollapsibleHeaderProps) => (
  <button onClick={onClick} className="flex items-center gap-3 pl-5">
    <ChevronUp
      className={`h-5 w-5 transition-transform ${
        isOpen ? "rotate-0" : "-rotate-90"
      }`}
      style={{ color: chevronColor }}
    />
    <span
      className={
        isSecondary
          ? "text-[11.5px] font-semibold leading-[13.92px]"
          : "text-[13.5px] font-semibold leading-[16.34px]"
      }
      style={{ color: textColor }}
    >
      {label}
    </span>
  </button>
);

// Form field with label, info icon, and read-only input
interface FormFieldProps {
  label: string;
  placeholder: string;
  color: string;
}

const FormField = ({ label, placeholder, color }: FormFieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label
        className="text-[11.5px] font-semibold leading-[13.92px]"
        style={{ color }}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border px-3 py-3 text-[10.5px] font-semibold leading-[12.71px]"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.placeholderText,
      }}
      readOnly
    />
  </div>
);

export const TestCard = () => {
  const [isFrameOpen, setIsFrameOpen] = useState(true);
  const [isDesignOpen, setIsDesignOpen] = useState(true);

  return (
    <div
      className="w-full max-w-[508px] px-5 py-8"
      style={{ backgroundColor: COLORS.cardBg, minHeight: "100vh" }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-10 flex items-center justify-between pt-4">
        <h1
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section for frame-related content - currently non-functional placeholder */}
      <div className="mb-16">
        <CollapsibleHeader
          isOpen={isFrameOpen}
          onClick={() => setIsFrameOpen(!isFrameOpen)}
          label="From entire frame to a singl..."
          textColor={COLORS.secondarySectionText}
          chevronColor={COLORS.secondarySectionText}
          isSecondary
        />
      </div>

      {/* Collapsible section for design configuration form */}
      <div className="mb-16">
        <CollapsibleHeader
          isOpen={isDesignOpen}
          onClick={() => setIsDesignOpen(!isDesignOpen)}
          label="Add New Design"
          textColor={COLORS.sectionHeaderText}
          chevronColor={COLORS.sectionHeaderText}
        />
      </div>

      {/* Form fields - only visible when the design section is expanded */}
      {isDesignOpen && (
        <div className="mb-16 space-y-8">
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            color={COLORS.labelText}
          />
          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            color={COLORS.infoIconColor}
          />

          {/* Action buttons with consistent styling */}
          <div className="flex gap-4 pt-6">
            <button
              className="flex-1 rounded-lg px-4 py-3 text-center text-[11.5px] font-semibold leading-[13.92px] transition-opacity hover:opacity-80"
              style={BUTTON_STYLE}
            >
              Awesome
            </button>
            <button
              className="flex-1 rounded-lg px-4 py-3 text-center text-[11.5px] font-semibold leading-[13.92px] transition-opacity hover:opacity-80"
              style={BUTTON_STYLE}
            >
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns section - currently empty placeholder */}
      <div
        className="mt-20 pt-10"
        style={{ borderTop: `1px solid ${COLORS.sectionDivider}` }}
      >
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: COLORS.footerText }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
