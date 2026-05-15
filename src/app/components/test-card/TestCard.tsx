/**
 * Icon component for the circular info tooltip
 * Used alongside input labels to provide contextual help
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 4V8M7.5 10.5H7.505"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Icon component for collapsible/expandable chevron
 * Used to indicate sections that can be toggled
 */
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Icon component for settings or configuration options
 * Represents a radial pattern commonly used for settings menus
 */
const SettingsIcon = () => (
  <svg
    width="22"
    height="26"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      fill="#B5B5B5"
    />
    <path
      d="M12.5 7C12.5 7.27614 12.2761 7.5 12 7.5C11.7239 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.7239 6.5 12 6.5C12.2761 6.5 12.5 6.72386 12.5 7Z"
      fill="#B5B5B5"
      stroke="#B5B5B5"
      strokeWidth="3"
    />
    <path
      d="M2.5 7C2.5 7.27614 2.27614 7.5 2 7.5C1.72386 7.5 1.5 7.27614 1.5 7C1.5 6.72386 1.72386 6.5 2 6.5C2.27614 6.5 2.5 6.72386 2.5 7Z"
      fill="#B5B5B5"
      stroke="#B5B5B5"
      strokeWidth="3"
    />
    <path
      d="M7.5 13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13C6.5 12.7239 6.72386 12.5 7 12.5C7.27614 12.5 7.5 12.7239 7.5 13Z"
      fill="#B5B5B5"
      stroke="#B5B5B5"
      strokeWidth="3"
    />
    <path
      d="M7.5 1C7.5 1.27614 7.27614 1.5 7 1.5C6.72386 1.5 6.5 1.27614 6.5 1C6.5 0.723858 6.72386 0.5 7 0.5C7.27614 0.5 7.5 0.723858 7.5 1Z"
      fill="#B5B5B5"
      stroke="#B5B5B5"
      strokeWidth="3"
    />
  </svg>
);

/**
 * Reusable input field component with consistent styling
 * Used for form inputs throughout the card
 */
const InputField = ({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) => (
  <div
    className={`h-[58px] w-full rounded bg-[#272822] px-5 py-4 ${className}`}
  >
    <span className="text-[15px] text-[#737470]">{placeholder}</span>
  </div>
);

/**
 * Reusable label component with optional info icon
 * Provides consistent styling for form field labels
 */
const FieldLabel = ({
  text,
  iconColor,
}: {
  text: string;
  iconColor: string;
}) => (
  <div className="mb-3 flex items-center gap-2">
    <span className="text-[16px] text-[#A3A3A2]">{text}</span>
    <InfoIcon color={iconColor} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[480px] rounded bg-[#1C1D17] p-10 font-semibold">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[22px] text-[#B5B5B5]">UI magician Agent</h2>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-20 flex items-center gap-2">
        <ChevronUpIcon color="#8B9291" />
        <span className="text-[17px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design collapsible section */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon color="#B2B2B1" />
        <span className="text-[19px] text-[#B2B2B1]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <FieldLabel text="Personal Access Token" iconColor="#A3A3A2" />
      <InputField
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-8 border border-[#A5ADAD]"
      />

      {/* Design URL field */}
      <FieldLabel text="Design URL" iconColor="#A4A4A3" />
      <InputField
        placeholder="https://www.figma.com/file/:"
        className="mb-10 border-2 border-[#929291]"
      />

      {/* Action buttons */}
      <div className="mb-12 flex gap-5">
        <button className="h-[58px] w-[150px] rounded bg-[#843A17] text-[16px] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[58px] w-[150px] rounded bg-[#843A17] text-[16px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className="text-[20px] text-[#B0B0B0]">Recent Breakdowns</div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  );
};
