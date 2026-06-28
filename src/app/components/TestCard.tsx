import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Colors matched from Figma design specifications
const COLORS = {
  BACKGROUND_DARK: '#1a1a1a', // Outer wrapper background
  CARD_BODY: '#272822', // Main card background
  TEXT_TITLE: '#b5b5b5',
  TEXT_SUBTITLE: '#8b9291',
  TEXT_HEADING: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  TEXT_PLACEHOLDER: '#737470',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  FOOTER_TEXT: '#b0b0b0',
  BORDER_PAT: '#a5adad',
  BORDER_URL: '#929291',
} as const;

/**
 * TestCard component replicates the "UI magician Agent" panel from Figma.
 * It serves as a visual fidelity test fixture.
 */
export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-4 font-sans">
      <div className="bg-[#272822] rounded-lg p-4 w-[280px] space-y-4">
        {/* Header Section: Title and settings affordance */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h1>
          <IoSettingsOutline className="text-[#b5b5b5]" title="Settings" />
        </div>

        {/* Subtitle Row: Status or context message */}
        <div className="flex items-center gap-1">
          <FiChevronUp className="text-[#8b9291] scale-75" aria-hidden="true" />
          <p className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</p>
        </div>

        {/* Add New Design Section */}
        <div className="pt-4">
          <div className="flex items-center gap-1">
            <FiChevronUp className="text-[#b2b2b1] scale-75" aria-hidden="true" />
            <h2 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h2>
          </div>
        </div>

        {/* Personal Access Token Field: Required for Figma API authentication */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <label htmlFor="pat" className="text-[#a4a4a3] text-xs font-semibold">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-[#a4a4a3]" title="Required for Figma API access" />
          </div>
          <input
            type="password" // Changed to password for security-themed inputs, even if mocked
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-xs text-[#737470] font-semibold placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
          />
        </div>

        {/* Design URL Field: Points to the Figma file to be processed */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <label htmlFor="design-url" className="text-[#a3a3a2] text-xs font-semibold">
              Design URL
            </label>
            <AiOutlineInfoCircle className="text-[#a3a3a2]" title="Link to your Figma design file" />
          </div>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-xs text-[#71726e] font-semibold placeholder-[#71726e] focus:outline-none focus:ring-1 focus:ring-[#929291]"
          />
        </div>

        {/* Buttons Row: Core actions */}
        <div className="flex gap-3 justify-center pt-2">
          <button 
            type="button" 
            className="bg-[#843a17] text-[#8c8078] text-xs font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Awesome
          </button>
          <button 
            type="button" 
            className="bg-[#843a17] text-[#8c8078] text-xs font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Prepare
          </button>
        </div>

        {/* Footer: List of previous activity */}
        <div className="pt-4">
          <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
}
