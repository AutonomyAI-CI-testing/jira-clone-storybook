// Icon dimensions and styling
const ICON_SIZES = {
  gear: { width: 14, height: 16 },
  chevron: { width: 12, height: 8 },
  chevronSmall: { width: 8, height: 5 },
  info: { width: 15, height: 15 },
} as const;

// Reusable SVG icon component for the chevron-up pattern
const ChevronIcon = ({
  width,
  height,
  stroke,
}: {
  width: number;
  height: number;
  stroke: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="10 6 6 2 2 6" />
  </svg>
);

// Reusable SVG icon component for info circle
const InfoIcon = ({ stroke = "#a4a4a3" }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 20 20"
    fill="none"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10" cy="10" r="9" />
    <line x1="10" y1="9" x2="10" y2="14" />
    <circle cx="10" cy="6.5" r="0.5" fill={stroke} strokeWidth="1" />
  </svg>
);

// Reusable input field component with label and info icon
const LabeledInput = ({
  label,
  placeholder,
  borderStyle,
  textColor,
}: {
  label: string;
  placeholder: string;
  borderStyle: string;
  textColor: string;
}) => (
  <div
    className="mb-[18px]"
    style={{ marginBottom: label === "Design URL" ? "20px" : "18px" }}
  >
    <div className="mb-[8px] flex items-center gap-[8px]">
      <span
        className="font-semibold text-[#a4a4a3]"
        style={{
          fontSize: "11.5px",
          lineHeight: "13.92px",
          color: label === "Design URL" ? "#a3a3a2" : "#a4a4a3",
        }}
      >
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-[#272822] px-[19px] py-[10px] outline-none"
      style={{
        border: borderStyle,
        fontSize: label === "Design URL" ? "10.5px" : "11.5px",
        lineHeight: label === "Design URL" ? "12.71px" : "13.92px",
        color: textColor,
        fontWeight: 600,
      }}
    />
  </div>
);

// Reusable button component
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="font-semibold"
    style={{
      background: "#843a17",
      borderRadius: "4px",
      width: "85px",
      height: "37px",
      fontSize: "11.5px",
      lineHeight: "13.92px",
      color: "#8c8078",
      fontWeight: 600,
    }}
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1c1d17] px-5 pb-8 pt-5"
    >
      {/* Header row */}
      <div className="mb-[14px] flex items-center justify-between">
        <span
          className="font-semibold text-[#b5b5b5]"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICON_SIZES.gear.width}
          height={ICON_SIZES.gear.height}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtext row */}
      <div className="flex items-center gap-[9px]">
        <ChevronIcon
          width={ICON_SIZES.chevronSmall.width}
          height={ICON_SIZES.chevronSmall.height}
          stroke="#8b9291"
        />
        <span
          className="font-semibold text-[#8b9291]"
          style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer between subtext and Add New Design */}
      <div className="mt-[73px]" />

      {/* Add New Design section header */}
      <div className="mb-[18px] flex items-center gap-[9px]">
        <ChevronIcon
          width={ICON_SIZES.chevron.width}
          height={ICON_SIZES.chevron.height}
          stroke="#b2b2b1"
        />
        <span
          className="font-semibold text-[#b2b2b1]"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <LabeledInput
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderStyle="2px solid #929291"
        textColor="#737470"
      />

      {/* Design URL field */}
      <LabeledInput
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderStyle="1px solid #a5adad"
        textColor="#71726e"
      />

      {/* Button row */}
      <div className="mb-[52px] flex justify-center gap-[16px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <span
        className="font-semibold text-[#b0b0b0]"
        style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};
