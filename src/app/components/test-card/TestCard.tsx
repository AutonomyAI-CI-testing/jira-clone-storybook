import React from 'react';

/**
 * TestCard component
 * 
 * A self-contained smoke test component used to verify UI rendering and styling.
 * Colors and layout are based on a specific Figma design for a "UI magician Agent".
 * 
 * DESIGN CONSTANTS:
 * - Card Background: #2a2a2a
 * - Primary Action / Orange: #b85c2c
 * - Muted Orange Text: #c97a50
 * - Input Background: #1e1e1e
 */

const COLORS = {
  cardBg: '#2a2a2a',
  primary: '#b85c2c',
  mutedOrange: '#c97a50',
  inputBg: '#1e1e1e',
  borderColor: '#444',
} as const;

const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="p-4 w-[300px] flex flex-col gap-3 rounded-lg"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Header section with agent name and settings icon */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-white text-lg">UI magician Agent</span>
        <span className="text-white text-xl" aria-hidden="true">⚙</span>
      </div>

      {/* Collapsed state indicator/navigation */}
      <div className="flex items-center gap-2">
        <span style={{ color: COLORS.mutedOrange }}>^</span>
        <span 
          className="text-sm truncate"
          style={{ color: COLORS.mutedOrange }}
        >
          From entire frame to a singl...
        </span>
      </div>

      <div className="py-2" />

      {/* Section: Add New Design */}
      <div className="flex items-center gap-2">
        <span className="text-white">^</span>
        <span className="font-bold text-white text-lg">Add New Design</span>
      </div>

      {/* Input Field: Personal Access Token */}
      <div>
        <label htmlFor="personalAccessToken" className="text-white text-sm flex items-center gap-1 mb-1">
          Personal Access Token <span className="text-gray-400" aria-label="Information">ℹ</span>
        </label>
        <input
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="border text-gray-400 rounded px-3 py-2 w-full text-sm"
          style={{ 
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.borderColor 
          }}
        />
      </div>

      {/* Input Field: Design URL */}
      <div>
        <label htmlFor="designURL" className="text-white text-sm flex items-center gap-1 mb-1">
          Design URL <span className="text-gray-400" aria-label="Information">ℹ</span>
        </label>
        <input
          id="designURL"
          placeholder="https://www.figma.com/file/:"
          className="border text-gray-400 rounded px-3 py-2 w-full text-sm"
          style={{ 
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.borderColor 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2">
        <button 
          className="text-white rounded-lg px-4 py-2 text-sm font-medium flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Awesome
        </button>
        <button 
          className="text-white rounded-lg px-4 py-2 text-sm font-medium flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Prepare
        </button>
      </div>

      {/* Section: Recent Breakdowns */}
      <h3 className="font-bold text-white text-lg mt-2">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
