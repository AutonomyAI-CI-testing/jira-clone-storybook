import cx from "classix";

// Color palette used throughout the component
const COLORS = {
  heading: "#b5b5b5",
  border: "#929291",
  icon: "#a3a3a2",
  secondaryText: "#8b9291",
  inputBg: "#262622",
  inputText: "#a3a3a2",
  inputBorder: "#929291",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
} as const;

// Reusable SVG icons
const SettingsIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94a6.003 6.003 0 0 0 1.669 3.22c.908.869 2.162 1.285 3.55 1.285 1.388 0 2.642-.416 3.55-1.285a6.003 6.003 0 0 0 1.67-3.22c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94a6.923 6.923 0 0 1-.34 3.66 4.993 4.993 0 0 1-2.468 2.469c-.547.340-1.197.588-1.944.735A6.598 6.598 0 0 1 20.5 9c1.657 0 3.212-.287 4.633-.835.75-.18 1.45-.42 2.083-.777a4.993 4.993 0 0 0 1.38-1.278 6.002 6.002 0 0 0 .894-1.466c.342-.822.569-1.707.666-2.615.023-.188.028-.376.028-.565a2.05 2.05 0 0 0-2.048-2.048h-1.093a2.05 2.05 0 0 0-2.047 1.972 4.992 4.992 0 0 1-1.112 2.13c-.598.576-1.404.922-2.267.922-.863 0-1.669-.346-2.267-.922a4.992 4.992 0 0 1-1.112-2.13 2.05 2.05 0 0 0-2.048-1.972H11.5a2.05 2.05 0 0 0-2.048 2.048c0 .19.005.378.028.565.097.908.324 1.793.666 2.615.22.528.57 1.01.894 1.466.368.423.81.779 1.38 1.278.633.357 1.333.597 2.083.777 1.42.548 2.976.835 4.633.835 1.657 0 3.212-.287 4.633-.835.747-.15 1.397-.395 1.944-.735a4.998 4.998 0 0 0 2.468-2.469c.3-.72.515-1.504.634-2.33z"
    />
  </svg>
);

const CaretUpIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 14l5-5 5 5z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-3 w-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-md bg-black p-5 text-font">
      {/* Header section with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-base font-semibold"
          style={{ color: COLORS.heading }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full border"
          style={{ borderColor: COLORS.border, color: COLORS.icon }}
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible section displaying truncated text */}
      <div className="mb-8 flex items-center gap-2">
        <button
          className="flex h-5 w-5 items-center justify-center"
          style={{ color: COLORS.icon }}
          aria-label="Expand or collapse section"
        >
          <CaretUpIcon />
        </button>
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.secondaryText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for design input area */}
      <div className="mb-8 flex items-center gap-2">
        <button
          className="flex h-5 w-5 items-center justify-center"
          style={{ color: COLORS.icon }}
          aria-label="Expand or collapse section"
        >
          <CaretUpIcon />
        </button>
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.heading }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-sm font-semibold"
            style={{ color: COLORS.icon }}
          >
            Personal Access Token
          </label>
          <button
            className="flex h-5 w-5 items-center justify-center rounded-full border"
            style={{ borderColor: COLORS.border, color: COLORS.secondaryText }}
            aria-label="Info about Personal Access Token"
          >
            <InfoIcon />
          </button>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            "w-full border p-3 text-sm font-semibold",
            "focus:outline-none"
          )}
          style={{
            backgroundColor: COLORS.inputBg,
            color: COLORS.inputText,
            borderColor: COLORS.inputBorder,
          }}
          readOnly
          aria-label="Personal Access Token input (read-only)"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-sm font-semibold"
            style={{ color: COLORS.icon }}
          >
            Design URL
          </label>
          <button
            className="flex h-5 w-5 items-center justify-center rounded-full border"
            style={{ borderColor: COLORS.border, color: COLORS.secondaryText }}
            aria-label="Info about Design URL"
          >
            <InfoIcon />
          </button>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            "w-full border p-3 text-sm font-semibold",
            "focus:outline-none"
          )}
          style={{
            backgroundColor: COLORS.inputBg,
            color: COLORS.inputText,
            borderColor: COLORS.inputBorder,
          }}
          readOnly
          aria-label="Design URL input (read-only)"
        />
      </div>

      {/* Action buttons for workflow */}
      <div className="mb-8 flex gap-4">
        <button
          className={cx(
            "flex-1 rounded px-4 py-2.5 text-center text-sm font-semibold"
          )}
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded px-4 py-2.5 text-center text-sm font-semibold"
          )}
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section displaying recent breakdowns */}
      <div className="mb-6">
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.heading }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright information */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-sm" style={{ color: COLORS.icon }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
