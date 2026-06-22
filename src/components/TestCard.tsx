import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Constants for theme colors.
 * Note: Using hex values in inline styles because src/components is outside the 
 * standard Tailwind content path in this project's configuration.
 */
const COLORS = {
  bgPrimary: '#1e1e1e',
  bgInput: '#2a2a2a',
  bgButton: '#b55c2c',
  borderInput: '#555',
  textPrimary: '#ffffff',
  textAccent: '#c47a3a',
} as const;

interface LabeledInputProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Reusable input field with label and info icon.
 */
const LabeledInput: React.FC<LabeledInputProps> = ({ id, label, placeholder }) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="flex items-center text-sm mb-1"
      style={{ color: COLORS.textPrimary }}
    >
      {label}
      <FiInfo size={14} style={{ color: COLORS.textPrimary }} className="ml-1" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: COLORS.bgInput,
        borderColor: COLORS.borderInput,
        color: COLORS.textPrimary,
      }}
      className="w-full p-2 rounded-md border text-sm"
    />
  </div>
);

/**
 * TestCard component replicating the UI magician Agent panel.
 * Built as a smoke test for the design-to-code pipeline.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bgPrimary }}
      className="p-6 rounded-lg shadow-lg w-96 mx-auto my-10"
    >
      {/* Header Row: Component Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <FiSettings size={20} style={{ color: COLORS.textPrimary }} />
      </div>

      {/* Subtext Row: Contextual link or status */}
      <div className="flex items-center mb-6">
        <FiChevronUp size={16} style={{ color: COLORS.textAccent }} className="mr-1" />
        <p className="text-sm" style={{ color: COLORS.textAccent }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Heading: Action trigger */}
      <div className="flex items-center mb-4 mt-6">
        <FiChevronUp size={20} style={{ color: COLORS.textPrimary }} className="mr-2" />
        <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h3>
      </div>

      <LabeledInput
        id="token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <LabeledInput
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons: Primary controls for the agent */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          style={{ backgroundColor: COLORS.bgButton, color: COLORS.textPrimary }}
          className="flex-1 py-2 px-4 rounded-lg font-semibold"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.bgButton, color: COLORS.textPrimary }}
          className="flex-1 py-2 px-4 rounded-lg font-semibold"
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: History/Logs access */}
      <div>
        <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
