
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * UI magician Agent panel component.
 * Replicates a dark-themed Figma integration tool panel.
 * Uses Tailwind arbitrary values to match non-standard design tokens from Figma.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 max-w-xs mx-auto text-white font-sans rounded-md">
      {/* Header Row: Agent title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-semibold">UI magician Agent</h2>
        <FiSettings className="text-gray-400" size={20} />
      </div>

      {/* Collapsed Row: Contextual hint/status */}
      <div className="flex items-center text-[#8b9291] mb-6">
        <FiChevronUp className="mr-2" size={18} />
        <span className="text-sm font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Spacing gap to match Figma layout */}
      <div className="h-4"></div>

      {/* Section: Add New Design */}
      <div className="flex items-center text-[#b2b2b1] mb-4">
        <FiChevronUp className="mr-2" size={18} />
        <h3 className="text-md font-semibold">Add New Design</h3>
      </div>

      {/* Inputs for Figma integration */}
      <div className="space-y-4 mb-6">
        <InputWithLabel
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          borderClass="border border-[#a5adad]"
          placeholderColor="placeholder-[#737470]"
        />
        <InputWithLabel
          label="Design URL"
          placeholder="https://www.figma.com/file/: "
          labelColor="text-[#a3a3a2]"
          borderClass="border-2 border-[#929291]"
          placeholderColor="placeholder-[#71726e]"
        />
      </div>

      {/* CTAs */}
      <div className="flex justify-between space-x-2 mb-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section Footer: Recent activity heading */}
      <h3 className="text-[#b0b0b0] text-md font-semibold font-sans">Recent Breakdowns</h3>
    </div>
  );
};

/**
 * Shared input component with label and info icon.
 */
const InputWithLabel: React.FC<{
  label: string;
  placeholder: string;
  labelColor: string;
  borderClass: string;
  placeholderColor: string;
}> = ({ label, placeholder, labelColor, borderClass, placeholderColor }) => (
  <div>
    <label className={`flex items-center ${labelColor} text-sm mb-1 font-semibold`}>
      {label} <FiInfo className="ml-1 text-gray-500" size={14} />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full p-2 rounded-md bg-[#272822] ${borderClass} text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${placeholderColor}`}
    />
  </div>
);

/**
 * Shared action button with brown/orange styling.
 */
const ActionButton: React.FC<{ label: string }> = ({ label }) => (
  // Using arbitrary brown color #843a17 to match Figma CTA button
  <button className="flex-1 py-2 px-4 bg-[#843a17] text-[#8c8078] font-semibold rounded-md hover:opacity-90 transition-opacity">
    {label}
  </button>
);

export default TestCard;
