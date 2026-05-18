/**
 * ChevronUpIcon - Reusable chevron icon for collapsible sections
 * Points upward to indicate expanded/collapsed state
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 7L5 3L9 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * InfoIcon - Information tooltip icon for form labels
 * Used to indicate additional help/documentation is available
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 5v3.5M8 11.5h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * SunIcon - Theme toggle icon for light/dark mode
 */
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 2V5.5M12 18.5V22M22 12H18.5M5.5 12H2M19.071 4.929L16.536 7.464M7.464 16.536L4.929 19.071M19.071 19.071L16.536 16.536M7.464 7.464L4.929 4.929"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * FormField - Reusable form field with label and info icon
 * Extracts the repeated pattern of label + info icon for consistency
 */
const FormField = ({
  id,
  label,
  placeholder,
  inputClassName,
}: {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

/**
 * TestCard - UI for adding Figma design configurations
 * 
 * This component provides a form interface for users to input:
 * - Personal access token for Figma API authentication
 * - Design URL to specify which Figma file to process
 * 
 * The dark theme (#1a1a17 background) matches the overall application aesthetic.
 * Collapsible sections help manage screen real estate for complex workflows.
 */
export const TestCard = (): JSX.Element => {
  // Button styling - consistent across both action buttons
  const buttonClassName =
    "h-[52px] w-[110px] rounded-lg bg-[#843a17] px-6 py-3.5 text-[14px] font-bold text-[#8c8078]";

  return (
    <div className="min-h-screen w-full bg-[#1a1a17] px-8 font-sans">
      {/* Header with agent title and theme toggle */}
      <div className="mb-6 flex items-center justify-between pt-12">
        <h2 className="text-[15px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SunIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed section - shows truncated text to indicate hidden content */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[12.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header for new design workflow */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h3 className="text-[15px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token input - required for Figma API access */}
      <div className="mb-7">
        <FormField
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputClassName="w-full border border-[#a5adad] bg-[#272822] px-3.5 py-2.5 text-[12px] font-semibold text-[#b5b5b5] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL input - specifies which Figma file to process */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-1.5">
          <label
            htmlFor="url"
            className="text-[13px] font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          id="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3.5 py-2.5 text-[12px] font-semibold text-[#b5b5b5] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Action buttons - trigger design processing workflow */}
      <div className="mb-14 flex gap-6">
        <button className={buttonClassName}>Awesome</button>
        <button className={buttonClassName}>Prepare</button>
      </div>

      {/* Recent Breakdowns section - shows history of processed designs */}
      <h3 className="mt-6 text-[15px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with branding */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[12px] text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
