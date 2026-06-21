import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

// Colors matching the dark theme design requirements
const COLORS = {
  BACKGROUND: '#161613',
  TEXT_MUTED: '#d9d9d9',
  INPUT_BORDER: '#555',
  BUTTON_BG: '#8b4513',
};

/**
 * TestCard: A self-contained smoke test component representing the "UI magician Agent" panel.
 * This is used to verify Tailwind, icon support, and Storybook rendering in a dark theme.
 */
export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="p-6" 
      style={{ backgroundColor: COLORS.BACKGROUND, minHeight: '600px', width: '360px' }}
    >
      {/* 1. Header Row - Shows the agent name and settings access */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-medium text-2xl" style={{ color: COLORS.TEXT_MUTED }}>UI magician Agent</h2>
        <AiOutlineSetting style={{ color: COLORS.TEXT_MUTED }} size={28} />
      </div>

      {/* 2. Collapsible Row 1 - Visual representation of a collapsed task/filter */}
      <div className="flex items-center gap-3 mb-12">
        <FiChevronUp style={{ color: COLORS.TEXT_MUTED }} size={20} />
        <span className="text-lg" style={{ color: COLORS.TEXT_MUTED }}>From entire frame to a singl...</span>
      </div>

      {/* 4. "Add New Design" Section Header - Visual section toggle */}
      <div className="flex items-center gap-3 mb-8">
        <FiChevronUp style={{ color: COLORS.TEXT_MUTED }} size={20} />
        <h3 className="font-bold text-xl" style={{ color: COLORS.TEXT_MUTED }}>Add New Design</h3>
      </div>

      {/* 5. Personal Access Token Field - Input for authentication token */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="pat" className="text-lg" style={{ color: COLORS.TEXT_MUTED }}>Personal Access Token</label>
          <AiOutlineInfoCircle style={{ color: COLORS.TEXT_MUTED }} size={24} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-4 rounded-md focus:outline-none text-lg"
          style={{ backgroundColor: 'transparent', border: `2px solid ${COLORS.INPUT_BORDER}`, color: 'white' }}
        />
      </div>

      {/* 6. Design URL Field - Input for the design file to be processed */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="designUrl" className="text-lg" style={{ color: COLORS.TEXT_MUTED }}>Design URL</label>
          <AiOutlineInfoCircle style={{ color: COLORS.TEXT_MUTED }} size={24} />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-4 rounded-md focus:outline-none text-lg"
          style={{ backgroundColor: 'transparent', border: `2px solid ${COLORS.INPUT_BORDER}`, color: 'white' }}
        />
      </div>

      {/* 7. Buttons Row - Action triggers for the agent */}
      <div className="flex gap-6 mb-16">
        <button
          className="flex-1 p-4 rounded-lg font-bold text-lg"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.TEXT_MUTED }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-4 rounded-lg font-bold text-lg"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.TEXT_MUTED }}
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns Heading - Footer section for history */}
      <div>
        <h3 className="font-bold text-xl" style={{ color: COLORS.TEXT_MUTED }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
}
