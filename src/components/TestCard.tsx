
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

/**
 * A self-contained smoke test component that approximates a dark-themed UI panel.
 * Used to verify Tailwind CSS, react-icons, and basic layout patterns.
 */
export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="p-6 bg-[#1e1e1e] text-white min-h-screen">
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <AiOutlineSetting className="text-gray-400" size={20} />
      </div>

      {/* Subtitle: Information about the agent's scope with a muted orange accent */}
      <div className="flex items-center text-[#c47a3a] mb-8">
        <BsChevronUp className="mr-2" />
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      <div className="border-t border-gray-700 my-4" />

      {/* Section: Controls for adding a new figma design */}
      <div className="flex items-center text-white font-bold mb-4">
        <BsChevronUp className="mr-2" />
        <h3>Add New Design</h3>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-6"
      />

      {/* Actions: Primary call-to-action buttons with orange/brown theme */}
      <div className="flex space-x-4 mb-8">
        <button className="flex-1 py-2 px-4 rounded bg-[#b85c28] text-white font-semibold hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 rounded bg-[#b85c28] text-white font-semibold hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer list or history section indicator */}
      <h3 className="text-lg font-bold">Recent Breakdowns</h3>
    </div>
  );
}

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

/**
 * Shared input field component to maintain consistent styling for form elements.
 */
function InputField({ id, label, placeholder, className = "mb-4" }: InputFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-center text-sm font-semibold mb-2">
        {label}
        <AiOutlineInfoCircle className="ml-2 text-gray-500" size={16} />
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full p-2 rounded bg-[#2e2e2e] border border-[#3a3a3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#b85c28] transition-colors"
      />
    </div>
  );
}
