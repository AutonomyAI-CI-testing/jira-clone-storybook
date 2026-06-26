
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * A sub-component for labeled form inputs with info icons.
 * Extracted to ensure consistent styling for all configuration fields.
 */
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="mb-1 flex items-center text-xs font-semibold text-[#a4a4a3]">
      {label} <FiInfo className="ml-1 text-[#a4a4a3]" size={12} />
    </label>
    <input
      id={id}
      className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] p-2 text-xs text-[#b5b5b5] placeholder-[#737470] focus:ring-1 focus:ring-[#b5541c] focus:outline-none"
      {...props}
    />
  </div>
);

/**
 * TestCard component provides a configuration interface for the "UI magician Agent".
 * Features a dark theme consistent with high-end developer tools.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1c1c1c] p-6 text-white">
      {/* Header: Displays agent identity and settings access */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <FiSettings className="text-lg text-[#b5b5b5]" />
      </div>

      {/* Breadcrumb/Context: Shows current operation scope */}
      <div className="mt-3 flex items-center">
        <FiChevronUp className="mr-1 text-lg text-[#8b9291]" />
        <p className="text-xs font-semibold text-[#8b9291]">From entire frame to a singl...</p>
      </div>

      <div className="mt-8" />

      {/* Section Header: Collapsible-style header for the configuration form */}
      <div className="flex items-center">
        <FiChevronUp className="mr-1 text-lg text-[#b2b2b1]" />
        <h2 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Configuration Form: Captures Figma credentials and design references */}
      <div className="mt-4 space-y-4">
        <InputField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          type="text"
        />
        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
          type="text"
          style={{ borderColor: '#5a5a5a' }} // Specific border emphasis for URL field
        />
      </div>

      {/* Action Buttons: Primary triggers for the agent's workflow */}
      <div className="mt-4 flex gap-3">
        <button className="rounded-lg bg-[#b5541c] px-6 py-2 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b5541c] px-6 py-2 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Footer: Historical context for past operations */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-[#b0b0b0]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

