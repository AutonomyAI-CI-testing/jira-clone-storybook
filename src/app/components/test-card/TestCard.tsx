
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * UTILS & CONSTANTS
 * These colors follow the "UI magician Agent" Figma design spec.
 * Using arbitrary Tailwind values as these colors are specific to this smoke test 
 * and not yet part of the project's design system.
 */
const COLORS = {
  CARD_BG: 'bg-[#282828]',
  INPUT_BG: 'bg-[#1a1a1a]',
  BUTTON_BG: 'bg-[#b5511c]',
  MUTED_ORANGE: 'text-[#a0856a]',
  BORDER: 'border-[#444]',
} as const;

/**
 * SUB-COMPONENTS
 */

const Field: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1 text-gray-300 text-sm">
      <span>{label}</span>
      <AiOutlineInfoCircle />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      readOnly
      className={`w-full ${COLORS.INPUT_BG} border ${COLORS.BORDER} rounded p-2 text-sm text-gray-400 placeholder-gray-600 outline-none`}
    />
  </div>
);

const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button 
    type="button"
    className={`flex-1 ${COLORS.BUTTON_BG} text-white font-semibold py-2 px-4 rounded-lg text-sm transition-opacity hover:opacity-90`}
  >
    {children}
  </button>
);

/**
 * MAIN COMPONENT
 * A self-contained smoke-test card component for visual verification.
 * Follows the layout and styling of the "UI magician Agent" design.
 */
export const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className={`${COLORS.CARD_BG} rounded-xl p-5 w-full max-w-[320px] flex flex-col gap-4 text-white shadow-xl`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
        <IoSettingsOutline size={22} className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors" />
      </div>

      {/* Chevron/collapsed row - muted orange text per spec */}
      <div className={`flex items-center gap-2 ${COLORS.MUTED_ORANGE} text-sm`}>
        <FiChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Section header: Add New Design */}
      <div className="flex items-center gap-2 text-white font-bold text-base mt-2">
        <FiChevronUp />
        <h2>Add New Design</h2>
      </div>

      {/* Input Fields */}
      <Field 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      <Field 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer heading */}
      <h3 className="text-white font-bold text-base mt-2">
        Recent Breakdowns
      </h3>
    </div>
  );
};
