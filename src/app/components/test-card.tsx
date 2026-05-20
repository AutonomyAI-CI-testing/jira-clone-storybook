import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// Color palette constants for consistent theming
const COLORS = {
  background: "#1c1c1c",
  textPrimary: "#c5c5c5",
  textSecondary: "#b0b0b0",
  textMuted: "#a0a0a0",
  textDisabled: "#7a7a7a",
  icon: "#9a9a9a",
  border: "#6b6b6b",
  inputBg: "#272822",
  buttonBg: "#9a4419",
  buttonText: "#e8a080",
} as const;

// Default form values shown to the user
const DEFAULT_TOKEN = "figd_xxxxxxxxxxxxxxxxxx";
const DEFAULT_URL = "https://www.figma.com/file/:";

interface CollapsibleHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  iconSize: number;
  iconColor: string;
  titleStyle: string;
}

/**
 * Reusable collapsible section header with chevron toggle icon.
 * Extracted to eliminate duplication between the two collapsible sections.
 */
const CollapsibleHeader = ({
  isOpen,
  onToggle,
  title,
  iconSize,
  iconColor,
  titleStyle,
}: CollapsibleHeaderProps): JSX.Element => {
  const ChevronIcon = isOpen ? MdKeyboardArrowUp : MdKeyboardArrowDown;

  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-2 py-2 text-left"
    >
      <ChevronIcon size={iconSize} style={{ color: iconColor }} />
      <span className={titleStyle}>{title}</span>
    </button>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  showInfoButton?: boolean;
}

/**
 * Form field with label, optional info button, and read-only input.
 * Extracted to reduce duplication between Personal Access Token and Design URL fields.
 */
const FormField = ({
  label,
  value,
  showInfoButton = true,
}: FormFieldProps): JSX.Element => (
  <div className="mb-6">
    <div className="mb-3 flex items-center gap-2">
      <label
        className="text-[13px] font-semibold"
        style={{ color: COLORS.textSecondary }}
      >
        {label}
      </label>
      {showInfoButton && (
        <button
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full border text-[11px]"
          style={{ borderColor: COLORS.border, color: COLORS.icon }}
          aria-label={`More info about ${label}`}
        >
          i
        </button>
      )}
    </div>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full rounded border px-4 py-3 text-[13px] font-medium"
      style={{
        borderColor: COLORS.border,
        backgroundColor: COLORS.inputBg,
        color: COLORS.textDisabled,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [firstSectionOpen, setFirstSectionOpen] = useState(true);
  const [secondSectionOpen, setSecondSectionOpen] = useState(true);

  const toggleFirstSection = () => setFirstSectionOpen(!firstSectionOpen);
  const toggleSecondSection = () => setSecondSectionOpen(!secondSectionOpen);

  return (
    <div className="w-[430px]" style={{ backgroundColor: COLORS.background }}>
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <h1
          className="text-[16px] font-bold"
          style={{ color: COLORS.textPrimary }}
        >
          UI magician Agent
        </h1>
        <IoSettingsOutline style={{ color: COLORS.icon }} size={20} />
      </div>

      {/* First Collapsible Section */}
      <div className="mt-2 px-4">
        <CollapsibleHeader
          isOpen={firstSectionOpen}
          onToggle={toggleFirstSection}
          title="From entire frame to a singl..."
          iconSize={14}
          iconColor={COLORS.textMuted}
          titleStyle="text-[13px] font-medium"
        />
      </div>

      {/* Second Collapsible Section - Add New Design */}
      <div className="mt-12 px-4">
        <CollapsibleHeader
          isOpen={secondSectionOpen}
          onToggle={toggleSecondSection}
          title="Add New Design"
          iconSize={16}
          iconColor="#c0c0c0"
          titleStyle="text-[15px] font-bold"
        />

        {secondSectionOpen && (
          <div className="mt-6 px-3">
            <FormField label="Personal Access Token" value={DEFAULT_TOKEN} />
            <FormField label="Design URL" value={DEFAULT_URL} />

            {/* Action Buttons */}
            <div className="mb-8 mt-2 flex gap-4">
              <button
                className="flex-1 rounded-md px-6 py-3 text-[14px] font-semibold"
                style={{
                  backgroundColor: COLORS.buttonBg,
                  color: COLORS.buttonText,
                }}
              >
                Awesome
              </button>
              <button
                className="flex-1 rounded-md px-6 py-3 text-[14px] font-semibold"
                style={{
                  backgroundColor: COLORS.buttonBg,
                  color: COLORS.buttonText,
                }}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-10 px-5 pb-6">
        <h2
          className="text-[16px] font-bold"
          style={{ color: COLORS.textPrimary }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[12px]" style={{ color: COLORS.textMuted }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
