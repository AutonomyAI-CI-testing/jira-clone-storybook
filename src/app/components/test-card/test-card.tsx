import { useState, ReactNode } from "react";

// Design tokens for consistent styling across the card
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  sectionLabel: "#8b9291",
  sectionLabelAlt: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputText: "#737470",
  inputBorder: "#444444",
  inputBackground: "#1a1a1a",
  buttonBackground: "#8c5a3d",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
  footerText: "#9ca3af",
  borderColor: "#d1d5db",
  iconColor: "#a0a0a0",
} as const;

const FONT_FAMILY = "Inter";

// Info icon component used in labels
const InfoIcon = () => (
  <button
    className="border-gray-600 flex h-[16px] w-[16px] items-center justify-center rounded-full border"
    aria-label="Info"
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5"
        cy="5"
        r="4.5"
        stroke={COLORS.iconColor}
        strokeWidth="0.5"
      />
      <text
        x="5"
        y="6.5"
        textAnchor="middle"
        fontSize="6"
        fill={COLORS.iconColor}
        fontWeight="bold"
      >
        i
      </text>
    </svg>
  </button>
);

// Settings icon component in header
const SettingsIcon = () => (
  <button
    className="border-gray-600 flex h-[20px] w-[20px] items-center justify-center rounded-full border"
    aria-label="Settings"
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6"
        cy="6"
        r="2.5"
        stroke={COLORS.iconColor}
        strokeWidth="0.5"
      />
      <circle cx="6" cy="2" r="0.75" fill={COLORS.iconColor} />
      <circle cx="10" cy="6" r="0.75" fill={COLORS.iconColor} />
      <circle cx="6" cy="10" r="0.75" fill={COLORS.iconColor} />
      <circle cx="2" cy="6" r="0.75" fill={COLORS.iconColor} />
    </svg>
  </button>
);

// Collapsible section component for DRY principle
interface CollapsibleSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  titleColor: string;
  children: ReactNode;
}

const CollapsibleSection = ({
  isExpanded,
  onToggle,
  title,
  titleColor,
  children,
}: CollapsibleSectionProps) => (
  <div className="flex flex-col gap-3">
    <button onClick={onToggle} className="flex items-center gap-2">
      <span
        className="flex h-4 w-4 items-center justify-center text-[10px]"
        style={{
          color: titleColor,
        }}
      >
        {isExpanded ? "▲" : "▼"}
      </span>
      <p
        className="text-[13.5px]"
        style={{
          color: titleColor,
          fontFamily: FONT_FAMILY,
          fontWeight: 600,
        }}
      >
        {title}
      </p>
    </button>
    {isExpanded && children}
  </div>
);

// Input field component for form inputs
interface InputFieldProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
  labelColor: string;
}

const InputField = ({
  label,
  type,
  placeholder,
  labelColor,
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-1">
      <label
        className="text-[11.5px]"
        style={{
          color: labelColor,
          fontFamily: FONT_FAMILY,
          fontWeight: 600,
        }}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-600 bg-gray-900 rounded border px-3 py-2 text-[10.5px]"
      style={{
        color: type === "password" ? COLORS.inputText : "#71726e",
        fontFamily: FONT_FAMILY,
        fontWeight: 600,
        borderColor: COLORS.inputBorder,
        backgroundColor: COLORS.inputBackground,
      }}
      readOnly
    />
  </div>
);

// Action button component
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    className="flex flex-1 items-center justify-center rounded py-2 text-[11.5px]"
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
    }}
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div
      className="flex w-[254px] flex-col gap-5 rounded bg-black p-5"
      style={{
        backgroundColor: COLORS.background,
      }}
    >
      {/* Header with Title and Settings Icon */}
      <div className="flex items-center justify-between">
        <h1
          className="font-primary-bold text-[13.5px]"
          style={{
            color: COLORS.headerText,
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
          }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section: From entire frame */}
      <CollapsibleSection
        isExpanded={isFrameExpanded}
        onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
        title="From entire frame to a singl..."
        titleColor={COLORS.sectionLabel}
      >
        <div className="bg-gray-800 ml-4 h-[40px] opacity-30" />
      </CollapsibleSection>

      {/* Collapsible Section: Add New Design */}
      <CollapsibleSection
        isExpanded={isDesignExpanded}
        onToggle={() => setIsDesignExpanded(!isDesignExpanded)}
        title="Add New Design"
        titleColor={COLORS.sectionLabelAlt}
      >
        <div className="flex flex-col gap-4">
          <InputField
            label="Personal Access Token"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            labelColor={COLORS.labelText}
          />
          <InputField
            label="Design URL"
            type="text"
            placeholder="https://www.figma.com/file/:"
            labelColor={COLORS.labelTextAlt}
          />
          {/* Action Buttons */}
          <div className="flex gap-3">
            <ActionButton label="Awesome" />
            <ActionButton label="Prepare" />
          </div>
        </div>
      </CollapsibleSection>

      {/* Recent Breakdowns Section */}
      <div className="pt-3">
        <h2
          className="text-[13.5px]"
          style={{
            color: COLORS.recentBreakdownsText,
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
          }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div
        className="pt-3 text-center"
        style={{ borderTop: `1px solid ${COLORS.borderColor}` }}
      >
        <p className="text-xs" style={{ color: COLORS.footerText }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
