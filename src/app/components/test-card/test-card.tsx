import React from 'react';
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component
 * 
 * A self-contained smoke test component that visually approximates a Figma design.
 * Uses hardcoded values and arbitrary Tailwind colors to match the "UI magician Agent" design.
 * 
 * Design choices:
 * - bg-[#2a2a2a]: Dark background for the main card
 * - text-[#c1621f] / bg-[#c1621f]: Brand orange/brown accent color
 * - bg-[#1e1e1e]: Darker background for input fields
 */

const COLORS = {
  cardBg: 'bg-[#2a2a2a]',
  inputBg: 'bg-[#1e1e1e]',
  accent: 'text-[#c1621f]',
  accentBg: 'bg-[#c1621f]',
};

export const TestCard = () => {
  return (
    <div id="testElem" className={`${COLORS.cardBg} rounded-lg p-4 w-72`}>
      {/* Header Row: Component Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-lg font-bold">UI magician Agent</h1>
        <HiOutlineCog className="text-white text-xl" />
      </div>

      {/* Subtitle Row: Status/Context indicator */}
      <div className={`flex items-center ${COLORS.accent} text-sm mb-4`}>
        <HiChevronUp className="text-lg mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Visual spacer to match Figma vertical rhythm */}
      <div className="my-4" />

      {/* Add New Design Section Header */}
      <div className="flex items-center text-white text-lg font-bold mb-4">
        <HiChevronUp className="text-xl mr-2" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL Input */}
      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-6"
      />

      {/* Primary Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section Footer/Heading */}
      <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

/**
 * Shared layout for form input fields in the TestCard
 */
const InputField = ({ 
  id, 
  label, 
  placeholder, 
  className = "mb-4" 
}: { 
  id: string; 
  label: string; 
  placeholder: string; 
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center text-white text-sm mb-1">
      <label htmlFor={id}>{label}</label>
      <HiInformationCircle className="ml-1 text-xs" title={`${label} info`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full p-2 rounded ${COLORS.inputBg} border border-gray-600 text-white text-sm`}
      readOnly // Smoke test only - component is non-interactive
    />
  </div>
);

/**
 * Standard styled button for TestCard actions
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button 
    className={`flex-1 ${COLORS.accentBg} text-white py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity`}
    type="button"
  >
    {children}
  </button>
);
