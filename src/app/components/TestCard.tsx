
import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

// Design tokens derived from Figma specs for consistency
const COLORS = {
  cardBg: '#2a2a2a',
  inputBg: '#1e1e1e',
  inputBorder: '#444',
  buttonBg: '#8c4a2f', // Warm orange-brown terracotta
  buttonText: '#d4a898',
  titleText: '#b5b5b5',
  subtitleText: '#8b9291',
  headingText: '#b2b2b1',
  labelText: '#a3a3a2',
  placeholderText: '#737470',
} as const;

/**
 * TestCard component
 * A self-contained panel replicating the "UI Magician Agent" UI.
 * Used for showcasing Figma-to-code workflow components.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 w-full rounded-lg font-sans shadow-xl" style={{ backgroundColor: COLORS.cardBg }}>
      {/* Header Row: Main title and settings access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm" style={{ color: COLORS.titleText }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-lg" style={{ color: COLORS.subtitleText }} />
      </div>

      {/* Contextual subtitle with collapse indicator */}
      <div className="flex items-center text-xs font-semibold mb-6" style={{ color: COLORS.subtitleText }}>
        <IoChevronUp className="mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Configuration Section Trigger */}
      <div className="flex items-center font-semibold text-sm mb-4" style={{ color: COLORS.headingText }}>
        <IoChevronUp className="mr-2" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token (PAT) Field */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center text-xs mb-1" style={{ color: COLORS.labelText }}>
          Personal Access Token
          <IoInformationCircleOutline className="ml-1" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="border text-xs rounded p-2 w-full focus:outline-none transition-colors"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholderText 
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-xs mb-1" style={{ color: COLORS.labelText }}>
          Design URL
          <IoInformationCircleOutline className="ml-1" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="border text-xs rounded p-2 w-full focus:outline-none transition-colors"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholderText 
          }}
        />
      </div>

      {/* Primary Actions: Equal width buttons */}
      <div className="flex gap-2 mb-6">
        <button 
          className="font-semibold text-xs rounded-lg px-4 py-2 flex-1 hover:brightness-110 transition-all duration-200"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button 
          className="font-semibold text-xs rounded-lg px-4 py-2 flex-1 hover:brightness-110 transition-all duration-200"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h3 className="font-semibold text-sm" style={{ color: '#b0b0b0' }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
