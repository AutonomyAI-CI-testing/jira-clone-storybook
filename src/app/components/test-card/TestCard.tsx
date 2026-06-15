
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

// Design-specific colors that fall outside the semantic Tailwind system.
// We use arbitrary values here to match the specific Figma design requirement.
const COLORS = {
  CARD_BG: 'bg-[#2a2a2a]',
  INPUT_BG: 'bg-[#1a1a1a]',
  BUTTON_BG: 'bg-[#c1622a]',
  BUTTON_HOVER: 'hover:bg-[#a35124]',
  ACCENT_TEXT: 'text-[#d4763b]',
} as const;

/**
 * TestCard - A self-contained reference component demonstrating UI Magician Agent panel.
 * 
 * DESIGN RATIONALE:
 * This component uses fixed dark-themed colors to replicate a specific Figma handoff.
 * It is intended for visual verification and showcase purposes in Storybook.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id='testElem'>
      <div className={`${COLORS.CARD_BG} p-6 flex flex-col gap-4 max-w-sm mx-auto rounded-lg shadow-lg`}>
        {/* Header section with agent title and settings toggle */}
        <div className='flex justify-between items-center'>
          <span className='font-bold text-white text-xl'>UI magician Agent</span>
          <FiSettings className='text-gray-400 cursor-pointer hover:text-white transition-colors' />
        </div>

        {/* Status/Scope indicator */}
        <div className='flex items-center gap-2'>
          <FiChevronUp className={COLORS.ACCENT_TEXT} />
          <span className={`${COLORS.ACCENT_TEXT} text-sm`}>From entire frame to a singl...</span>
        </div>

        <div className='h-px bg-gray-700 my-2' aria-hidden="true" />

        <div className='flex items-center gap-2'>
          <FiChevronUp className='text-white' />
          <span className='font-bold text-white text-lg'>Add New Design</span>
        </div>

        <InputGroup 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxx" 
        />

        <InputGroup 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />

        {/* Primary Action Row */}
        <div className='flex gap-3 mt-2'>
          <button className={`${COLORS.BUTTON_BG} text-white font-semibold rounded-lg px-6 py-3 flex-1 transition-colors duration-200 ${COLORS.BUTTON_HOVER}`}>
            Awesome
          </button>
          <button className={`${COLORS.BUTTON_BG} text-white font-semibold rounded-lg px-6 py-3 flex-1 transition-colors duration-200 ${COLORS.BUTTON_HOVER}`}>
            Prepare
          </button>
        </div>

        <div className='mt-4'>
          <h2 className='font-bold text-white text-lg'>Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

interface InputGroupProps {
  label: string;
  placeholder: string;
}

/**
 * Internal helper for repetitive form fields to ensure consistent spacing and accessibility.
 */
const InputGroup = ({ label, placeholder }: InputGroupProps): JSX.Element => (
  <div className='flex flex-col gap-1'>
    <div className='flex justify-between items-center'>
      <label className='text-white text-sm font-medium'>{label}</label>
      <FiInfo className='text-gray-400 cursor-help' />
    </div>
    <input
      type='text'
      placeholder={placeholder}
      className={`${COLORS.INPUT_BG} border border-gray-600 text-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition-colors`}
    />
  </div>
);
