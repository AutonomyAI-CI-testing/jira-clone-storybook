
import React from 'react';
import { FaCog, FaChevronUp, FaInfoCircle } from 'react-icons/fa';

// Design tokens from Figma spec
const COLORS = {
  background: '#1a1a1a',
  inputBg: '#272822',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
  text: {
    primary: '#b5b5b5',
    secondary: '#8b9291',
    muted: '#b2b2b1',
    labelPrimary: '#a4a4a3',
    labelSecondary: '#a3a3a2',
    placeholderPrimary: '#737470',
    placeholderSecondary: '#71726e',
    headerRecent: '#b0b0b0',
  },
  border: {
    inputPrimary: '#929291',
    inputSecondary: '#a5adad',
  },
} as const;

/**
 * TestCard component represents the UI Magician Agent design panel.
 * It's a self-contained component used for visual review of the design system.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="p-4 w-[254px] min-h-[508px] flex flex-col gap-3 font-sans"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: COLORS.text.primary }}>
          UI magician Agent
        </span>
        <FaCog style={{ color: COLORS.text.primary }} size={16} />
      </div>

      {/* Chevron Subtitle Row */}
      <div className="flex items-center gap-2">
        <FaChevronUp size={8} style={{ color: COLORS.text.secondary }} />
        <span className="text-xs font-semibold" style={{ color: COLORS.text.secondary }}>
          From entire frame to a singl...
        </span>
      </div>
      
      {/* Spacer to create visual separation for the form */}
      <div className="mt-8"></div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <FaChevronUp size={10} style={{ color: COLORS.text.muted }} />
        <span className="text-sm font-semibold" style={{ color: COLORS.text.muted }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: COLORS.text.labelPrimary }}>
            Personal Access Token
          </span>
          <FaInfoCircle size={12} style={{ color: COLORS.text.labelPrimary }} />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border rounded text-xs font-semibold px-3 py-2 mt-1 outline-none"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.border.inputPrimary,
            color: COLORS.text.placeholderPrimary,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: COLORS.text.labelSecondary }}>
            Design URL
          </span>
          <FaInfoCircle size={12} style={{ color: COLORS.text.labelSecondary }} />
        </div>
        <input
          placeholder="https://www.figma.com/file/:"
          className="w-full border rounded text-xs font-semibold px-3 py-2 mt-1 outline-none"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.border.inputSecondary,
            color: COLORS.text.placeholderSecondary,
          }}
        />
      </div>

      {/* Buttons Row - Principle CTA area */}
      <div className="flex gap-3 mt-4 justify-center">
        <button 
          className="flex-1 text-xs font-semibold py-2.5 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 text-xs font-semibold py-2.5 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div className="mt-8">
        <span className="text-sm font-semibold" style={{ color: COLORS.text.headerRecent }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
