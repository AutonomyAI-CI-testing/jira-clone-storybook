/**
 * InfoIcon - Reusable info circle icon component
 * Used to provide contextual help hints next to form labels
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 11V7M7.5 5V4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * ChevronUpIcon - Reusable chevron icon for collapsible sections
 * Supports different sizes for visual hierarchy
 */
const ChevronUpIcon = ({
  width,
  height,
  viewBox,
  path,
  strokeWidth,
  className,
}: {
  width: number;
  height: number;
  viewBox: string;
  path: string;
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
    <path d={path} stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

/**
 * SettingsIcon - Gear icon for settings/configuration
 */
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Settings"
  >
    <path
      d="M8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10ZM14 8.8V7.2L12.4 6.6C12.2 6.1 12 5.7 11.7 5.3L12.3 3.7L11.1 2.5L9.5 3.1C9.1 2.8 8.7 2.6 8.2 2.4L7.6 0.8H6L5.4 2.4C4.9 2.6 4.5 2.8 4.1 3.1L2.5 2.5L1.3 3.7L1.9 5.3C1.6 5.7 1.4 6.1 1.2 6.6L-0.4 7.2V8.8L1.2 9.4C1.4 9.9 1.6 10.3 1.9 10.7L1.3 12.3L2.5 13.5L4.1 12.9C4.5 13.2 4.9 13.4 5.4 13.6L6 15.2H7.6L8.2 13.6C8.7 13.4 9.1 13.2 9.5 12.9L11.1 13.5L12.3 12.3L11.7 10.7C12 10.3 12.2 9.9 12.4 9.4L14 8.8Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * FormField - Reusable form field with label and info icon
 * Reduces duplication for the Personal Access Token and Design URL inputs
 */
const FormField = ({
  label,
  placeholder,
  borderClass,
  textColor,
  labelColor,
}: {
  label: string;
  placeholder: string;
  borderClass: string;
  textColor: string;
  labelColor: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label className={`text-xs font-semibold ${labelColor}`}>{label}</label>
      <InfoIcon className={labelColor} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#272822] ${borderClass} rounded px-3 py-3 text-xs font-semibold ${textColor} placeholder:${textColor} outline-none`}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[420px] flex-col gap-8 rounded bg-[#1a1a17] p-5">
      {/* Header with agent title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible section showing current task description */}
      <div className="mb-4 flex items-center gap-2">
        <ChevronUpIcon
          width={10}
          height={6}
          viewBox="0 0 8 5"
          path="M1 4L4 1L7 4"
          strokeWidth="1.5"
          className="text-[#8b9291]"
        />
        <p className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section header for adding new design */}
      <div className="mt-12 flex items-center gap-2">
        <ChevronUpIcon
          width={14}
          height={10}
          viewBox="0 0 12 8"
          path="M2 6L6 2L10 6"
          strokeWidth="2"
          className="text-[#b2b2b1]"
        />
        <h2 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Form fields for Figma integration configuration */}
      <div className="mt-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClass="border border-[#a5adad]"
          textColor="text-[#737470]"
          labelColor="text-[#a4a4a3]"
        />
      </div>

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClass="border-2 border-[#929291]"
        textColor="text-[#71726e]"
        labelColor="text-[#a3a3a2]"
      />

      {/* Primary action buttons */}
      <div className="mt-2 flex gap-6">
        <button className="flex-1 rounded-md bg-[#843a17] px-4 py-3 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-md bg-[#843a17] px-4 py-3 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section header for recent activity */}
      <h2 className="mt-14 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with branding */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs font-semibold text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
