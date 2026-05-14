import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface FormFieldProps {
  label: string;
  placeholder: string;
}

/**
 * Renders a labeled input field with an info icon.
 * Fields are read-only to match the static design mockup.
 */
const FormField = ({ label, placeholder }: FormFieldProps): JSX.Element => (
  <div className="mb-4">
    <div className="mb-2 flex items-center gap-2">
      <label className="text-sm text-[#8c9bab]">{label}</label>
      <AiOutlineInfoCircle className="h-4 w-4 text-[#8c9bab]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      readOnly
      className="w-full rounded border border-[#2c333a] bg-[#22272b] px-4 py-3 text-sm text-[#8c9bab] placeholder:text-[#8c9bab]"
    />
  </div>
);

/**
 * TestCard component displays a UI configuration panel for the "UI magician Agent".
 * This is a static mockup with read-only fields and non-functional buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[480px] rounded bg-[#1d2125] p-6 text-[#b6c2cf]">
      {/* Header with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-primary-bold text-[#b6c2cf]">UI magician Agent</h1>
        <FiSettings className="h-6 w-6 text-[#b6c2cf]" />
      </div>

      {/* Collapsed section indicator - represents a collapsible description */}
      <div className="mb-6 flex items-center gap-3">
        <FiChevronUp className="h-5 w-5 text-[#8c9bab]" />
        <span className="text-sm text-[#8c9bab]">From entire frame to a singl...</span>
      </div>

      {/* Expanded section header */}
      <div className="mb-6 flex items-center gap-3">
        <FiChevronUp className="h-5 w-5 text-[#b6c2cf]" />
        <h2 className="text-base font-primary-bold text-[#b6c2cf]">Add New Design</h2>
      </div>

      {/* Form fields for Figma integration */}
      <FormField 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxx" 
      />
      
      <div className="mb-6">
        <FormField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-4">
        <button className="rounded bg-[#b65c02] px-8 py-3 text-base font-primary text-white">
          Awesome
        </button>
        <button className="rounded bg-[#b65c02] px-8 py-3 text-base font-primary text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-base font-primary-bold text-[#b6c2cf]">Recent Breakdowns</h2>
      </div>

      {/* Footer with copyright */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center text-sm text-[#b6c2cf]">
        © AutonomyAI
      </div>
    </div>
  );
};
