// Design tokens for consistent styling across the card
const COLORS = {
  bg: "#222222",
  inputBg: "#272822",
  buttonBg: "#843a17",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  labelText: "#a4a4a3",
  inputText: "#737470",
  inputBorder: "#a5adad",
  infoText: "#a3a3a2",
  footerText: "#b0b0b0",
} as const;

const FONT_SIZES = {
  headerFont: "13.5px",
  subtitleFont: "11.5px",
  labelFont: "11.5px",
  designUrlFont: "10.5px",
  footerFont: "13.5px",
} as const;

const FONT_WEIGHT = 600;

// Additional UI-specific colors not in main COLORS token (used in single sections)
const UI_COLORS = {
  addNewDesignText: "#b2b2b1",
  designUrlBorder: "#929291",
  designUrlText: "#71726e",
  buttonText: "#8c8078",
} as const;

/** Gear icon SVG */
const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/** Chevron up icon with configurable size */
const ChevronUpIcon = ({ size = 10 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/** Info icon SVG */
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

/**
 * LabelWithIcon component
 * Displays a label with an optional info icon. Extracted to reduce repetition.
 */
interface LabelWithIconProps {
  text: string;
  color: string;
  showIcon?: boolean;
}

const LabelWithIcon = ({
  text,
  color,
  showIcon = true,
}: LabelWithIconProps) => (
  <div className="flex items-center gap-2">
    <span
      className={`text-[${color}]`}
      style={{ fontSize: FONT_SIZES.labelFont, fontWeight: FONT_WEIGHT }}
    >
      {text}
    </span>
    {showIcon && (
      <span className={`text-[${color}]`}>
        <InfoIcon />
      </span>
    )}
  </div>
);

/**
 * TestCard component
 *
 * Displays a Figma plugin UI card with configuration inputs and controls.
 * Features a dark theme styled to match Figma's design system.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans min-w-[254px] bg-[#222222] px-5 py-5"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-[${COLORS.headerText}]`}
          style={{ fontSize: FONT_SIZES.headerFont, fontWeight: FONT_WEIGHT }}
        >
          UI magician Agent
        </span>
        <span className={`text-[${COLORS.headerText}]`}>
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <span className={`text-[${COLORS.subtitleText}]`}>
          <ChevronUpIcon size={9} />
        </span>
        <span
          className={`text-[${COLORS.subtitleText}]`}
          style={{ fontSize: FONT_SIZES.subtitleFont, fontWeight: FONT_WEIGHT }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer gap matching Figma layout */}
      <div className="mt-14" />

      {/* Add New Design section row */}
      <div className="flex items-center gap-2">
        <span className={`text-[${UI_COLORS.addNewDesignText}]`}>
          <ChevronUpIcon size={12} />
        </span>
        <span
          className={`text-[${UI_COLORS.addNewDesignText}]`}
          style={{ fontSize: FONT_SIZES.headerFont, fontWeight: FONT_WEIGHT }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <LabelWithIcon text="Personal Access Token" color={COLORS.labelText} />
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className={`mt-2 w-full rounded border border-[${COLORS.inputBorder}] bg-[${COLORS.inputBg}] px-3 py-2 text-[${COLORS.inputText}] outline-none`}
          style={{ fontSize: FONT_SIZES.labelFont, fontWeight: FONT_WEIGHT }}
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <LabelWithIcon text="Design URL" color={COLORS.infoText} />
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={`mt-2 w-full rounded border-2 border-[${UI_COLORS.designUrlBorder}] bg-[${COLORS.inputBg}] px-3 py-2 text-[${UI_COLORS.designUrlText}] outline-none`}
          style={{
            fontSize: FONT_SIZES.designUrlFont,
            fontWeight: FONT_WEIGHT,
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="mt-6 flex gap-3">
        <button
          className={`flex-1 rounded-[4px] bg-[${COLORS.buttonBg}] px-4 py-[10px] text-[${UI_COLORS.buttonText}]`}
          style={{ fontSize: FONT_SIZES.labelFont, fontWeight: FONT_WEIGHT }}
        >
          Awesome
        </button>
        <button
          className={`flex-1 rounded-[4px] bg-[${COLORS.buttonBg}] px-4 py-[10px] text-[${UI_COLORS.buttonText}]`}
          style={{ fontSize: FONT_SIZES.labelFont, fontWeight: FONT_WEIGHT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer spacer + Recent Breakdowns */}
      <div className="mt-14">
        <span
          className={`text-[${COLORS.footerText}]`}
          style={{ fontSize: FONT_SIZES.footerFont, fontWeight: FONT_WEIGHT }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
