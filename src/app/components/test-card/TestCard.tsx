import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaChevronUp } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Theme colors derived from Figma design
const COLORS = {
  background: '#2a2a2a',
  inputBg: '#1e1e1e',
  border: '#4a4a4a',
  primaryText: '#b5b5b5',
  secondaryText: '#8b9291',
  tertiaryText: '#b2b2b1',
  labelText: '#a4a4a3',
  placeholderText: '#737470',
  buttonBg: '#b5522a',
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared input field component with label and info icon
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mt-4">
    <div className="flex items-center gap-1 mb-1 text-xs" style={{ color: COLORS.labelText }}>
      <label htmlFor={id}>{label}</label>
      <AiOutlineInfoCircle className="text-sm" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full border rounded px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors"
      style={{ 
        backgroundColor: COLORS.inputBg, 
        borderColor: COLORS.border,
        color: COLORS.placeholderText 
      }}
    />
  </div>
);

/**
 * TestCard component - A specialized UI for managing design configurations.
 * Features Figma-inspired dark theme and custom branding.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem"
      className="p-5 w-[254px] font-sans rounded-sm" 
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header - Brand Identity */}
      <div className="flex items-center justify-between" style={{ color: COLORS.primaryText }}>
        <h2 className="font-bold text-base">UI magician Agent</h2>
        <IoSettingsOutline className="text-lg cursor-pointer hover:opacity-80" />
      </div>

      {/* Navigation Context */}
      <div className="flex items-center gap-2 mt-2 text-xs" style={{ color: COLORS.secondaryText }}>
        <FaChevronUp className="text-sm" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Action Header */}
      <div className="flex items-center gap-2 mt-8" style={{ color: COLORS.tertiaryText }}>
        <FaChevronUp className="text-sm" />
        <h3 className="font-bold text-sm">Add New Design</h3>
      </div>

      <InputField 
        id="personalAccessToken" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />

      <InputField 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        {['Awesome', 'Prepare'].map((label) => (
          <button
            key={label}
            className="text-white text-xs font-semibold px-6 py-3 rounded-lg focus:outline-none focus:ring-2 transition-opacity hover:opacity-90"
            style={{ 
              backgroundColor: COLORS.buttonBg,
              boxShadow: `0 0 0 0 ${COLORS.buttonBg}80` // Tailwind focus ring equivalent
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* History/Footer */}
      <h3 className="font-bold text-sm mt-8" style={{ color: COLORS.tertiaryText }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

