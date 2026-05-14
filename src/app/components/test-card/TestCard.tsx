/**
 * GearIcon renders a settings/configuration gear icon.
 */
const GearIcon = (): JSX.Element => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M5.5 1H8.5L9 3L10.5 3.5L12 2.5L14 4.5L13 6L13.5 7.5L15.5 8V10L13.5 10.5L13 12L14 13.5L12 15.5L10.5 14.5L9 15L8.5 17H5.5L5 15L3.5 14.5L2 15.5L0 13.5L1 12L0.5 10.5L-1.5 10V8L0.5 7.5L1 6L0 4.5L2 2.5L3.5 3.5L5 3L5.5 1Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/**
 * ChevronIcon renders a collapsible/expandable chevron arrow.
 * @param color - Stroke color for the chevron
 * @param size - "small" or "large" variant
 */
const ChevronIcon = ({
  color,
  size = "small",
}: {
  color: string;
  size?: "small" | "large";
}): JSX.Element => {
  if (size === "large") {
    return (
      <svg
        width="24"
        height="16"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M1 7L6 2L11 7" stroke={color} strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M1 4L4 1L7 4" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
};

/**
 * InfoIcon renders an information tooltip icon.
 * @param color - Fill and stroke color for the icon
 */
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="7" stroke={color} strokeWidth="1" fill="none" />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="bold"
      textAnchor="middle"
      fill={color}
    >
      i
    </text>
  </svg>
);

/**
 * FormField renders a labeled input field with an optional info icon.
 * @param label - Field label text
 * @param value - Field display value (placeholder or actual value)
 * @param labelColor - Color for the label text
 * @param valueColor - Color for the value text
 * @param iconColor - Color for the info icon
 * @param borderStyle - CSS classes for the border style
 */
const FormField = ({
  label,
  value,
  labelColor,
  valueColor,
  iconColor,
  borderStyle,
}: {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  iconColor: string;
  borderStyle: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className={`text-[18px] font-semibold leading-[22px] ${labelColor}`}>
        {label}
      </label>
      <InfoIcon color={iconColor} />
    </div>
    <div className={`rounded ${borderStyle} bg-[#272822] px-6 py-4`}>
      <span className={`text-[18px] font-semibold leading-[22px] ${valueColor}`}>
        {value}
      </span>
    </div>
  </div>
);

/**
 * TestCard is a UI configuration card for the "UI magician Agent".
 * It displays form fields for Personal Access Token and Design URL,
 * along with action buttons and a footer.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1e1e1a] p-10 font-sans">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[24px] font-semibold leading-[29px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronIcon color="#8b9291" size="small" />
        <span className="text-[20px] font-semibold leading-[24px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable "Add New Design" section */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon color="#b2b2b1" size="large" />
        <span className="text-[20px] font-semibold leading-[24px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          valueColor="text-[#737470]"
          iconColor="#a4a4a3"
          borderStyle="border border-[#a5adad]"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-12">
        <FormField
          label="Design URL"
          value="https://www.figma.com/file/:"
          labelColor="text-[#a3a3a2]"
          valueColor="text-[#71726e]"
          iconColor="#a3a3a2"
          borderStyle="border-2 border-[#929291]"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-16 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-8 py-5 text-[20px] font-semibold leading-[24px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-8 py-5 text-[20px] font-semibold leading-[24px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent items section header */}
      <div>
        <h2 className="text-[20px] font-semibold leading-[24px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright notice */}
      <div className="mt-4 border-t border-gray-300 pt-3">
        <p className="text-center text-[14px] text-gray-400">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
