
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

/**
 * TestCard component - A smoke test UI following Figma designs for the "UI magician Agent" panel.
 * Uses hardcoded values as it serves as a visual verification component for the project setup.
 */

// Design-matched colors and constants
const COLORS = {
  textSecondary: '#8b9291',
  textMuted: '#b2b2b1',
  label: '#a4a4a3',
  placeholder: '#737470',
  buttonBg: '#7a4a2a',
  buttonText: '#8c8078',
  headerTitle: '#b5b5b5',
  inputBorder: '#3a3a3a',
  sectionTitle: '#b0b0b0',
};

/**
 * Reusable Section Header with a chevron icon
 */
const SectionHeader: React.FC<{
  iconColor: string;
  textColor: string;
  text: string;
  isHeading?: boolean;
}> = ({ iconColor, textColor, text, isHeading = false }) => (
  <div className="flex items-center mb-4">
    <FiChevronUp className="mr-1" style={{ color: iconColor }} />
    {isHeading ? (
      <h3 className="font-semibold text-sm" style={{ color: textColor }}>
        {text}
      </h3>
    ) : (
      <p className="text-xs" style={{ color: textColor }}>
        {text}
      </p>
    )}
  </div>
);

/**
 * Reusable Label with Info icon
 */
const LabelWithInfo: React.FC<{ htmlFor: string; text: string }> = ({ htmlFor, text }) => (
  <div className="flex items-center mb-2">
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold mr-1"
      style={{ color: COLORS.label }}
    >
      {text}
    </label>
    <AiOutlineInfoCircle className="text-xs" style={{ color: COLORS.label }} />
  </div>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] w-[254px] p-4 font-sans text-white rounded-lg shadow-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm" style={{ color: COLORS.headerTitle }}>
          UI magician Agent
        </h2>
        <AiOutlineSetting className="text-white cursor-pointer hover:opacity-80 transition-opacity" />
      </div>

      {/* Subtitle Section */}
      <SectionHeader
        iconColor={COLORS.textSecondary}
        textColor={COLORS.textSecondary}
        text="From entire frame to a singl..."
      />

      {/* Spacer - maintaining the original layout spacing */}
      <div className="my-4" />

      {/* Add New Design Section */}
      <SectionHeader
        iconColor={COLORS.textMuted}
        textColor={COLORS.textMuted}
        text="Add New Design"
        isHeading
      />

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <LabelWithInfo htmlFor="personalAccessToken" text="Personal Access Token" />
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1a1a1a] border rounded-md text-xs w-full px-3 py-2 outline-none focus:ring-1 focus:ring-amber-900 transition-all"
          style={{ borderColor: COLORS.inputBorder, color: COLORS.placeholder }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <LabelWithInfo htmlFor="designURL" text="Design URL" />
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file:/"
          className="bg-[#1a1a1a] border rounded-md text-xs w-full px-3 py-2 outline-none focus:ring-1 focus:ring-amber-900 transition-all"
          style={{ borderColor: COLORS.inputBorder, color: COLORS.placeholder }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2">
        <button
          className="font-semibold text-xs rounded-lg px-6 py-2 flex-1 hover:brightness-110 active:brightness-90 transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="font-semibold text-xs rounded-lg px-6 py-2 flex-1 hover:brightness-110 active:brightness-90 transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h3 className="font-semibold text-sm mt-6" style={{ color: COLORS.sectionTitle }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
