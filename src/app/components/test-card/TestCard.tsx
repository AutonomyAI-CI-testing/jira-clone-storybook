import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

// Reusable component for label with optional info icon
const LabelWithIcon = ({
  label,
  color,
  showIcon = false,
}: {
  label: string;
  color: string;
  showIcon?: boolean;
}) => (
  <div className="flex items-center gap-2">
    <span className={`${color} text-[11.5px] font-semibold`}>{label}</span>
    {showIcon && <IoInformationCircleOutline className={color} size={15} />}
  </div>
);

// Reusable component for text input fields
const InputField = ({
  label,
  labelColor,
  placeholder,
}: {
  label: string;
  labelColor: string;
  placeholder: string;
}) => (
  <div className="mt-3">
    <LabelWithIcon label={label} color={labelColor} showIcon />
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#4a4a4a] bg-[#333] px-3 py-2 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />
  </div>
);

// Reusable component for action buttons
const ActionButton = ({ label }: { label: string }) => (
  <button className="rounded-lg bg-[#b85c38] px-6 py-2 text-[11.5px] font-semibold text-white">
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="font-sans w-full bg-[#2a2a2a] p-4">
      {/* Header: Agent name with settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle: Description with chevron indicator */}
      <div className="mt-3 flex items-center gap-2">
        <IoChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacing between sections */}
      <div className="mt-8" />

      {/* Add New Design action row */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Input form fields section */}
      <div className="mt-4">
        <InputField
          label="Personal Access Token"
          labelColor="text-[#a4a4a3]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          label="Design URL"
          labelColor="text-[#a3a3a2]"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section heading */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
