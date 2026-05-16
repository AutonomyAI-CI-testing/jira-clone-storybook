import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * A UI configuration card for the Figma AI Agent setup.
 * Displays form fields for Personal Access Token and Design URL,
 * with accordion sections for additional settings.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[500px] rounded-md bg-[#1e1b16] p-8 shadow-md">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl text-[#d4cfc8]">
          UI magician Agent
        </h2>
        <FiSettings className="text-[#8a8278]" size={28} />
      </div>

      {/* Collapsed accordion preview showing truncated text */}
      <div className="mb-8 flex items-start gap-2">
        <FiChevronUp className="mt-0.5 text-[#8a8278]" size={20} />
        <span className="text-base text-[#8a8278]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="text-[#8a8278]" size={20} />
        <span className="font-primary-bold text-lg text-[#d4cfc8]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <InputField
        id="token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-6 mt-4"
      />

      {/* Design URL Field */}
      <InputField
        id="url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-8"
      />

      {/* Action Buttons */}
      <div className="mb-10 flex gap-4">
        <button className="rounded bg-[#c2742d] px-8 py-4 font-primary text-lg text-[#f0d8c0] transition-colors hover:bg-[#d48a45]">
          Awesome
        </button>
        <button className="rounded bg-[#c2742d] px-8 py-4 font-primary text-lg text-[#f0d8c0] transition-colors hover:bg-[#d48a45]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="font-primary-bold text-lg text-[#d4cfc8]">
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-gray-300 mt-4 border-t pt-3 text-center text-[#d4cfc8]">
        © AutonomyAI
      </div>
    </div>
  );
};

/**
 * Reusable input field component with label and info icon.
 * Maintains consistent styling across all form inputs in the card.
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const InputField = ({
  id,
  label,
  placeholder,
  className = "",
}: InputFieldProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-1">
        <label htmlFor={id} className="text-base text-[#d4cfc8]">
          {label}
        </label>
        <FiInfo className="text-[#8a8278]" size={18} />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border-2 border-[#3a3530] bg-[#2a2620] px-4 py-4 text-base text-[#d4cfc8] placeholder-[#8a8278] focus:border-[#c2742d] focus:outline-none"
      />
    </div>
  );
};
