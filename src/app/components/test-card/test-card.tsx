// Color palette constants - matches dark theme UI design
const COLORS = {
  headerText: "#b5b5b5",
  secondaryText: "#8b9291",
  tertiaryText: "#b2b2b1",
  labelText: "#a9a9a8",
  designUrlLabel: "#a8a8a7",
  inputText: "#737470",
  designUrlInputText: "#71726e",
  inputBorder: "#5a5a5a",
  inputBackground: "#3a3a3a",
  footerText: "#b0b0b0",
  copyrightText: "#a8a8a7",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
};

// SVG style constants
const SVG_STYLES = {
  header: { stroke: COLORS.headerText, strokeWidth: 1.5 },
  upChevron: { stroke: COLORS.headerText, strokeWidth: 1.5 },
  rightChevron: { stroke: COLORS.tertiaryText, strokeWidth: 1.5 },
  infoIcon: (color: string) => ({ stroke: color, strokeWidth: 1.2 }),
};

// Component for rendering info icons (used multiple times)
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={SVG_STYLES.infoIcon(color)}
    className="flex-shrink-0"
  >
    <circle cx="8" cy="8" r="6.5" />
    <text
      x="8"
      y="10.5"
      textAnchor="middle"
      fontSize="9"
      fontWeight="600"
      fill={color}
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-black p-[20px] pb-[40px] text-font">
      {/* Header */}
      <div className="mb-[50px] flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        {/* Atom/Molecule Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={SVG_STYLES.header}
        >
          <circle cx="12" cy="12" r="3" fill="none" />
          <ellipse cx="12" cy="12" rx="8" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="4" transform="rotate(60 12 12)" />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="4"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1.5" fill="#b5b5b5" />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="mb-[80px] flex items-start gap-[12px]">
        {/* Up Chevron */}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[2px] flex-shrink-0"
          style={SVG_STYLES.upChevron}
        >
          <path d="M1 5L5 1L9 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p
          className="text-[11.5px] font-semibold"
          style={{ color: COLORS.secondaryText }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-[50px] flex items-center gap-[15px]">
        {/* Right Chevron */}
        <svg
          width="8"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={SVG_STYLES.rightChevron}
        >
          <path d="M3 1L7 5L3 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.tertiaryText }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-[40px]">
        <label
          className="mb-[12px] flex items-center gap-[10px] text-[11.5px] font-semibold"
          style={{ color: COLORS.labelText }}
        >
          Personal Access Token
          <InfoIcon color={COLORS.labelText} />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border-2 bg-[#3a3a3a] px-[12px] py-[11px] text-[11.5px] font-semibold"
          style={{
            color: COLORS.inputText,
            borderColor: COLORS.inputBorder,
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-[50px]">
        <label
          className="mb-[12px] flex items-center gap-[10px] text-[11.5px] font-semibold"
          style={{ color: COLORS.designUrlLabel }}
        >
          Design URL
          <InfoIcon color={COLORS.designUrlLabel} />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 bg-[#3a3a3a] px-[12px] py-[11px] text-[10.5px] font-semibold"
          style={{
            color: COLORS.designUrlInputText,
            borderColor: COLORS.inputBorder,
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-[60px] flex gap-[16px]">
        <button
          className="flex-1 rounded-[8px] px-[16px] py-[13px] text-[11.5px] font-semibold"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-[8px] px-[16px] py-[13px] text-[11.5px] font-semibold"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <h3
        className="text-[13.5px] font-semibold"
        style={{ color: COLORS.footerText, paddingBottom: "20px" }}
      >
        Recent Breakdowns
      </h3>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p
          className="text-[11.5px] font-semibold"
          style={{ color: COLORS.copyrightText }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
