
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design tokens extracted from Figma to maintain consistency
const COLORS = {
  bg: '#282828',
  inputBg: '#3a3a3a',
  rust: '#7a3c1e',
  text: {
    primary: '#ffffff', // General white text
    heading: '#b5b5b5', // "UI magician Agent"
    muted: '#8b9291', // Muted green-gray
    section: '#b2b2b1', // "Add New Design"
    label: '#a4a4a3', // Input labels
    placeholder: '#737470', // Placeholder and input text
    button: '#8c8078', // Button text
    recent: '#b0b0b0', // "Recent Breakdowns"
  },
  border: {
    divider: '#3a3a3a',
    input: '#555',
  },
};

/**
 * Shared Input component for the dark panel theme.
 * Keeps input styling consistent and dry.
 */
const DarkInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={`w-full p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-opacity-50 ${props.className || ''}`}
    style={{
      backgroundColor: COLORS.inputBg,
      color: COLORS.text.placeholder,
      borderColor: COLORS.border.input,
      ...props.style,
    }}
  />
);

/**
 * Shared Label component with an info icon.
 */
const InfoLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="flex items-center text-sm font-semibold mb-1" style={{ color: COLORS.text.label }}>
    {children}
    <AiOutlineInfoCircle className="ml-1" size={12} />
  </label>
);

/**
 * TestCard component
 * A dark-themed UI panel mirroring a design tool sidebar.
 * Used as a smoke test for Figma-to-code generation.
 */
export const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="w-72 p-4 font-sans text-white text-sm"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-[14px]" style={{ color: COLORS.text.heading }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-white" size={16} />
      </div>

      {/* Breadcrumb-like status row */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-1" size={16} style={{ color: COLORS.text.muted }} />
        <span className="font-semibold text-sm" style={{ color: COLORS.text.muted }}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="my-6 border-t" style={{ borderColor: COLORS.border.divider }} />

      {/* Collapsible section heading */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-1" size={16} style={{ color: COLORS.text.section }} />
        <span className="font-semibold text-[14px]" style={{ color: COLORS.text.section }}>
          Add New Design
        </span>
      </div>

      {/* Input Fields Group */}
      <div className="space-y-6 mb-6">
        <div>
          <InfoLabel>Personal Access Token</InfoLabel>
          <DarkInput placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        </div>

        <div>
          <InfoLabel>Design URL</InfoLabel>
          <DarkInput placeholder="https://www.figma.com/file/:" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2 mb-6">
        <button 
          className="flex-1 p-2 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90" 
          style={{ backgroundColor: COLORS.rust, color: COLORS.text.button }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 p-2 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90" 
          style={{ backgroundColor: COLORS.rust, color: COLORS.text.button }}
        >
          Prepare
        </button>
      </div>

      {/* Footer / Secondary Section */}
      <div>
        <h3 className="font-semibold text-[14px]" style={{ color: COLORS.text.recent }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

