import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Colors matched to the Figma design requirements
const COLORS = {
  CARD_BG: '#2a2a2a',
  SUBTITLE: '#c07848', // Warm amber
  INPUT_BG: '#1a1a1a',
  INPUT_BORDER: '#555555',
  BUTTON_BG: '#b5542a',
} as const;

/**
 * TestCard component replicating the "UI magician Agent" Figma design panel.
 * Designed as a self-contained visual demo with no external side effects.
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div 
        className="w-72 p-5 rounded-lg text-white"
        style={{ backgroundColor: COLORS.CARD_BG }}
      >
        {/* Header: Title and settings icon */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-xl">UI magician Agent</h1>
          <IoSettingsOutline className="text-gray-400" size={20} />
        </div>

        {/* Subtitle: Truncated text with amber coloring for visual hierarchy */}
        <div 
          className="flex items-center gap-2 mb-6 text-sm"
          style={{ color: COLORS.SUBTITLE }}
        >
          <HiChevronUp />
          <span>From entire frame to a singl...</span>
        </div>

        {/* Section Heading: "Add New Design" focus area */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp />
          <h2 className="font-bold">Add New Design</h2>
        </div>

        {/* Input Fields: Using consistent styling for dark-themed form elements */}
        <div className="space-y-4 mb-6">
          <InputGroup
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <InputGroup
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Actions: Primary CTA buttons with orange-brown theme */}
        <div className="flex gap-3 mb-6">
          <button 
            className="rounded-lg px-6 py-2 text-white flex-1 transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.BUTTON_BG }}
          >
            Awesome
          </button>
          <button 
            className="rounded-lg px-6 py-2 text-white flex-1 transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.BUTTON_BG }}
          >
            Prepare
          </button>
        </div>

        {/* Footer: Recent activity log heading */}
        <h2 className="text-white font-bold text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

interface InputGroupProps {
  label: string;
  placeholder: string;
}

/**
 * Shared layout for labeled inputs with info icons
 */
const InputGroup = ({ label, placeholder }: InputGroupProps) => (
  <div>
    <label className="flex items-center gap-1 mb-1 text-white">
      {label}
      <AiOutlineInfoCircle className="text-gray-400" title="More information" />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border text-white text-sm px-3 py-2 placeholder-gray-500 bg-transparent outline-none focus:border-gray-400 transition-colors"
      style={{ 
        backgroundColor: COLORS.INPUT_BG,
        borderColor: COLORS.INPUT_BORDER 
      }}
    />
  </div>
);

export default TestCard;
