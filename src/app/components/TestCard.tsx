
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component visually replicates a dark-themed UI panel
 * inspired by the "UI magician Agent" Figma design.
 * 
 * It is a static display component used for design review and testing.
 * Following project conventions, it uses Tailwind CSS and react-icons.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#252525] rounded-xl p-5 w-full max-w-xs text-white space-y-4">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">UI magician Agent</span>
        <FiSettings className="text-gray-400" size={20} />
      </div>

      {/* Collapsible Hint Row: Indicates context/status */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={20} />
        <span className="text-[#c2753f]">From entire frame to a singl...</span>
      </div>

      {/* Section Header: Main action area */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-white" size={20} />
        <span className="font-bold text-lg text-white">Add New Design</span>
      </div>

      {/* Form Area: Configuration inputs */}
      <div className="space-y-3 mt-4">
        <FormField 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <FormField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Action Buttons: Burnt orange primary actions */}
      <div className="flex gap-3 mt-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer: List of previous activity */}
      <div className="mt-6">
        <p className="font-bold text-lg text-white">Recent Breakdowns</p>
      </div>
    </div>
  );
};

/**
 * Reusable Form Field component for consistent input styling.
 * Uses hardcoded brand colors for the dark theme.
 */
const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-1 mb-1">
      <p className="text-white text-sm">{label}</p>
      <FiInfo className="text-gray-400" size={16} />
    </div>
    <input
      type="text"
      readOnly // Static display component
      placeholder={placeholder}
      className="bg-[#333] border border-[#444] text-gray-400 rounded-md px-3 py-2 w-full text-sm placeholder:text-gray-500 focus:outline-none"
    />
  </div>
);

/**
 * Action Button component with brand-specific burnt orange color.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#b5522a] hover:bg-[#9e4724] text-white rounded-xl px-5 py-3 flex-1 font-medium transition-colors">
    {label}
  </button>
);
