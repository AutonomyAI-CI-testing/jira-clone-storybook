import {
  HiChevronDown,
  HiChevronRight,
  HiCog6Tooth,
  HiInformationCircle,
} from "react-icons/hi2";
import { useState } from "react";

// Chevron icon selector based on collapsed state
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => {
  return isExpanded ? (
    <HiChevronDown size={16} />
  ) : (
    <HiChevronRight size={16} />
  );
};

// Reusable form input field with label and help icon
interface FormFieldProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
}

const FormField = ({ label, type, placeholder }: FormFieldProps) => (
  <div className="space-y-2">
    <label className="text-gray-300 flex items-center gap-2 font-primary text-xs">
      {label}
      <button className="text-gray-500 hover:text-gray-400">
        <HiInformationCircle size={16} />
      </button>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-600 hover:border-zinc-600 focus:border-orange-500 w-full rounded border px-3 py-2 text-sm transition-colors focus:outline-none"
    />
  </div>
);

export const TestCard = () => {
  // Track expanded/collapsed state of description and design sections
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isDesignSectionExpanded, setIsDesignSectionExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="bg-zinc-900 text-gray-300 w-full max-w-md overflow-hidden rounded-lg"
    >
      {/* Header */}
      <div className="bg-zinc-800 border-zinc-700 flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-gray-200 font-primary-bold text-lg">
          UI magician Agent
        </h1>
        <button className="text-gray-400 hover:text-gray-300 transition-colors">
          <HiCog6Tooth size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-6 p-6">
        {/* Collapsible description section */}
        <div className="space-y-3">
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="text-gray-300 hover:text-gray-200 group flex w-full items-center gap-2 transition-colors"
          >
            <ChevronIcon isExpanded={isDescriptionExpanded} />
            <span className="text-sm">From entire frame to a singl...</span>
          </button>
          {isDescriptionExpanded && (
            <div className="text-gray-400 border-gray-700 border-l py-2 pl-6 text-xs">
              Detailed description would appear here in the expanded state.
            </div>
          )}
        </div>

        {/* Add New Design section toggle */}
        <div>
          <button
            onClick={() => setIsDesignSectionExpanded(!isDesignSectionExpanded)}
            className="text-orange-500 hover:text-orange-400 flex w-full items-center gap-2 transition-colors"
          >
            <ChevronIcon isExpanded={isDesignSectionExpanded} />
            <span className="font-primary text-sm">Add New Design</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <FormField
            label="Personal Access Token"
            type="password"
            placeholder="fjgd_xxxxxxxxxxxxxxxx"
          />
          <FormField
            label="Design URL"
            type="text"
            placeholder="https://www.figma.com/file/:..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="bg-orange-700 hover:bg-orange-600 active:bg-orange-800 flex-1 rounded px-4 py-2 font-primary text-sm text-white transition-colors">
            Awesome
          </button>
          <button className="bg-orange-700 hover:bg-orange-600 active:bg-orange-800 flex-1 rounded px-4 py-2 font-primary text-sm text-white transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-800 border-zinc-700 border-t px-6 py-3">
        <p className="text-gray-400 font-primary text-xs">Recent Breakdowns</p>
      </div>
    </div>
  );
};
