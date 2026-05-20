// Icon components extracted for reusability and clarity
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="8" cy="2.5" r="1" fill="currentColor" />
    <circle cx="8" cy="13.5" r="1" fill="currentColor" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" />
    <circle cx="13.5" cy="8" r="1" fill="currentColor" />
    <circle cx="3.8" cy="3.8" r="0.8" fill="currentColor" />
    <circle cx="12.2" cy="12.2" r="0.8" fill="currentColor" />
    <circle cx="12.2" cy="3.8" r="0.8" fill="currentColor" />
    <circle cx="3.8" cy="12.2" r="0.8" fill="currentColor" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M9 7L6 4L3 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Information"
  >
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M6 4V6.5M6 8.5V8.51"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Form field component to reduce duplication
interface FormFieldProps {
  label: string;
  placeholder: string;
  showInfoIcon?: boolean;
  textSize?: string;
}

const FormField = ({
  label,
  placeholder,
  showInfoIcon = true,
  textSize = "text-[11.5px]",
}: FormFieldProps) => (
  <div className="mb-4 last:mb-6">
    <div className="mb-2 flex items-center gap-1.5">
      <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
        {label}
      </label>
      {showInfoIcon && <InfoIcon className="text-[#a3a3a2]" />}
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={`w-full rounded border border-[#a5adad] bg-transparent px-3 py-2.5 ${textSize} text-[#737470] placeholder:text-[#737470]`}
    />
  </div>
);

/**
 * TestCard component displays a dark-themed configuration card for the UI magician Agent.
 * Shows collapsible sections, input fields for token/URL, and action buttons.
 * All inputs are read-only to prevent user interaction in this display-only card.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded-lg bg-[#1a1a17] p-5 font-['Inter'] text-[#b2b2b1]">
      {/* Header with sparkle icon indicating AI/magic functionality */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold">UI magician Agent</h2>
        <SparkleIcon className="text-[#a3a3a2]" />
      </div>

      {/* Collapsible subtitle section - truncated text hints at expandable content */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section header for adding new design */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b5b5b5]" />
        <h3 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          Add New Design
        </h3>
      </div>

      {/* Form fields for Figma integration - read-only to show expected format */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        textSize="text-[10.5px]"
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        textSize="text-[11.5px]"
      />

      {/* Action buttons - muted appearance indicates disabled/demo state */}
      <div className="mb-6 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section header for breakdown history */}
      <h3 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        Recent Breakdowns
      </h3>

      {/* Footer with branding */}
      <div className="border-t border-gray-300 pt-[12px] text-center">
        <p className="text-sm">© AutonomyAI</p>
      </div>
    </div>
  );
};
