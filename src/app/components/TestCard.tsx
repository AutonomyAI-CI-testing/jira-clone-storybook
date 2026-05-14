import cx from "classix";

// Color constants matching the design system
const COLORS = {
  background: "#1C1D17",
  inputBackground: "#272822",
  primaryText: "#b5b5b5",
  secondaryText: "#b2b2b1",
  mutedText: "#a4a4a3",
  placeholderText: "#737470",
  chevronGray: "#8B9291",
  borderGray: "#a5adad",
  borderActive: "#929291",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
} as const;

/**
 * Info icon displayed next to labels for additional help context.
 * @param color - The stroke and fill color for the icon
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="11"
      fontWeight="bold"
      fill={color}
    >
      i
    </text>
  </svg>
);

/**
 * TestCard component displaying a design token configuration form.
 * Features collapsible sections, token input fields, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "flex flex-col gap-6 rounded p-5 font-['Inter']",
        "w-[508px] min-h-[508px]"
      )}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.primaryText }}
        >
          UI magician Agent
        </h1>
        {/* Settings gear icon for configuration access */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 8c0-.3-.2-.6-.5-.7l-1.1-.3c-.1-.3-.2-.6-.3-.9l.6-1c.2-.3.1-.6-.1-.8l-.8-.8c-.2-.2-.5-.3-.8-.1l-1 .6c-.3-.1-.6-.2-.9-.3L8.2.6C8.1.3 7.8.1 7.5.1h-1.1c-.3 0-.6.2-.7.5l-.3 1.1c-.3.1-.6.2-.9.3l-1-.6c-.3-.2-.6-.1-.8.1l-.8.8c-.2.2-.3.5-.1.8l.6 1c-.1.3-.2.6-.3.9l-1.1.3c-.3.1-.5.4-.5.7v1.1c0 .3.2.6.5.7l1.1.3c.1.3.2.6.3.9l-.6 1c-.2.3-.1.6.1.8l.8.8c.2.2.5.3.8.1l1-.6c.3.1.6.2.9.3l.3 1.1c.1.3.4.5.7.5h1.1c.3 0 .6-.2.7-.5l.3-1.1c.3-.1.6-.2.9-.3l1 .6c.3.2.6.1.8-.1l.8-.8c.2-.2.3-.5.1-.8l-.6-1c.1-.3.2-.6.3-.9l1.1-.3c.3-.1.5-.4.5-.7V8z"
            stroke={COLORS.borderGray}
            strokeWidth="1.2"
            fill="none"
          />
          <circle
            cx="7"
            cy="8"
            r="2"
            stroke={COLORS.borderGray}
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Collapsible section showing truncated task description */}
      <div className="flex items-center gap-2 mt-3 ml-5">
        {/* Chevron Up Icon */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 0L0 5h8L4 0z" fill={COLORS.chevronGray} />
        </svg>
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: COLORS.chevronGray }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-20" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 ml-2">
        {/* Chevron Up Icon */}
        <svg
          width="16"
          height="10"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0L0 8h12L6 0z" fill={COLORS.secondaryText} />
        </svg>
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.secondaryText }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-2">
          <label
            htmlFor="token"
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.mutedText }}
          >
            Personal Access Token
          </label>
          {/* Info Icon */}
          <InfoIcon color={COLORS.mutedText} />
        </div>
        <div
          className="rounded px-5 py-5"
          style={{
            backgroundColor: COLORS.inputBackground,
            border: `1px solid ${COLORS.borderGray}`,
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.placeholderText }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL Field */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-2">
          <label
            htmlFor="url"
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.mutedText }}
          >
            Design URL
          </label>
          {/* Info Icon */}
          <InfoIcon color={COLORS.mutedText} />
        </div>
        <div
          className="rounded px-5 py-5"
          style={{
            backgroundColor: COLORS.inputBackground,
            border: `2px solid ${COLORS.borderActive}`,
          }}
        >
          <span
            className="text-[10.5px] font-semibold leading-[12.71px]"
            style={{ color: COLORS.placeholderText }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-8 mt-8">
        <button
          className="rounded px-12 py-4"
          style={{
            backgroundColor: COLORS.buttonBackground,
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.buttonText }}
          >
            Awesome
          </span>
        </button>
        <button
          className="rounded px-12 py-4"
          style={{
            backgroundColor: COLORS.buttonBackground,
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: COLORS.buttonText }}
          >
            Prepare
          </span>
        </button>
      </div>

      {/* Spacer */}
      <div className="h-40" />

      {/* Recent Breakdowns Section */}
      <h3
        className="text-[13.5px] font-semibold leading-[16.34px]"
        style={{ color: COLORS.footerText }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-xs" style={{ color: COLORS.primaryText }}>
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
