import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design tokens based on Figma spec
const COLORS = {
  background: '#2a2a2a',
  inputBackground: '#1e1e1e',
  textPrimary: '#b5b5b5',
  textSecondary: '#8b9291',
  textMuted: '#b2b2b1',
  textLabel: '#a4a4a3',
  textPlaceholder: '#737470',
  secondaryHeading: '#b0b0b0',
  accent: '#c1622f',
  accentHover: '#a64e26',
  buttonText: '#8c8078',
  border: '#444',
} as const;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Reusable action button for the TestCard.
 * Maintains the specific orange-brown accent from design.
 */
const ActionButton: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-colors"
    style={{
      backgroundColor: COLORS.accent,
      color: COLORS.buttonText,
    }}
    // Hover state managed via Tailwind arbitrary value to match the background color precisely
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.accentHover)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
  >
    {children}
  </button>
);

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-6 font-sans rounded-lg shadow-lg max-w-sm mx-auto my-8"
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="w-5 h-5" style={{ color: COLORS.textPrimary }} />
      </div>

      {/* Subtext Row - chevron used as dropdown indicator */}
      <div className="flex items-center text-sm mb-6" style={{ color: COLORS.textSecondary }}>
        <IoChevronUpOutline className="w-4 h-4 mr-1 transform rotate-180" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer per design requirements */}
      <div className="mb-8" />

      {/* Add New Design Section */}
      <div className="flex items-center mb-4" style={{ color: COLORS.textMuted }}>
        <IoChevronUpOutline className="w-4 h-4 mr-2" />
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center text-sm mb-1" style={{ color: COLORS.textLabel }}>
          Personal Access Token
          <AiOutlineInfoCircle className="w-3 h-3 ml-1" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border text-sm focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.border,
            color: COLORS.textPlaceholder,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-sm mb-1" style={{ color: COLORS.textLabel }}>
          Design URL
          <AiOutlineInfoCircle className="w-3 h-3 ml-1" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded border text-sm focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.border,
            color: COLORS.textPlaceholder,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h3 className="text-lg font-bold" style={{ color: COLORS.secondaryHeading }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
