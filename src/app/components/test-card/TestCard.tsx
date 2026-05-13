/**
 * Sparkle icon - decorative header icon
 */
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="10" cy="2" r="1.2" fill="currentColor" />
    <circle cx="10" cy="18" r="1.2" fill="currentColor" />
    <circle cx="2" cy="10" r="1.2" fill="currentColor" />
    <circle cx="18" cy="10" r="1.2" fill="currentColor" />
    <circle cx="4.5" cy="4.5" r="0.9" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r="0.9" fill="currentColor" />
    <circle cx="4.5" cy="15.5" r="0.9" fill="currentColor" />
    <circle cx="15.5" cy="4.5" r="0.9" fill="currentColor" />
    <line
      x1="10"
      y1="3.5"
      x2="10"
      y2="8.5"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <line
      x1="10"
      y1="11.5"
      x2="10"
      y2="16.5"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <line
      x1="3.5"
      y1="10"
      x2="8.5"
      y2="10"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <line
      x1="11.5"
      y1="10"
      x2="16.5"
      y2="10"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <line
      x1="5.2"
      y1="5.2"
      x2="8.5"
      y2="8.5"
      stroke="currentColor"
      strokeWidth="0.6"
    />
    <line
      x1="11.5"
      y1="11.5"
      x2="14.8"
      y2="14.8"
      stroke="currentColor"
      strokeWidth="0.6"
    />
    <line
      x1="5.2"
      y1="14.8"
      x2="8.5"
      y2="11.5"
      stroke="currentColor"
      strokeWidth="0.6"
    />
    <line
      x1="11.5"
      y1="8.5"
      x2="14.8"
      y2="5.2"
      stroke="currentColor"
      strokeWidth="0.6"
    />
  </svg>
);

/**
 * Chevron Up icon - used for collapsible sections
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon - provides contextual help for form fields
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 4.5V8M7.5 10.5H7.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Form field with label and info icon
 */
const FormField = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className: string;
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[13px] font-semibold leading-[16px] text-[#A4A4A3]"
      >
        {label}
      </label>
      <InfoIcon className="text-[#A4A4A3]" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={className}
      aria-describedby={`${id}-description`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1C1D17] p-6">
      {/* Header with agent title and decorative icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold leading-[24px] text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <SparkleIcon className="text-[#B5B5B5]" />
      </div>

      {/* Collapsible subtitle - truncated text suggests expandable content */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8B9291]" />
        <span className="text-[12.5px] font-semibold leading-[15px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B2B2B1]"
          aria-hidden="true"
        >
          <path
            d="M1.5 6.5L6 2L10.5 6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[14.5px] font-semibold leading-[18px] text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Figma API token input - read-only to prevent editing */}
      <div className="mb-6">
        <FormField
          id="token-input"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[42px] w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 text-[12px] font-semibold leading-[14px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Figma file URL input - border-2 for emphasis */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="url-input"
            className="text-[13px] font-semibold leading-[16px] text-[#A3A3A2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#A3A3A2]" />
        </div>
        <input
          id="url-input"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="h-[42px] w-full rounded border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] font-semibold leading-[14px] text-[#71726E] placeholder:text-[#71726E]"
          aria-describedby="url-input-description"
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-12 flex gap-6">
        <button className="flex-1 rounded bg-[#843A17] px-6 py-3.5 text-[12.5px] font-semibold leading-[15px] text-[#8C8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843A17] px-6 py-3.5 text-[12.5px] font-semibold leading-[15px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* History section header */}
      <div>
        <h3 className="text-[14.5px] font-semibold leading-[18px] text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with branding */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <p className="text-gray-400 text-sm">© AutonomyAI</p>
      </div>
    </div>
  );
};
