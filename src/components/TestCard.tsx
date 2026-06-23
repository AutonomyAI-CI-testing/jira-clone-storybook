import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard - A self-contained smoke test component.
 * 
 * This component renders a specific UI panel from Figma design to verify 
 * Tailwind CSS integration and layout. It is intentionally static and 
 * uses hardcoded hex values to exactly match the target design profile.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-64 font-sans text-white">
      {/* Header section with brand name and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-[#b5b5b5]">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400" size={20} />
      </div>

      {/* Accordion placeholder: From entire frame... */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Accordion section: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      <FormInput
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormInput
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        containerClassName="mb-6"
      />

      {/* Action buttons section */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-[#9c4c1e] text-[#d4c4b8] font-semibold text-sm py-2 px-4 rounded-lg hover:bg-orange-800 transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#9c4c1e] text-[#d4c4b8] font-semibold text-sm py-2 px-4 rounded-lg hover:bg-orange-800 transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer section: Recent Breakdowns */}
      <div>
        <span className="font-semibold text-[#b2b2b1]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  containerClassName?: string;
}

/**
 * Internal helper for consistent input styling.
 * Matches Figma's dark theme with specific border and background colors.
 */
const FormInput = ({ id, label, placeholder, containerClassName = "mb-4" }: FormInputProps) => (
  <div className={containerClassName}>
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className="text-sm text-[#a4a4a3]">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-gray-400" size={14} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-[#1e1e1e] border border-[#4a4a4a] rounded px-3 py-2 w-full text-[#737470] text-sm focus:outline-none focus:border-orange-700"
    />
  </div>
);
