import {
  IoSettingsSharp,
  IoInformationCircleOutline,
  IoChevronUp,
} from "react-icons/io5";

/**
 * Collapsible section header with chevron icon and text label
 */
interface SectionHeaderProps {
  text: string;
  textColor: string;
  textSize: string;
  lineHeight: string;
  marginBottom: string;
}

const SectionHeader = ({
  text,
  textColor,
  textSize,
  lineHeight,
  marginBottom,
}: SectionHeaderProps): JSX.Element => (
  <div className={`${marginBottom} flex items-center gap-3`}>
    <IoChevronUp className={`h-6 w-6 ${textColor}`} />
    <span className={`${textSize} ${lineHeight} ${textColor}`}>{text}</span>
  </div>
);

/**
 * Labeled input field with info icon and display-only content
 */
interface InputFieldProps {
  label: string;
  labelColor: string;
  value: string;
  valueColor: string;
  borderStyle: string;
  marginBottom: string;
}

const InputField = ({
  label,
  labelColor,
  value,
  valueColor,
  borderStyle,
  marginBottom,
}: InputFieldProps): JSX.Element => (
  <div className={marginBottom}>
    <div className="mb-3 flex items-center gap-2">
      <span className={`text-[16px] leading-[19px] ${labelColor}`}>
        {label}
      </span>
      <IoInformationCircleOutline className={`h-6 w-6 ${labelColor}`} />
    </div>
    <div
      className={`flex h-[60px] w-full items-center rounded ${borderStyle} bg-[#272822] px-5`}
    >
      <span className={`text-[16px] leading-[19px] ${valueColor}`}>
        {value}
      </span>
    </div>
  </div>
);

/**
 * Action button with consistent styling across the card
 */
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button className="flex h-[60px] w-[150px] items-center justify-center rounded bg-[#843A17] text-[16px] leading-[19px] text-[#8C8078]">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] bg-[#1C1D17] px-10 py-8 font-['Inter'] font-semibold">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[24px] leading-[29px] text-[#B5B5B5]">
          UI magician Agent
        </span>
        <IoSettingsSharp className="h-7 w-7 text-[#B5B5B5]" />
      </div>

      {/* Expandable subtitle section */}
      <SectionHeader
        text="From entire frame to a singl..."
        textColor="text-[#8B9291]"
        textSize="text-[16px]"
        lineHeight="leading-[19px]"
        marginBottom="mb-10"
      />

      {/* Add New Design section header */}
      <SectionHeader
        text="Add New Design"
        textColor="text-[#B2B2B1]"
        textSize="text-[18px]"
        lineHeight="leading-[22px]"
        marginBottom="mb-6"
      />

      {/* Figma Personal Access Token input */}
      <InputField
        label="Personal Access Token"
        labelColor="text-[#A4A4A3]"
        value="figd_xxxxxxxxxxxxxxxxxx"
        valueColor="text-[#737470]"
        borderStyle="border border-[#A5ADAD]"
        marginBottom="mb-6"
      />

      {/* Figma Design URL input */}
      <InputField
        label="Design URL"
        labelColor="text-[#A3A3A2]"
        value="https://www.figma.com/file/:"
        valueColor="text-[#71726E]"
        borderStyle="border-2 border-[#929291]"
        marginBottom="mb-8"
      />

      {/* Primary action buttons */}
      <div className="mb-12 flex gap-5">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <span className="text-[18px] leading-[22px] text-[#B0B0B0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <span className="text-[14px] text-[#B5B5B5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
