import { useState } from "react";
import cx from "classix";

// Color constants for the dark theme
const COLORS = {
  // Background colors
  bg: {
    main: "#2b2b2b",
    input: "#272822",
    hoverDark: "#0a0a0a",
  },
  // Text colors
  text: {
    header: "#b5b5b5",
    sectionGray: "#8b9291",
    sectionAlt: "#b2b2b1",
    label: "#a4a4a3",
    labelAlt: "#a3a3a2",
    inputText: "#737470",
    inputTextAlt: "#71726e",
    secondary: "#b0b0b0",
    buttonText: "#8c8078",
  },
  // Border colors
  border: {
    divider: "#1a1a1a",
    input: "#a5adad",
    inputAlt: "#929291",
    footer: "#d3d3d3",
  },
  // Button colors
  button: {
    bg: "#843a17",
    hover: "#934120",
    active: "#753410",
  },
  // Icon colors
  icon: "#8b9291",
}

export const TestCard = (): JSX.Element => {
  const [isFirstSectionExpanded, setIsFirstSectionExpanded] = useState(false);
  const [isSecondSectionExpanded, setIsSecondSectionExpanded] = useState(true);

  return (
    <div className="min-h-screen p-5" style={{ backgroundColor: COLORS.bg.main }}>
      <div className="w-full max-w-xs rounded-lg" style={{ backgroundColor: COLORS.bg.main }}>
        {/* Header: Title with settings icon */}
        <div className="mb-6 flex items-center justify-between px-5 py-5">
          <h1 className="text-[13.5px] font-semibold" style={{ color: COLORS.text.header }}>
            UI magician Agent
          </h1>
          <SettingsIcon />
        </div>

        {/* First collapsible section — shows truncated design breakdown title, collapsed by default */}
        <CollapsibleSection
          title="From entire frame to a singl..."
          isExpanded={isFirstSectionExpanded}
          onToggle={() => setIsFirstSectionExpanded(!isFirstSectionExpanded)}
          titleColor={COLORS.text.sectionGray}
        />

        {/* Second collapsible section — displays form for adding a new design, expanded by default */}
        <CollapsibleSection
          title="Add New Design"
          isExpanded={isSecondSectionExpanded}
          onToggle={() => setIsSecondSectionExpanded(!isSecondSectionExpanded)}
          titleColor={COLORS.text.sectionAlt}
        >
          {/* Form Fields */}
          <div className="space-y-5 px-5 py-4">
            {/* Personal Access Token Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-[11.5px] font-semibold" style={{ color: COLORS.text.label }}>
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full px-3 py-3 text-[11.5px] font-semibold"
                style={{
                  borderColor: COLORS.border.input,
                  backgroundColor: COLORS.bg.input,
                  color: COLORS.text.inputText,
                  border: `1px solid ${COLORS.border.input}`,
                }}
              />
            </div>

            {/* Design URL */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-[11.5px] font-semibold" style={{ color: COLORS.text.labelAlt }}>
                  Design URL
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full px-3 py-3 text-[10.5px] font-semibold"
                style={{
                  borderColor: COLORS.border.inputAlt,
                  backgroundColor: COLORS.bg.input,
                  color: COLORS.text.inputTextAlt,
                  border: `1px solid ${COLORS.border.inputAlt}`,
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <ActionButton>Awesome</ActionButton>
              <ActionButton>Prepare</ActionButton>
            </div>
          </div>
        </CollapsibleSection>

        {/* Recent Breakdowns Section */}
        <div className="border-t px-5 py-5" style={{ borderColor: COLORS.border.divider }}>
          <h2 className="text-[13.5px] font-semibold" style={{ color: COLORS.text.secondary }}>
            Recent Breakdowns
          </h2>
        </div>

        {/* Footer */}
        <div className="border-t pt-3 text-center" style={{ borderColor: COLORS.border.footer }}>
          <p className="text-[11.5px]" style={{ color: COLORS.text.secondary }}>© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  titleColor: string;
  children?: React.ReactNode;
}

// ActionButton component — reusable button with theme colors and interactive states
const ActionButton = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <button
    className="flex-1 rounded-[2px] px-4 py-3 text-center text-[11.5px] font-semibold transition-colors"
    style={{
      backgroundColor: COLORS.button.bg,
      color: COLORS.text.buttonText,
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.button.hover)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.button.bg)}
    onMouseDown={(e) => (e.currentTarget.style.backgroundColor = COLORS.button.active)}
    onMouseUp={(e) => (e.currentTarget.style.backgroundColor = COLORS.button.hover)}
  >
    {children}
  </button>
);

const CollapsibleSection = ({
  title,
  isExpanded,
  onToggle,
  titleColor,
  children,
}: CollapsibleSectionProps): JSX.Element => {
  return (
    <div className="border-t" style={{ borderColor: COLORS.border.divider }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-5 py-5"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.bg.hoverDark)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <ChevronIcon isExpanded={isExpanded} />
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: titleColor }}
        >
          {title}
        </span>
      </button>
      {isExpanded && children}
    </div>
  );
};

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cx("transition-transform", !isExpanded && "rotate-180")}
  >
    <path
      d="M1 1L6 6L11 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      color={COLORS.icon}
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={COLORS.icon} strokeWidth="1" />
    <text
      x="7.5"
      y="10"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill={COLORS.icon}
    >
      i
    </text>
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="6" stroke={COLORS.text.header} strokeWidth="1" />
    <circle cx="8" cy="3" r="1" fill={COLORS.text.header} />
    <circle cx="12" cy="8" r="1" fill={COLORS.text.header} />
    <circle cx="8" cy="13" r="1" fill={COLORS.text.header} />
    <circle cx="4" cy="8" r="1" fill={COLORS.text.header} />
  </svg>
);
