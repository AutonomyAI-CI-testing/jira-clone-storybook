
import React from 'react';
import { LuSettings2, LuChevronUp, LuInfo } from 'react-icons/lu';

// Design system constants mapped from Figma to maintain visual consistency
const COLORS = {
  BACKGROUND: '#232323',
  HEADER_TEXT: '#b5b5b5',
  SUBTITLE_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  INPUT_BG: '#2a2a2a',
  INPUT_BORDER: '#3a3a3a',
  INPUT_PLACEHOLDER: '#737470',
  BUTTON_BG: '#b85c2a',
  FOOTER_TEXT: '#b0b0b0',
} as const;

/**
 * TestCard component
 * A visual replica of the UI magician Agent panel design.
 * Used for smoke testing the code generation pipeline.
 */
export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="p-4 text-white font-sans"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.HEADER_TEXT }}
        >
          UI magician Agent
        </h2>
        <LuSettings2 className="text-lg" style={{ color: COLORS.HEADER_TEXT }} />
      </div>

      {/* Subtitle: Agent description */}
      <div 
        className="flex items-center text-[11.5px] font-semibold mb-6"
        style={{ color: COLORS.SUBTITLE_TEXT }}
      >
        <LuChevronUp className="mr-1 text-base" />
        <span>From entire frame to a single component, this agent creates production-ready code.</span>
      </div>

      {/* Action Section: Add New Design toggle */}
      <div 
        className="flex items-center text-[13.5px] font-semibold mb-4"
        style={{ color: COLORS.SECTION_HEADER }}
      >
        <LuChevronUp className="mr-1 text-base" />
        <span>Add New Design</span>
      </div>

      {/* Form Field: Personal Access Token */}
      <div className="mb-4">
        <label 
          className="flex items-center text-[11.5px] font-semibold mb-2"
          style={{ color: COLORS.LABEL }}
        >
          Personal Access Token
          <LuInfo className="ml-1 text-sm" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-[11.5px] outline-none"
          style={{ 
            backgroundColor: COLORS.INPUT_BG,
            borderColor: COLORS.INPUT_BORDER,
            color: COLORS.INPUT_PLACEHOLDER 
          }}
        />
      </div>

      {/* Form Field: Design URL */}
      <div className="mb-6">
        <label 
          className="flex items-center text-[11.5px] font-semibold mb-2"
          style={{ color: COLORS.LABEL }}
        >
          Design URL
          <LuInfo className="ml-1 text-sm" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-[11.5px] outline-none"
          style={{ 
            backgroundColor: COLORS.INPUT_BG,
            borderColor: COLORS.INPUT_BORDER,
            color: COLORS.INPUT_PLACEHOLDER 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <button 
          className="flex-1 py-2 text-white text-[11.5px] font-semibold rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 text-white text-[11.5px] font-semibold rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Historical data section */}
      <div>
        <h3 
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.FOOTER_TEXT }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
