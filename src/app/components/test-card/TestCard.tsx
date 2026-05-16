import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FormFieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
  labelClassName: string;
}

/**
 * Reusable form field component with label and info icon.
 * Encapsulates the common pattern of label + info icon + input field.
 */
const FormField = ({
  label,
  placeholder,
  inputClassName,
  labelClassName,
}: FormFieldProps): JSX.Element => {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <label className={labelClassName}>{label}</label>
        <FiInfo className="text-[#a5adad]" size={26} />
      </div>
      <input type="text" placeholder={placeholder} className={inputClassName} />
    </div>
  );
};

interface SectionHeaderProps {
  title: string;
  className?: string;
  iconSize?: number;
  marginBottom?: string;
}

/**
 * Reusable section header component with chevron icon.
 * Used for collapsible or hierarchical section titles.
 */
const SectionHeader = ({
  title,
  className = "text-[#b2b2b1]",
  iconSize = 22,
  marginBottom = "mb-8",
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className={`${marginBottom} flex items-center gap-2`}>
      <FiChevronUp className={className} size={iconSize} />
      <h2 className={`text-[32px] font-semibold leading-[38px] ${className}`}>
        {title}
      </h2>
    </div>
  );
};

/**
 * TestCard component displays a form for adding new design configurations.
 * Includes fields for Personal Access Token and Design URL, along with action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[420px] bg-[#1C1D17] p-10 text-[#b5b5b5]">
      {/* Header with settings icon */}
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-[36px] font-semibold leading-[44px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings className="text-[#b5b5b5]" size={32} />
      </div>

      {/* Subtitle with chevron - indicates expandable/collapsible content */}
      <div className="mb-16 flex items-center gap-2 py-2">
        <FiChevronUp className="text-[#8b9291]" size={22} />
        <p className="text-[18px] font-semibold leading-[22px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <SectionHeader title="Add New Design" />

      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelClassName="text-[18px] font-semibold leading-[22px] text-[#a4a4a3]"
        inputClassName="h-[75px] w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-5 text-[17px] font-semibold leading-[20px] text-[#b5b5b5] placeholder:text-[#737470]"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        labelClassName="text-[18px] font-semibold leading-[22px] text-[#a3a3a2]"
        inputClassName="h-[75px] w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-5 text-[16px] font-semibold leading-[19px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />

      {/* Action buttons - intentionally styled with same appearance */}
      <div className="mb-16 flex gap-8">
        <button className="h-[70px] w-[150px] rounded bg-[#843A17] text-[18px] font-semibold leading-[22px] text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[70px] w-[150px] rounded bg-[#843A17] text-[18px] font-semibold leading-[22px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-6">
        <h3 className="text-[32px] font-semibold leading-[38px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <p>© AutonomyAI</p>
      </div>
    </div>
  );
};
