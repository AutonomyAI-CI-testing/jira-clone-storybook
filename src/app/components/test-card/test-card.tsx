// Color palette for the dark theme UI
const COLORS = {
  header: "#b5b5b5",
  collapsibleText: "#8b9291",
  sectionTitle: "#b2b2b1",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  inputBg: "#272822",
  inputBorderPrimary: "#a5adad",
  inputBorderSecondary: "#929291",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  sectionHeaderText: "#b0b0b0",
};

// Info icon SVG component for form labels
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="10"
      textAnchor="middle"
      fill={color}
      fontSize="8"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

// Dropdown arrow icon for collapsible section
const DropdownArrow = (): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 0.5L4 4L7.5 0.5"
      stroke={COLORS.collapsibleText}
      strokeWidth="1"
    />
  </svg>
);

// Up arrow icon for "Add New Design" section
const UpArrow = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 7.5L6 1L11.5 7.5"
      stroke={COLORS.sectionTitle}
      strokeWidth="1"
    />
  </svg>
);

// Settings icon (gear) for header
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ stroke: COLORS.header }}
  >
    <circle cx="8" cy="8" r="7" strokeWidth="1" fill="none" />
    <circle cx="8" cy="5" r="0.5" fill={COLORS.header} />
    <circle cx="8" cy="11" r="0.5" fill={COLORS.header} />
    <circle cx="5" cy="8" r="0.5" fill={COLORS.header} />
    <circle cx="11" cy="8" r="0.5" fill={COLORS.header} />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-black"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Main card container with max width and padding */}
      <div className="mx-auto max-w-xs px-5 py-8">
        {/* Header section with title and settings icon */}
        <div className="flex items-center justify-between py-4">
          <h1
            className="text-base font-semibold"
            style={{ color: COLORS.header }}
          >
            UI magician Agent
          </h1>
          <div className="flex items-center justify-center">
            <SettingsIcon />
          </div>
        </div>

        {/* Collapsible section - From entire frame to a singl... */}
        <div className="flex items-center gap-2 py-3">
          <DropdownArrow />
          <span
            className="text-sm font-semibold"
            style={{ color: COLORS.collapsibleText }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="flex items-center gap-2 py-4">
          <UpArrow />
          <h2
            className="text-base font-semibold"
            style={{ color: COLORS.sectionTitle }}
          >
            Add New Design
          </h2>
        </div>

        {/* Form section */}
        <div className="space-y-6 py-4">
          {/* Personal Access Token field */}
          <div>
            <div className="flex items-center gap-2 pb-2">
              <label
                className="text-sm font-semibold"
                style={{ color: COLORS.label }}
              >
                Personal Access Token
              </label>
              <InfoIcon color={COLORS.label} />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border px-4 py-3 text-sm font-semibold"
              style={{
                backgroundColor: COLORS.inputBg,
                borderColor: COLORS.inputBorderPrimary,
                color: COLORS.inputText,
              }}
              readOnly
            />
          </div>

          {/* Design URL field */}
          <div>
            <div className="flex items-center gap-2 pb-2">
              <label
                className="text-sm font-semibold"
                style={{ color: COLORS.labelAlt }}
              >
                Design URL
              </label>
              <InfoIcon color={COLORS.labelAlt} />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border px-4 py-3 text-sm font-semibold"
              style={{
                backgroundColor: COLORS.inputBg,
                borderColor: COLORS.inputBorderSecondary,
                color: COLORS.inputTextAlt,
              }}
              readOnly
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 py-4">
          <button
            className="flex-1 rounded px-4 py-3 text-sm font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-4 py-3 text-sm font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div className="py-6">
          <h3
            className="text-base font-semibold"
            style={{ color: COLORS.sectionHeaderText }}
          >
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
