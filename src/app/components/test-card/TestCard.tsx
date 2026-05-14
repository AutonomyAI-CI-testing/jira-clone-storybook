/**
 * ChevronUpIcon - Expandable section indicator
 * Used to show collapsible/expandable states in the UI
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={className}
  >
    <path d="M6 3L10 7L2 7L6 3Z" fill="currentColor" />
  </svg>
);

/**
 * InfoIcon - Contextual help indicator
 * Provides additional information or tooltips for form fields
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className={className}
  >
    <circle
      cx="7"
      cy="7"
      r="6"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7 4V4.5M7 6.5V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * MoreOptionsIcon - Menu trigger for additional actions
 * Three vertical dots indicating a context menu
 */
const MoreOptionsIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill="currentColor"
    />
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/**
 * FormField - Reusable input field with label and info icon
 * Standardizes form field presentation across the card
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName: string;
}

const FormField = ({
  label,
  placeholder,
  className,
  inputClassName,
}: FormFieldProps) => (
  <div className={className}>
    <div className="mb-2 flex items-center gap-1.5">
      <label className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={inputClassName}
      readOnly
    />
  </div>
);

/**
 * TestCard - UI magician agent configuration card
 *
 * Displays a form for configuring Figma integration with:
 * - Personal access token input
 * - Design URL input
 * - Action buttons for workflow triggers
 * - Recent breakdowns section
 *
 * All fields are read-only as this is a visual design component
 */
export const TestCard = () => {
  return (
    <div className="w-[254px] bg-[#1a1a17] p-5 font-semibold">
      {/* Header with agent name and options menu */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <MoreOptionsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle showing truncated description */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section for adding new design */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Figma personal access token input field */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-3"
        inputClassName="h-[36px] w-full rounded border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Figma design URL input field */}
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-6"
        inputClassName="h-[37px] w-full rounded border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Action buttons for workflow triggers */}
      <div className="mb-10 flex gap-3">
        <button className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section header for breakdown history */}
      <h3 className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 mt-4 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
