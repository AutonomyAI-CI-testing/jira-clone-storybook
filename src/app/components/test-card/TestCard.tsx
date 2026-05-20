// Icon components extracted to reduce duplication and improve readability
const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <circle
      cx="10"
      cy="10"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M10 6v4l3 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    className={className}
  >
    <path
      d="M1 7l5-5 5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 4v1.5M7.5 9v1.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Reusable form field component with label and optional info icon.
 * Reduces duplication across input fields and enforces consistent styling.
 */
const FormField = ({
  label,
  placeholder,
  className,
  inputClassName,
}: {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName: string;
}) => (
  <div className={className}>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={inputClassName}
      disabled
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] bg-[#1a1a17] p-5 font-semibold">
      {/* Header with agent name and clock icon indicating timing/status */}
      <div className="mb-10 flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <ClockIcon className="text-[#b5b5b5]" />
      </div>

      {/* Truncated subtitle showing current task context */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header for adding new designs */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Form fields are disabled to show read-only state of this card */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-7"
        inputClassName="w-full border border-[#a5adad] bg-[#272822] px-4 py-4 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-8"
        inputClassName="w-full border-2 border-[#929291] bg-[#272822] px-4 py-4 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Action buttons are disabled to indicate unavailable state */}
      <div className="mb-12 flex gap-3">
        <button
          className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] leading-[13.92px] text-[#8c8078]"
          disabled
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] leading-[13.92px] text-[#8c8078]"
          disabled
        >
          Prepare
        </button>
      </div>

      {/* Section for displaying recent breakdown history */}
      <div>
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with branding */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[11.5px] text-[#b0b0b0]">© AutonomyAI</span>
      </div>
    </div>
  );
};
