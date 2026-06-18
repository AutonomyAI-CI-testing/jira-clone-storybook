
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
    <div id="testElem" className="bg-[#121212] p-8 w-full max-w-sm text-[#E1E1E1] font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">UI magician Agent</h1>
        <FiSettings className="text-[#A1A1A1] cursor-pointer" size={24} />
      </div>

      {/* From frame hint */}
      <div className="flex items-center gap-3 mb-16">
        <FiChevronUp className="text-[#A1A1A1]" size={20} />
        <span className="text-[#A1A1A1] text-lg">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-3 mb-8 cursor-pointer">
        <FiChevronUp className="text-white" size={22} />
        <span className="text-xl font-bold text-[#E1E1E1]">Add New Design</span>
      </div>

      {/* Form Fields */}
      <div className="space-y-10">
        <FormField 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <FormField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-12 mb-20">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer */}
      <div>
        <h2 className="text-xl font-bold text-[#E1E1E1]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

/**
 * Reusable Form Field component for consistent input styling.
 * Uses hardcoded brand colors for the dark theme.
 */
const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between pr-2">
      <span className="text-[#A1A1A1] text-lg font-medium">{label}</span>
      <FiInfo className="text-white" size={22} />
    </div>
    <div className="border border-[#3A3A3A] rounded-sm p-[1px]">
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className="bg-transparent text-[#6F6F6F] px-4 py-4 w-full text-lg placeholder:text-[#6F6F6F] focus:outline-none"
      />
    </div>
  </div>
);

/**
 * Action Button component with brand-specific burnt orange color.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#8E4122] hover:bg-[#7a371c] text-white rounded-md px-4 py-4 flex-1 text-lg font-bold transition-colors">
    {label}
  </button>
);
