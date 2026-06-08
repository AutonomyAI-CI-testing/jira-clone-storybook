import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

// Design tokens for the card theme
const COLORS = {
  bg: '#1e1e1e',
  text: '#b5b5b5',
  textPrimary: '#ffffff',
  textMuted: '#a4a4a3',
  input: '#282828',
  inputBorder: '#3a3a3a',
  inputText: '#f0f0f0',
  buttonBg: '#ffbf00',
  buttonBgHover: '#e6ac00',
} as const;

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-6 font-sans rounded-lg shadow-lg max-w-sm mx-auto my-10"
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
      }}
    >
      {/* Header with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <FiSettings className="text-xl" style={{ color: COLORS.text }} />
      </div>

      {/* Collapsed section showing truncated title */}
      <div className="flex items-center mb-4" style={{ color: COLORS.textMuted }}>
        <FiChevronUp className="text-lg mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Expandable section for adding new designs */}
      <div className="flex items-center text-lg font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
        <FiChevronUp className="text-lg mr-2" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-sm font-bold mb-2 flex items-center" style={{ color: COLORS.text }}>
          Personal Access Token
          <FiInfo className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          style={{
            backgroundColor: COLORS.input,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="block text-sm font-bold mb-2 flex items-center" style={{ color: COLORS.text }}>
          Design URL
          <FiInfo className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          style={{
            backgroundColor: COLORS.input,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Action buttons for user interactions */}
      <div className="flex justify-between space-x-4 mb-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent breakdowns section heading */}
      <div>
        <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

/**
 * ActionButton: Reusable button component for TestCard
 * Styled with consistent color scheme and hover effects
 */
interface ActionButtonProps {
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label }) => (
  <button
    className="flex-1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
    style={{
      backgroundColor: COLORS.buttonBg,
      color: COLORS.textPrimary,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = COLORS.buttonBg;
    }}
  >
    {label}
  </button>
);

export default TestCard;
