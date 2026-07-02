
import React from 'react';

/**
 * Constants for colors and design tokens to maintain consistency
 * and make the component easier to maintain. Values are matched
 * to Figma design specifications.
 */
const COLORS = {
  BACKGROUND: '#1c1c1c',
  PRIMARY_TEXT: '#b5b5b5',
  SECONDARY_TEXT: '#8b9291',
  HEADING_TEXT: '#b2b2b1',
  LABEL_TEXT_1: '#a4a4a3',
  LABEL_TEXT_2: '#a3a3a2',
  INPUT_BG: '#2a2a2a',
  INPUT_BORDER: 'rgb(82 82 91)', // zinc-600
  INPUT_BORDER_LIGHT: 'rgb(113 113 122)', // zinc-500
  BUTTON_BG: '#a0522d',
  BUTTON_TEXT: '#8c8078',
  FOOTER_HEADING: '#b0b0b0',
} as const;

/**
 * TestCard is a smoke test component that visually replicates a Figma design
 * for a "UI magician Agent" panel. It uses hardcoded content as it is
 * designed to validate the rendering pipeline.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="p-5 w-64 rounded-lg shadow-xl"
      style={{ backgroundColor: COLORS.BACKGROUND, color: COLORS.PRIMARY_TEXT }}
    >
      {/* Header row: Primary title with configuration toggle */}
      <div className="flex justify-between items-center">
        <h2 
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.PRIMARY_TEXT }}
        >
          UI magician Agent
        </h2>
        <span className="text-lg" aria-hidden="true">⚙</span>
      </div>

      {/* Subtitle row: Contextual information about the current scope */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-xs" style={{ color: COLORS.SECONDARY_TEXT }} aria-hidden="true">∧</span>
        <p className="text-[11.5px] font-semibold" style={{ color: COLORS.SECONDARY_TEXT }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section heading: User affordance for creating new entries */}
      <div className="flex items-center gap-2 mt-12 mb-4">
        <span className="text-xs" style={{ color: COLORS.HEADING_TEXT }} aria-hidden="true">∧</span>
        <h3 className="text-[13.5px] font-semibold" style={{ color: COLORS.HEADING_TEXT }}>
          Add New Design
        </h3>
      </div>

      {/* Form area: Credentials and source URL inputs */}
      <div className="space-y-3">
        <div>
          <label className="flex items-center gap-1 text-[11.5px] font-semibold mb-1" style={{ color: COLORS.LABEL_TEXT_1 }}>
            Personal Access Token
            <span 
              className="border border-current rounded-full px-1 text-[10px] leading-tight" 
              title="Information"
            >
              ℹ
            </span>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md text-[11.5px] font-semibold focus:outline-none transition-colors"
            style={{ 
              backgroundColor: COLORS.INPUT_BG, 
              border: `1px solid ${COLORS.INPUT_BORDER}`,
              color: '#737470' 
            }}
          />
        </div>
        <div>
          <label className="flex items-center gap-1 text-[11.5px] font-semibold mb-1" style={{ color: COLORS.LABEL_TEXT_2 }}>
            Design URL
            <span 
              className="border border-current rounded-full px-1 text-[10px] leading-tight" 
              title="Information"
            >
              ℹ
            </span>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md text-[11.5px] font-semibold focus:outline-none transition-colors"
            style={{ 
              backgroundColor: COLORS.INPUT_BG, 
              border: `1px solid ${COLORS.INPUT_BORDER_LIGHT}`,
              color: '#71726e' 
            }}
          />
        </div>
      </div>

      {/* Button row: Primary actions for the agent */}
      <div className="flex gap-3 mt-6">
        <button 
          className="flex-1 py-2 px-4 text-[11.5px] font-semibold rounded-lg hover:brightness-110 active:brightness-90 transition-all"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 px-4 text-[11.5px] font-semibold rounded-lg hover:brightness-110 active:brightness-90 transition-all"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section heading: Historical log indicator */}
      <h3 
        className="text-[13.5px] font-semibold mt-8"
        style={{ color: COLORS.FOOTER_HEADING }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};
