import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Theme constants to ensure consistency across the component.
 * Values are preserved exactly from the original design.
 */
const COLORS = {
  bgMain: '#2a2a2a',
  bgInput: '#1e1e1e',
  borderInput: '#555',
  buttonBg: '#a0522d',
  buttonText: '#e8d5c4',
  textPrimary: '#e0e0e0',
  textSecondary: '#b5b5b5',
  textTertiary: '#a4a4a3',
  textPlaceholder: '#737470',
  textMuted: '#8b9291',
} as const;

interface InputFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Reusable input field component with consistent styling for Design and Token inputs.
 */
const InputField = ({ label, placeholder, value, onChange }: InputFieldProps) => (
  <div className="mb-4">
    <label className="flex items-center text-[11.5px] font-semibold mb-1" style={{ color: COLORS.textTertiary }}>
      {label}
      <FiInfo className="ml-1" />
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 rounded border text-[11.5px] outline-none"
      style={{
        backgroundColor: COLORS.bgInput,
        borderColor: COLORS.borderInput,
        color: COLORS.textPrimary,
      }}
    />
  </div>
);

/**
 * TestCard component provides an interface for UI Magic Agent configuration.
 * Includes fields for design URL and access tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 min-h-screen text-white" style={{ backgroundColor: COLORS.bgMain }}>
      {/* Header Row */}
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-[13.5px] font-semibold" style={{ color: COLORS.textSecondary }}>
          UI magician Agent
        </h2>
        <FiSettings style={{ color: COLORS.textSecondary }} />
      </header>

      {/* Contextual Information */}
      <div className="flex items-center text-[11.5px] mb-4" style={{ color: COLORS.textMuted }}>
        <FiChevronUp className="mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="h-4" aria-hidden="true" />

      {/* Add New Design Section */}
      <section className="mt-4 mb-3">
        <div className="flex items-center">
          <FiChevronUp className="mr-1" style={{ color: '#b2b2b1' }} />
          <h3 className="text-[13.5px] font-semibold" style={{ color: '#b2b2b1' }}>
            Add New Design
          </h3>
        </div>
      </section>

      {/* Input Group */}
      <div className="space-y-2">
        <InputField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        <div className="mb-2" />
        <InputField label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-8 mt-2">
        <button
          className="flex-1 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Activity */}
      <footer>
        <h3 className="text-[13.5px] font-semibold" style={{ color: '#b0b0b0' }}>
          Recent Breakdowns
        </h3>
      </footer>
    </div>
  );
};
