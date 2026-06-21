import React from 'react';
import { RiSettings3Line } from 'react-icons/ri';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Design tokens for the TestCard component.
 * Uses arbitrary hex values to match the Figma design exactly, 
 * bypassing the project's external CSS theme variables which may not resolve 
 * in isolation (e.g. Storybook).
 */
const COLORS = {
  bg: '#1c1c1c',
  inputBg: '#2a2a2a',
  inputBorder: '#3a3a3a',
  orange: '#c47a3a',
  orangeBtn: '#b5451b',
  white: '#ffffff',
  gray: '#9ca3af',
};

/**
 * TestCard - A standalone smoke test component.
 * 
 * This component reproduces a specific Figma design for the "UI magician Agent".
 * It is purely visual and uses hardcoded content for verification purposes.
 * Ref: AUT-29b2
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="p-6 rounded-lg shadow-xl"
      style={{ 
        backgroundColor: COLORS.bg, 
        color: COLORS.white, 
        width: '24rem',
        // Ensure fonts are handled if tailwind defaults aren't enough
        fontFamily: 'sans-serif'
      }}
    >
      {/* Header Row: Agent name and configuration access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl" style={{ color: COLORS.white }}>
          UI magician Agent
        </h2>
        <button 
          aria-label="Settings" 
          type="button" 
          className="p-1 hover:opacity-80 transition-opacity"
        >
          <RiSettings3Line style={{ color: COLORS.gray, fontSize: '1.5rem' }} />
        </button>
      </div>

      {/* Context Row: Displays summarized context of the current selection */}
      <div className="flex items-center mb-6 cursor-default">
        <BsChevronUp style={{ color: COLORS.gray, marginRight: '0.5rem' }} />
        <p className="text-sm" style={{ color: COLORS.orange }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Action Header: Section for adding new designs to the agent */}
      <div className="flex items-center mb-6 cursor-default">
        <BsChevronUp style={{ color: COLORS.white, marginRight: '0.5rem' }} />
        <h3 className="font-bold text-lg" style={{ color: COLORS.white }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input: Required for Figma API authentication */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="flex items-center text-sm font-bold mb-2 uppercase tracking-wide"
          style={{ color: COLORS.gray }}
        >
          Personal Access Token
          <AiOutlineInfoCircle style={{ marginLeft: '0.4rem', cursor: 'help' }} />
        </label>
        <input
          id="pat"
          type="text"
          readOnly
          value=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-3 rounded-md transition-all focus:ring-1 focus:ring-orange-800"
          style={{
            backgroundColor: COLORS.inputBg,
            border: `1px solid ${COLORS.inputBorder}`,
            color: COLORS.white,
            outline: 'none',
          }}
        />
      </div>

      {/* Design URL Input: Specific Figma file targeted for breakdown */}
      <div className="mb-6">
        <label
          htmlFor="design-url"
          className="flex items-center text-sm font-bold mb-2 uppercase tracking-wide"
          style={{ color: COLORS.gray }}
        >
          Design URL
          <AiOutlineInfoCircle style={{ marginLeft: '0.4rem', cursor: 'help' }} />
        </label>
        <input
          id="design-url"
          type="text"
          readOnly
          value=""
          placeholder="https://www.figma.com/file/:"
          className="w-full p-3 rounded-md transition-all focus:ring-1 focus:ring-orange-800"
          style={{
            backgroundColor: COLORS.inputBg,
            border: `1px solid ${COLORS.inputBorder}`,
            color: COLORS.white,
            outline: 'none',
          }}
        />
      </div>

      {/* Primary Actions: Trigger breakdown or preparation workflows */}
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          className="flex-1 py-3 rounded-md font-bold transition-transform active:scale-95"
          style={{ backgroundColor: COLORS.orangeBtn, color: COLORS.white }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-3 rounded-md font-bold transition-transform active:scale-95"
          style={{ backgroundColor: COLORS.orangeBtn, color: COLORS.white }}
        >
          Prepare
        </button>
      </div>

      {/* History Section Header */}
      <div className="border-t pt-4" style={{ borderColor: COLORS.inputBorder }}>
        <h3 className="font-bold text-lg" style={{ color: COLORS.white }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
