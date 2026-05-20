/**
 * Chevron up icon used for collapsible sections
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 5L5 1L9 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon to indicate help/tooltip functionality
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="6"
      cy="6"
      r="5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M6 4V4.5M6 7V9"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Settings icon for configuration actions
 */
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M11.5 7L12.5 8L13 7L12.5 6L11.5 7ZM2.5 7L1.5 6L1 7L1.5 8L2.5 7ZM7 2.5L8 1.5L7 1L6 1.5L7 2.5ZM7 11.5L6 12.5L7 13L8 12.5L7 11.5Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

/**
 * Reusable field label with info icon
 */
const FieldLabel = ({
  label,
  className = "text-[#a3a3a2]",
}: {
  label: string;
  className?: string;
}) => (
  <div className="mb-2 flex items-center gap-1">
    <span className={`font-['Inter'] text-[13px] font-semibold ${className}`}>
      {label}
    </span>
    <InfoIcon className={className} />
  </div>
);

/**
 * Reusable input field container with placeholder text
 */
const InputField = ({
  placeholder,
  borderColor,
  textColor,
  fontSize = "text-[10.5px]",
}: {
  placeholder: string;
  borderColor: string;
  textColor: string;
  fontSize?: string;
}) => (
  <div className={`rounded border ${borderColor} bg-[#272822] px-4 py-5`}>
    <span className={`font-['Inter'] ${fontSize} font-semibold ${textColor}`}>
      {placeholder}
    </span>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-md rounded bg-[#2b2b2b] px-8 pb-8 pt-8">
      {/* Header: Agent title with settings access */}
      <div className="mb-2 flex items-center justify-between">
        <span className="font-['Inter'] text-[24px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle - truncated description */}
      <div className="mb-16 flex items-center gap-1">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="font-['Inter'] text-[14.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for adding new designs */}
      <div className="mb-5 mt-12 flex items-center gap-1">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <span className="font-['Inter'] text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Figma API token input */}
      <div className="mb-10 mt-8">
        <FieldLabel label="Personal Access Token" />
        <InputField
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor="border-[#a5adad]"
          textColor="text-[#737470]"
        />
      </div>

      {/* Figma file URL input */}
      <div className="mb-12">
        <FieldLabel label="Design URL" className="text-[#a4a4a3]" />
        <InputField
          placeholder="https://www.figma.com/file/:"
          borderColor="border-[#929291]"
          textColor="text-[#71726e]"
          fontSize="text-[11.5px]"
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-20 flex gap-6">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-5 font-['Inter'] text-[15.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-5 font-['Inter'] text-[15.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent breakdowns */}
      <div className="mt-8">
        <span className="font-['Inter'] text-[16px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="font-['Inter'] text-[12px] text-[#b0b0b0]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
