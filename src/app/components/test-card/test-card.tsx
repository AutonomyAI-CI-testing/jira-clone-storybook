// Color palette for dark theme UI
const COLORS = {
  cardBg: "#2b2b2b",
  headerText: "#b5b5b5",
  sectionText1: "#8b9291",
  sectionText2: "#b2b2b1",
  labelText: "#a4a4a3",
  labelText2: "#a3a3a2",
  inputBg: "#272822",
  inputText: "#737470",
  inputText2: "#71726e",
  inputBorder: "#929291",
  inputBorder2: "#a5adad",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
  copyrightText: "#b5b5b5",
} as const;

const TYPOGRAPHY = {
  headerSize: "22px",
  sectionSize: "16px",
  sectionSize2: "19px",
  labelSize: "13px",
  buttonSize: "15px",
  copyrightSize: "12px",
} as const;

const BUTTON_STYLE = {
  padding: "10px 16px",
  borderRadius: "3px",
  fontSize: TYPOGRAPHY.buttonSize,
} as const;

export const TestCard = (): JSX.Element => {
  // Icon components used throughout the form
  const ChevronUp = (): JSX.Element => (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      className="inline-block"
      aria-hidden="true"
    >
      <path d="M0.5 5L4 0.5L7.5 5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );

  const InfoIcon = (): JSX.Element => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="inline-block"
      aria-hidden="true"
    >
      <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" strokeWidth="1" />
      <text
        x="7.5"
        y="10"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        className="font-bold"
      >
        i
      </text>
    </svg>
  );

  const SettingsIcon = (): JSX.Element => (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className="inline-block"
      aria-hidden="true"
    >
      <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M7 1.5V0M7 16V14.5M12.5 8H14M0 8H1.5M10.5 4.5L11.5 3.5M3.5 11.5L2.5 12.5M10.5 11.5L11.5 12.5M3.5 4.5L2.5 3.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div
      className="w-96 rounded p-6"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Header with title and settings button */}
      <div className="mb-14 flex items-center justify-between">
        <h1
          className="font-bold"
          style={{ color: COLORS.headerText, fontSize: TYPOGRAPHY.headerSize }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center"
          style={{ color: COLORS.headerText }}
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible sections - showing task categories */}
      <div className="mb-12 flex items-center gap-3">
        <button
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center"
          style={{ color: COLORS.sectionText1 }}
          aria-label="Toggle section"
        >
          <ChevronUp />
        </button>
        <span
          className="font-bold"
          style={{
            color: COLORS.sectionText1,
            fontSize: TYPOGRAPHY.sectionSize,
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-12 flex items-center gap-3">
        <button
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center"
          style={{ color: COLORS.sectionText2 }}
          aria-label="Toggle section"
        >
          <ChevronUp />
        </button>
        <span
          className="font-bold"
          style={{
            color: COLORS.sectionText2,
            fontSize: TYPOGRAPHY.sectionSize2,
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Form with input fields */}
      <div className="space-y-10">
        {/* Personal Access Token field */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label
              className="font-semibold"
              style={{
                color: COLORS.labelText,
                fontSize: TYPOGRAPHY.labelSize,
              }}
              htmlFor="token-input"
            >
              Personal Access Token
            </label>
            <button
              className="flex h-4 w-4 items-center justify-center"
              style={{ color: COLORS.labelText }}
              aria-label="Information about Personal Access Token"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            id="token-input"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border-2 px-4 py-3"
            style={{
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputText,
              borderColor: COLORS.inputBorder,
              fontSize: TYPOGRAPHY.labelSize,
              fontWeight: "600",
              borderRadius: "2px",
            }}
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label
              className="font-semibold"
              style={{
                color: COLORS.labelText2,
                fontSize: TYPOGRAPHY.labelSize,
              }}
              htmlFor="url-input"
            >
              Design URL
            </label>
            <button
              className="flex h-4 w-4 items-center justify-center"
              style={{ color: COLORS.labelText2 }}
              aria-label="Information about Design URL"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border-2 px-4 py-3"
            style={{
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputText2,
              borderColor: COLORS.inputBorder2,
              fontSize: TYPOGRAPHY.labelSize,
              fontWeight: "600",
              borderRadius: "2px",
            }}
            readOnly
          />
        </div>
      </div>

      {/* Action buttons at the bottom */}
      <div className="mt-14 flex gap-4">
        <button
          className="flex-1 text-center font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            fontSize: BUTTON_STYLE.fontSize,
            borderRadius: BUTTON_STYLE.borderRadius,
            padding: BUTTON_STYLE.padding,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 text-center font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            fontSize: BUTTON_STYLE.fontSize,
            borderRadius: BUTTON_STYLE.borderRadius,
            padding: BUTTON_STYLE.padding,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section footer */}
      <div className="mt-14">
        <span
          className="font-bold"
          style={{ color: COLORS.footerText, fontSize: TYPOGRAPHY.sectionSize }}
        >
          Recent Breakdowns
        </span>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span
          className="font-semibold"
          style={{
            color: COLORS.copyrightText,
            fontSize: TYPOGRAPHY.copyrightSize,
          }}
        >
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
