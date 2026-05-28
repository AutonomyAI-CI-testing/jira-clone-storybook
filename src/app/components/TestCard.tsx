import { FiChevronUp } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import cx from "classix";

// Reusable button styling for action buttons
const BUTTON_CLASS = cx(
  "flex-1 px-6 py-2.5 bg-[#843a17] rounded",
  "text-[11.5px] font-semibold text-[#8c8078]",
  "hover:bg-[#933d1a] transition-colors",
  "cursor-pointer"
);

// Spacer component to maintain consistent vertical spacing
const Spacer = ({ className }: { className: string }): JSX.Element => (
  <div className={className} />
);

// Form field component for consistent input styling
interface FormFieldProps {
  label: string;
  placeholder: string;
  borderClass: string;
}

const FormField = ({
  label,
  placeholder,
  borderClass,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2 mb-2 text-[11.5px] font-semibold text-[#a4a4a3]">
      <label>{label}</label>
      <HiOutlineInformationCircle size={15} className="flex-shrink-0" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(
        "w-full px-3 py-2.5 bg-[#272822]",
        borderClass,
        "text-[10.5px] font-semibold text-[#737470]",
        "placeholder:text-[#737470] placeholder:font-semibold",
        "focus:outline-none"
      )}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-5 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <MdSettings size={18} className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-12 text-[11.5px] font-semibold text-[#8b9291]">
        <FiChevronUp size={14} className="flex-shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <Spacer className="mb-12" />

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6 text-[13.5px] font-semibold text-[#b2b2b1]">
        <FiChevronUp size={16} className="flex-shrink-0" />
        <span>Add New Design</span>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Personal Access Token Field */}
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClass="border-2 border-[#929291]"
        />

        {/* Design URL Field */}
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderClass="border border-[#a5adad]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Footer */}
      <div className="mt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
