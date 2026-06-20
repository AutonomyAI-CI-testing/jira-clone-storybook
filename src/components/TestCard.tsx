import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Constants for theme colors to avoid magic values
const COLORS = {
  background: '#262626',
  inputBackground: '#333333',
  inputBorder: '#555555',
  primaryButton: '#b5451b',
  mutedText: '#a0522d',
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared input field component for the TestCard form.
 * Preserves the dark-themed styling and layout.
 */
const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4">
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={id} className="text-white text-sm">
        {label}
      </label>
      <HiInformationCircle className="text-white text-sm" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: COLORS.inputBackground,
        borderColor: COLORS.inputBorder,
      }}
      className="w-full border rounded px-3 py-2 text-sm text-white placeholder-gray-500"
    />
  </div>
);

interface ActionButtonProps {
  children: React.ReactNode;
}

/**
 * Styled primary action button used in the TestCard.
 */
const ActionButton: React.FC<ActionButtonProps> = ({ children }) => (
  <button
    className="flex-1 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
    style={{ backgroundColor: COLORS.primaryButton }}
  >
    {children}
  </button>
);

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background, color: '#ffffff' }}
      className="p-5 rounded-xl max-w-sm mx-auto"
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-white text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Breadcrumb-style collapsed row with muted brown accent */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp style={{ color: COLORS.mutedText }} />
        <p style={{ color: COLORS.mutedText }} className="text-sm">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main section header */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-white text-lg" />
        <h3 className="font-bold text-white text-lg">Add New Design</h3>
      </div>

      <InputField
        id="personalAccessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-2">
        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="flex gap-3 mb-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer section for listing recent activity */}
      <div>
        <h3 className="font-bold text-white text-lg">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
