import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

// Design colors match specific design requirements
const COLORS = {
  cardBg: "#1e1e1a",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputBg: "#272822",
  inputBorder: "#a5adad",
  inputBorderAlt: "#929291",
  placeholderText: "#737470",
  placeholderTextAlt: "#71726e",
  buttonBg: "#843A17",
  buttonText: "#8c8078",
  footerText: "#b5b5b5",
  recentBreakdownsText: "#b0b0b0",
} as const;

/**
 * Renders a collapsible section header with chevron icon.
 * Used for collapsible sections like subtitle and "Add New Design".
 */
const CollapsibleHeader = ({
  text,
  color,
  textSize,
  marginTop,
}: {
  text: string;
  color: string;
  textSize: "xs" | "sm";
  marginTop: string;
}) => (
  <div className={`${marginTop} flex items-center gap-2`}>
    <FiChevronUp size={16} style={{ color }} />
    <p className={`text-${textSize} font-semibold`} style={{ color }}>
      {text}
    </p>
  </div>
);

/**
 * Renders a labeled input field with info icon.
 * Used for Personal Access Token and Design URL fields.
 */
const LabeledInput = ({
  label,
  labelColor,
  placeholder,
  placeholderColor,
  placeholderFontSize = "text-xs",
  borderWidth,
  borderColor,
  marginTop,
}: {
  label: string;
  labelColor: string;
  placeholder: string;
  placeholderColor: string;
  placeholderFontSize?: string;
  borderWidth: string;
  borderColor: string;
  marginTop: string;
}) => (
  <div className={marginTop}>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold" style={{ color: labelColor }}>
        {label}
      </label>
      <FiInfo size={16} style={{ color: labelColor }} />
    </div>
    <div
      className="rounded px-3 py-2.5"
      style={{
        backgroundColor: COLORS.inputBg,
        borderWidth,
        borderColor,
      }}
    >
      <span
        className={`${placeholderFontSize} font-semibold`}
        style={{
          color: placeholderColor,
          ...(placeholderFontSize === "font-semibold" && {
            fontSize: "10.5px",
          }),
        }}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = () => {
  return (
    <div
      className="w-[480px] rounded-lg p-5"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h2>
        <FiSettings size={18} style={{ color: COLORS.headerText }} />
      </div>

      {/* Collapsible subtitle section */}
      <CollapsibleHeader
        text="From entire frame to a singl..."
        color={COLORS.subtitleText}
        textSize="xs"
        marginTop="mt-4"
      />

      {/* Add New Design section header */}
      <CollapsibleHeader
        text="Add New Design"
        color={COLORS.sectionText}
        textSize="sm"
        marginTop="mt-12"
      />

      {/* Personal Access Token input field */}
      <LabeledInput
        label="Personal Access Token"
        labelColor={COLORS.labelText}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        placeholderColor={COLORS.placeholderText}
        borderWidth="1px"
        borderColor={COLORS.inputBorder}
        marginTop="mt-10"
      />

      {/* Design URL input field */}
      <LabeledInput
        label="Design URL"
        labelColor={COLORS.labelTextAlt}
        placeholder="https://www.figma.com/file/:"
        placeholderColor={COLORS.placeholderTextAlt}
        placeholderFontSize="font-semibold"
        borderWidth="2px"
        borderColor={COLORS.inputBorderAlt}
        marginTop="mt-6"
      />

      {/* Action buttons */}
      <div className="mt-10 flex gap-3">
        <button
          className="rounded px-12 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="rounded px-12 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-12">
        <h3
          className="text-sm font-semibold"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <span className="text-xs" style={{ color: COLORS.footerText }}>
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};

export default TestCard;
