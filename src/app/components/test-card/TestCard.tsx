// Typography constants for consistent styling
const FONT_FAMILY = "Inter, ui-sans-serif, system-ui, sans-serif";

// Color constants - maintaining exact color scheme from design
const COLORS = {
  background: "#1e1e1a",
  header: "#b5b5b5",
  description: "#8b9291",
  sectionTitle: "#b2b2b1",
  label: "#a4a4a3",
  inputBg: "#272822",
  inputText: "#737470",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  footer: "#b0b0b0",
} as const;

// Reusable info icon component - displayed next to input labels as tooltip indicator
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill={color}
    >
      i
    </text>
  </svg>
);

// Chevron icon for collapsible sections - indicates expandable/collapsible state
const ChevronIcon = ({
  width,
  height,
  viewBox,
  path,
  strokeColor,
  strokeWidth,
  className = "",
}: {
  width: number;
  height: number;
  viewBox: string;
  path: string;
  strokeColor: string;
  strokeWidth: string;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d={path} stroke={strokeColor} strokeWidth={strokeWidth} />
  </svg>
);

// Settings icon for component configuration access
const SettingsIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z"
      fill="#b5b5b5"
    />
    <path
      d="M7.7 1L6.3 1C6 1 5.8 1.2 5.7 1.5L5.4 2.5C5.2 2.6 5 2.7 4.8 2.8L3.9 2.4C3.6 2.3 3.3 2.4 3.1 2.6L2.1 3.6C1.9 3.8 1.8 4.1 1.9 4.4L2.3 5.3C2.2 5.5 2.1 5.7 2 5.9L1 6.2C0.7 6.3 0.5 6.5 0.5 6.8L0.5 8.2C0.5 8.5 0.7 8.7 1 8.8L2 9.1C2.1 9.3 2.2 9.5 2.3 9.7L1.9 10.6C1.8 10.9 1.9 11.2 2.1 11.4L3.1 12.4C3.3 12.6 3.6 12.7 3.9 12.6L4.8 12.2C5 12.3 5.2 12.4 5.4 12.5L5.7 13.5C5.8 13.8 6 14 6.3 14L7.7 14C8 14 8.2 13.8 8.3 13.5L8.6 12.5C8.8 12.4 9 12.3 9.2 12.2L10.1 12.6C10.4 12.7 10.7 12.6 10.9 12.4L11.9 11.4C12.1 11.2 12.2 10.9 12.1 10.6L11.7 9.7C11.8 9.5 11.9 9.3 12 9.1L13 8.8C13.3 8.7 13.5 8.5 13.5 8.2L13.5 6.8C13.5 6.5 13.3 6.3 13 6.2L12 5.9C11.9 5.7 11.8 5.5 11.7 5.3L12.1 4.4C12.2 4.1 12.1 3.8 11.9 3.6L10.9 2.6C10.7 2.4 10.4 2.3 10.1 2.4L9.2 2.8C9 2.7 8.8 2.6 8.6 2.5L8.3 1.5C8.2 1.2 8 1 7.7 1Z"
      stroke="#b5b5b5"
      strokeWidth="1"
    />
  </svg>
);

// Input field component - displays read-only form field with label and info icon
const InputField = ({
  id,
  label,
  placeholder,
  labelColor,
  borderStyle,
  textSize = "text-[11.5px]",
}: {
  id: string;
  label: string;
  placeholder: string;
  labelColor: string;
  borderStyle: string;
  textSize?: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[11.5px] font-semibold leading-[13.92px]"
        style={{
          color: labelColor,
          fontFamily: FONT_FAMILY,
        }}
      >
        {label}
      </label>
      <InfoIcon color={labelColor} />
    </div>
    <div
      className="flex h-[44px] items-center rounded px-4 py-3"
      style={{
        backgroundColor: COLORS.inputBg,
        border: borderStyle,
      }}
    >
      <span
        className={`${textSize} font-semibold leading-[13.92px]`}
        style={{
          color: COLORS.inputText,
          fontFamily: FONT_FAMILY,
        }}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

// Action button component - primary CTA button for user actions
const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="flex h-[46px] flex-1 items-center justify-center rounded px-6 py-3"
    style={{
      backgroundColor: COLORS.buttonBg,
    }}
  >
    <span
      className="text-[11.5px] font-semibold leading-[13.92px]"
      style={{
        color: COLORS.buttonText,
        fontFamily: FONT_FAMILY,
      }}
    >
      {label}
    </span>
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-[254px] flex-col gap-8 rounded-sm p-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with agent title and settings access */}
      <div className="flex items-center justify-between">
        <h2
          className="text-[15px] font-semibold leading-[18px]"
          style={{
            color: COLORS.header,
            fontFamily: FONT_FAMILY,
          }}
        >
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible description section with truncated text */}
      <div className="flex items-start gap-2 pt-2">
        <ChevronIcon
          width={8}
          height={5}
          viewBox="0 0 8 5"
          path="M1 4L4 1L7 4"
          strokeColor="#8b9291"
          strokeWidth="1.5"
          className="mt-1 flex-shrink-0"
        />
        <p
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            color: COLORS.description,
            fontFamily: FONT_FAMILY,
          }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Configuration form for adding new design */}
      <div className="flex flex-col gap-5 pt-2">
        <div className="flex items-center gap-2">
          <ChevronIcon
            width={12}
            height={8}
            viewBox="0 0 12 8"
            path="M2 6L6 2L10 6"
            strokeColor="#b2b2b1"
            strokeWidth="2"
            className="flex-shrink-0"
          />
          <h3
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{
              color: COLORS.sectionTitle,
              fontFamily: FONT_FAMILY,
            }}
          >
            Add New Design
          </h3>
        </div>

        <InputField
          id="access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="#a4a4a3"
          borderStyle="1px solid #a5adad"
        />

        <InputField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelColor="#a3a3a2"
          borderStyle="2px solid #929291"
          textSize="text-[10.5px]"
        />

        {/* Primary action buttons for workflow */}
        <div className="flex gap-6 pt-1">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* Section header for recent activity */}
      <h3
        className="pt-2 text-[13.5px] font-semibold leading-[16.34px]"
        style={{
          color: COLORS.footer,
          fontFamily: FONT_FAMILY,
        }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span
          className="text-[11.5px] font-semibold"
          style={{
            color: COLORS.header,
            fontFamily: FONT_FAMILY,
          }}
        >
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
