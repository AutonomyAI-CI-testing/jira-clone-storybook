// Theme colors intentionally hardcoded to match the design spec
const THEME_COLORS = {
  cardBackground: '#1a1a17',
  primaryText: '#b5b5b5',
  secondaryText: '#8b9291',
  labelText: '#a4a4a3',
  iconStroke: '#c0c0c0',
  inputBackground: '#272822',
  inputText: '#737470',
  buttonBackground: '#9d5425',
  buttonText: '#d4c5bd',
} as const;

const SettingsIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke={THEME_COLORS.iconStroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M16.25 10C16.25 10 14.375 14.375 10 14.375C5.625 14.375 3.75 10 3.75 10C3.75 10 5.625 5.625 10 5.625C14.375 5.625 16.25 10 16.25 10Z"
      stroke={THEME_COLORS.iconStroke}
      strokeWidth="0"
      fill="none"
    />
    <path
      d="M10 1.875L11.25 5.625M10 18.125L11.25 14.375M18.125 10L14.375 11.25M1.875 10L5.625 11.25M15.625 4.375L13.125 7.5M4.375 15.625L6.875 12.5M15.625 15.625L13.125 12.5M4.375 4.375L6.875 7.5"
      stroke={THEME_COLORS.iconStroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Collapse"
  >
    <path
      d="M1.5 6.5L6 2L10.5 6.5"
      stroke={THEME_COLORS.iconStroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Expand"
  >
    <path
      d="M2 2L7 7L12 2"
      stroke={THEME_COLORS.iconStroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color = THEME_COLORS.iconStroke }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.505"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex h-[508px] w-[254px] flex-col gap-4 p-5"
      style={{
        backgroundColor: THEME_COLORS.cardBackground,
        color: THEME_COLORS.primaryText,
      }}
    >
      {/* Header: Title + Settings Icon */}
      <div className="flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: THEME_COLORS.primaryText }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section: Accordion Row */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: THEME_COLORS.secondaryText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mt-8 flex items-center gap-2">
        <ChevronDownIcon />
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: '#b2b2b1' }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <label
            htmlFor="token"
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: THEME_COLORS.labelText }}
          >
            Personal Access Token
          </label>
          <InfoIcon color={THEME_COLORS.labelText} />
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[36px] w-[211px] rounded px-4 text-[11.5px] font-semibold leading-[13.92px] focus:outline-none"
          style={{
            backgroundColor: THEME_COLORS.inputBackground,
            borderWidth: '1.5px',
            borderStyle: 'solid',
            borderColor: THEME_COLORS.iconStroke,
            color: THEME_COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <label
            htmlFor="url"
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: '#a3a3a2' }}
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-[211px] rounded px-4 text-[10.5px] font-semibold leading-[12.71px] focus:outline-none"
          style={{
            backgroundColor: THEME_COLORS.inputBackground,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: THEME_COLORS.iconStroke,
            color: '#71726e',
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-2 flex gap-4">
        <button
          className="h-[37px] w-[85px] rounded text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: THEME_COLORS.buttonBackground,
            color: THEME_COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="h-[37px] w-[85px] rounded text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: THEME_COLORS.buttonBackground,
            color: THEME_COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-4">
        <h3
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: '#b0b0b0' }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
