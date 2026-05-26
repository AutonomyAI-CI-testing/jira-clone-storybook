// SVG icon paths for settings and collapse indicators
const SETTINGS_ICON_PATH_OUTER =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z";
const SETTINGS_ICON_PATH_INNER = "M15 12a3 3 0 11-6 0 3 3 0 016 0z";
const CHEVRON_UP_PATH = "M5 15l7-7 7 7";
const INFO_ICON_PATH =
  "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

// Color palette for the dark-themed card
const COLORS = {
  header: "#b5b5b5",
  section1: "#8b9291",
  section2: "#b2b2b1",
  label: "#a4a4a3",
  labelSmall: "#a3a3a2",
  inputText: "#737470",
  inputTextSmall: "#71726e",
  inputBorder: "#a5adad",
  inputBorderSmall: "#929291",
  inputBg: "#272822",
  buttonBg: "#843a17",
  buttonBgHover: "#7a3414",
  buttonBgActive: "#702f10",
  buttonText: "#8c8078",
  recentBreakdowns: "#b0b0b0",
};

// Helper component to render info icon
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={INFO_ICON_PATH}
    />
  </svg>
);

// Helper component to render chevron icon
const ChevronIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={CHEVRON_UP_PATH}
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 bg-black p-6">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <svg
          className="h-7 w-7 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={SETTINGS_ICON_PATH_OUTER}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={SETTINGS_ICON_PATH_INNER}
          />
        </svg>
      </div>

      {/* Collapsible sections */}
      <div className="mb-12 space-y-6">
        {/* First collapsible section */}
        <div className="flex items-center gap-3">
          <ChevronIcon />
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.section1 }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Second collapsible section */}
        <div className="flex items-center gap-3 py-2">
          <ChevronIcon />
          <span
            className="text-sm font-semibold"
            style={{ color: COLORS.section2 }}
          >
            Add New Design
          </span>
        </div>
      </div>

      {/* Form section */}
      <div className="space-y-6">
        {/* Personal Access Token */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label
              className="text-xs font-semibold"
              style={{ color: COLORS.label }}
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border px-3 py-2 text-[0.65rem] font-semibold placeholder-opacity-100"
            style={{
              borderColor: COLORS.inputBorder,
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputText,
            }}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label
              className="text-xs font-semibold"
              style={{ color: COLORS.labelSmall }}
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border-2 px-3 py-2 text-[0.65rem] font-semibold placeholder-opacity-100"
            style={{
              borderColor: COLORS.inputBorderSmall,
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputTextSmall,
            }}
            readOnly
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pt-6">
          <button
            className="flex-1 rounded px-4 py-3 text-xs font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBg;
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgActive;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-4 py-3 text-xs font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBg;
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgActive;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-12">
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.recentBreakdowns }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center text-xs text-gray-400">
        © AutonomyAI
      </div>
    </div>
  );
};
