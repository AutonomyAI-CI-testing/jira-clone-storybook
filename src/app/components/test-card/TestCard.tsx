// Icon components for cleaner JSX
const SettingsIcon = ({ color }: { color: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M9 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M15 9a6 6 0 0 0-.09-1l1.62-.93a.5.5 0 0 0 .18-.68l-1.5-2.6a.5.5 0 0 0-.61-.22l-1.9.77a6 6 0 0 0-1.73-1l-.38-2a.5.5 0 0 0-.49-.42h-3a.5.5 0 0 0-.49.42l-.38 2a6 6 0 0 0-1.73 1l-1.9-.77a.5.5 0 0 0-.61.22l-1.5 2.6a.5.5 0 0 0 .18.68l1.62.93A6 6 0 0 0 3 9a6 6 0 0 0 .09 1l-1.62.93a.5.5 0 0 0-.18.68l1.5 2.6a.5.5 0 0 0 .61.22l1.9-.77a6 6 0 0 0 1.73 1l.38 2a.5.5 0 0 0 .49.42h3a.5.5 0 0 0 .49-.42l.38-2a6 6 0 0 0 1.73-1l1.9.77a.5.5 0 0 0 .61-.22l1.5-2.6a.5.5 0 0 0-.18-.68l-1.62-.93A6 6 0 0 0 15 9z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Chevron up"
  >
    <path
      d="M1 5L5 1L9 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1.5" />
    <path
      d="M7 10V7M7 4h.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Color constants for consistent theming
const COLORS = {
  cardBackground: "#1e1e1a",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputBackground: "#272822",
  inputBorder: "#a5adad",
  inputBorderAlt: "#929291",
  inputPlaceholder: "#737470",
  inputPlaceholderAlt: "#71726e",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[280px] rounded-md bg-[#1e1e1a] p-5 font-sans text-white">
      {/* Header with agent name and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon color={COLORS.headerText} />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon color={COLORS.subtitleText} />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: COLORS.subtitleText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible design section header */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon color={COLORS.sectionText} />
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.sectionText }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <label
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.labelText }}
          >
            Personal Access Token
          </label>
          <InfoIcon color={COLORS.labelText} />
        </div>
        <div
          className="rounded border px-3 py-3.5"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            borderWidth: "1px",
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.inputPlaceholder }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field - emphasized with thicker border */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.labelTextAlt }}
          >
            Design URL
          </label>
          <InfoIcon color={COLORS.labelTextAlt} />
        </div>
        <div
          className="rounded px-3 py-3.5"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorderAlt,
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span
            className="text-[10.5px] font-semibold leading-[12.71px]"
            style={{ color: COLORS.inputPlaceholderAlt }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-16 flex gap-4">
        <button
          className="flex-1 rounded px-4 py-2 text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent activity section */}
      <div>
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.footerText }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with branding */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] font-semibold">© AutonomyAI</span>
      </div>
    </div>
  );
};
