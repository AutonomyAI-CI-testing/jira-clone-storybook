
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

/**
 * Constants for the component's palette and configuration.
 * Colors are hardcoded to match the specific dark theme design requirements.
 */
const COLORS = {
  background: '#1a1a1a',
  headerText: '#b5b5b5',
  hintText: '#8b9291',
  sectionTitle: '#b2b2b1',
  label: '#a4a4a3',
  inputBg: '#2a2a2a',
  inputBorder: '#3a3a3a',
  inputPlaceholder: '#737470',
  secondaryText: '#b0b0b0',
} as const;

/**
 * Reusable ActionButton for the bottom forms. 
 * Amber color scheme used to differentiate primary actions from secondary navigation.
 */
interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 py-2 px-4 bg-amber-700 text-[#8c8078] font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 transition-colors"
  >
    {label}
  </button>
);

/**
 * Form input field with a label and help icon.
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, type = 'text' }) => (
  <div className="mb-4">
    <label htmlFor={id} className="flex items-center gap-1 text-sm font-medium text-[#a4a4a3] mb-1">
      {label}
      <AiOutlineInfoCircle className="text-xs" />
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm placeholder-[#737470] focus:outline-none focus:border-blue-500 transition-all"
    />
  </div>
);

/**
 * TestCard: A control panel for managed design breakdown.
 * Orchestrates inputs for Figma integration and provides design history navigation.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 min-h-screen text-white bg-[#1a1a1a]" style={{ backgroundColor: COLORS.background }}>
      {/* Header Row: Branding and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg text-[#b5b5b5]">UI magician Agent</h1>
        <AiOutlineSetting className="text-xl text-[#b5b5b5]" />
      </div>

      {/* Navigational Context / Breadcrumb-like hint */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-gray-400" />
        <span className="text-sm text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <div className="h-6" aria-hidden="true" />

      {/* Main Action Section: Design Onboarding */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-gray-400" />
          <h2 className="font-bold text-base text-[#b2b2b1]">Add New Design</h2>
        </div>

        <div className="space-y-2">
          <InputField
            id="accessToken"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <InputField
            id="designURL"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* History Section Header */}
      <div>
        <h2 className="font-bold text-base text-[#b0b0b0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
