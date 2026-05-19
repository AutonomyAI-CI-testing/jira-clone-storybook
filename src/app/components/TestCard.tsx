// Design system colors - intentionally hardcoded for this specific card design
const COLORS = {
  cardBackground: "#1e1e1a",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputBackground: "#272822",
  inputBorder: "#a5adad",
  inputText: "#737470",
  buttonBackground: "#843a17",
  buttonText: "#d4a586",
} as const;

// Extracted icon components to reduce duplication and improve maintainability
const VerticalDotsIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ color }}
    aria-hidden="true"
  >
    <path
      d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"
      fill="currentColor"
    />
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      fill="currentColor"
    />
    <path
      d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
      fill="currentColor"
    />
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Chevron icon rotated down for collapsible sections
const ChevronDownIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    style={{ color }}
    aria-hidden="true"
  >
    <path
      d="M6 3L9 6L6 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(-90 6 6)"
    />
  </svg>
);

// Info icon for field help tooltips
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ color }}
    aria-hidden="true"
  >
    <circle
      cx="7"
      cy="7"
      r="6"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7 10V7M7 4.5V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-[254px] p-5"
      style={{ backgroundColor: COLORS.cardBackground }}
    >
      {/* Header with agent name and menu */}
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h2>
        <VerticalDotsIcon color={COLORS.headerText} />
      </div>

      {/* Collapsible subtitle - shows truncated description */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronDownIcon color={COLORS.subtitleText} />
        <span className="text-[11.5px]" style={{ color: COLORS.subtitleText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-4 flex items-center gap-2">
        <ChevronDownIcon color={COLORS.sectionText} />
        <h3
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.sectionText }}
        >
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field - read-only display with placeholder */}
      <div className="mb-3">
        <div className="mb-1.5 flex items-center gap-1">
          <label className="text-[11.5px]" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <InfoIcon color={COLORS.labelText} />
        </div>
        <input
          type="text"
          readOnly
          value=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border px-3 py-2 text-[11.5px]"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL field - read-only display with Figma URL placeholder */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-1">
          <label
            className="text-[11.5px]"
            style={{ color: COLORS.labelTextAlt }}
          >
            Design URL
          </label>
          <InfoIcon color={COLORS.labelTextAlt} />
        </div>
        <input
          type="text"
          readOnly
          value=""
          placeholder="https://www.figma.com/file/:"
          className="w-full border px-3 py-2 text-[11.5px]"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Action buttons - primary CTAs for the card */}
      <div className="mb-8 flex gap-3">
        <button
          className="flex-1 px-4 py-2.5 text-[13px] font-medium"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 px-4 py-2.5 text-[13px] font-medium"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <h3
        className="text-[15px] font-medium"
        style={{ color: COLORS.headerText }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div
        className="border-gray-300 mt-6 border-t pt-3 text-center text-xs"
        style={{ color: COLORS.labelText }}
      >
        © AutonomyAI
      </div>
    </div>
  );
};
