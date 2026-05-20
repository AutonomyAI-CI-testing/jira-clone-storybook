import { IoSettingsOutline } from "react-icons/io5";
import { FiInfo, FiChevronUp } from "react-icons/fi";

/**
 * FormField renders a labeled input field with an info icon.
 * Extracted to avoid duplication of the label + info + input pattern.
 */
interface FormFieldProps {
  label: string;
  value: string;
  borderStyle: string;
  textSize: string;
  labelColor: string;
  valueColor: string;
}

const FormField = ({
  label,
  value,
  borderStyle,
  textSize,
  labelColor,
  valueColor,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className={`text-[11.5px] font-semibold ${labelColor}`}>
        {label}
      </label>
      <FiInfo className={`h-3.5 w-3.5 ${labelColor}`} />
    </div>
    <div className={`rounded ${borderStyle} bg-[#272822] px-3 py-3`}>
      <span className={`${textSize} font-semibold ${valueColor}`}>{value}</span>
    </div>
  </div>
);

/**
 * SectionHeader renders a collapsible section header with chevron icon.
 * Used for both collapsed and expanded section states.
 */
interface SectionHeaderProps {
  title: string;
  iconColor: string;
  titleColor: string;
}

const SectionHeader = ({
  title,
  iconColor,
  titleColor,
}: SectionHeaderProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp className={`h-4 w-4 ${iconColor}`} />
    <h2 className={`text-[13.5px] font-semibold ${titleColor}`}>{title}</h2>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded bg-[#1C1D17] p-5 font-['Inter']">
      {/* Header with settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#d5d5d5]">
          UI magician Agent
        </h1>
        <IoSettingsOutline className="h-4 w-4 text-[#8b9291]" />
      </div>

      {/* Collapsed subtitle section - truncated text indicates there's more content */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacing between header and form sections */}
      <div className="mb-7" />

      {/* Add New Design section header */}
      <div className="mb-4">
        <SectionHeader
          title="Add New Design"
          iconColor="text-[#b2b2b1]"
          titleColor="text-[#b2b2b1]"
        />
      </div>

      {/* Personal Access Token field - thicker border emphasizes security */}
      <div className="mb-4">
        <FormField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          borderStyle="border-2 border-[#929291]"
          textSize="text-[11.5px]"
          labelColor="text-[#b4b4b3]"
          valueColor="text-[#737470]"
        />
      </div>

      {/* Design URL field - standard border for regular input */}
      <div className="mb-5">
        <FormField
          label="Design URL"
          value="https://www.figma.com/file/:"
          borderStyle="border border-[#A5ADAD]"
          textSize="text-[10.5px]"
          labelColor="text-[#b3b3b2]"
          valueColor="text-[#71726e]"
        />
      </div>

      {/* Action buttons - equal width for visual balance */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded bg-[#843A17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843A17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section - content to be populated */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] font-semibold text-[#b0b0b0]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
