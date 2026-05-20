import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Form field with label and info icon tooltip.
 * Follows the design pattern of label + info icon above the input field.
 */
const FormField = ({
  label,
  labelColor,
  borderWidth,
  borderColor,
  value,
}: {
  label: string;
  labelColor: string;
  borderWidth: string;
  borderColor: string;
  value: string;
}) => (
  <div className="mt-6 flex flex-col gap-2">
    <div className="flex items-center gap-1.5">
      <label
        className={`text-[11.5px] font-bold leading-[13.92px] ${labelColor}`}
      >
        {label}
      </label>
      <AiOutlineInfoCircle className={`h-5 w-5 ${labelColor}`} />
    </div>
    <div
      className={`flex h-[44px] w-full items-center ${borderWidth} ${borderColor} overflow-hidden bg-[#272822] px-3`}
    >
      <span className="truncate text-[13px] font-semibold leading-[13.92px] text-[#9a9a97]">
        {value}
      </span>
    </div>
  </div>
);

/**
 * Section header with chevron icon.
 * Used for collapsible/expandable sections in the card.
 */
const SectionHeader = ({
  icon: Icon,
  iconColor,
  text,
  textColor,
  textSize,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  text: string;
  textColor: string;
  textSize: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <Icon className={`h-4 w-4 ${iconColor}`} />
    <span className={`${textSize} ${textColor}`}>{text}</span>
  </div>
);

/**
 * Primary action button.
 * Orange background (#b85524) creates visual hierarchy for CTAs.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="flex h-[48px] w-[85px] items-center justify-center bg-[#b85524] text-[13px] font-semibold leading-[13.92px] text-[#ffffff]">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex h-[508px] w-[254px] flex-col gap-0 overflow-hidden bg-black p-5 text-[#b5b5b5]">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-semibold leading-tight text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <IoSettingsOutline className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Subtitle describing the agent's capability */}
      <SectionHeader
        icon={IoChevronUp}
        iconColor="text-[#8b9291]"
        text="From entire frame to a singl..."
        textColor="text-[#8b9291]"
        textSize="font-bold text-[11.5px] leading-[13.92px]"
        className="mt-4"
      />

      {/* Vertical spacing to separate header from form */}
      <div className="h-[60px]" />

      {/* Form section header */}
      <SectionHeader
        icon={IoChevronUp}
        iconColor="text-[#b2b2b1]"
        text="Add New Design"
        textColor="text-[#b2b2b1]"
        textSize="font-semibold text-[13.5px] leading-[16.34px]"
        className="mt-10"
      />

      {/* Figma personal access token input */}
      <FormField
        label="Personal Access Token"
        labelColor="text-[#a4a4a3]"
        borderWidth="border"
        borderColor="border-[#a5adad]"
        value="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Figma design URL input - border-2 creates visual emphasis for active field */}
      <FormField
        label="Design URL"
        labelColor="text-[#a3a3a2]"
        borderWidth="border-2"
        borderColor="border-[#929291]"
        value="https://www.figma.com/file/:"
      />

      {/* Action buttons for form submission */}
      <div className="mt-6 flex gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent activity section */}
      <div className="mt-12">
        <h2 className="text-[13.5px] font-bold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[11.5px] text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
