/**
 * Info icon component - displays a circular info tooltip icon
 * Used to provide contextual help for form fields
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
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
 * Chevron icon component - displays an upward-pointing chevron
 * Used to indicate collapsible or expandable sections
 */
const ChevronIcon = ({
  className,
  strokeWidth = "1.5",
}: {
  className?: string;
  strokeWidth?: string;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Settings icon component - displays a multi-dot pattern representing settings/configuration
 * Used in the header for accessing configuration options
 */
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Settings"
  >
    <circle
      cx="12"
      cy="12"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="5"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="19"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="5"
      cy="12"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="19"
      cy="12"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="7.5"
      cy="7.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="16.5"
      cy="7.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="7.5"
      cy="16.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="16.5"
      cy="16.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/**
 * Renders a form field with a label and info icon
 * Extracted to avoid duplication between Personal Access Token and Design URL fields
 */
const FormField = ({
  label,
  labelColor,
}: {
  label: string;
  labelColor: string;
}) => (
  <div className="mb-1.5 flex items-center gap-1.5">
    <label className={`text-[15px] font-semibold ${labelColor}`}>{label}</label>
    <InfoIcon className={labelColor} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[420px] rounded bg-[#1C1D17] p-8 text-[#B5B5B5]">
      {/* Header: Title + Settings Icon */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-[20px] font-semibold">UI magician Agent</h2>
        <SettingsIcon className="text-[#B5B5B5]" />
      </div>

      {/* Collapsed subtitle section - shows truncated text */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon className="text-[#8B9291]" />
        <span className="text-[16px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable "Add New Design" section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon className="text-[#B2B2B1]" strokeWidth="2" />
        <span className="text-[18px] font-semibold text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          labelColor="text-[#A4A4A3]"
        />
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-4 text-[14px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-10">
        <FormField
          label="Design URL"
          labelColor="text-[#A3A3A2]"
        />
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 py-3.5 text-[14px] font-semibold text-[#71726E] placeholder-[#71726E] focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-5">
        <button className="flex-1 rounded-md bg-[#843A17] px-6 py-6 text-[16px] font-semibold text-[#8C8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-md bg-[#843A17] px-6 py-6 text-[16px] font-semibold text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p>© AutonomyAI</p>
      </div>
    </div>
  );
};
