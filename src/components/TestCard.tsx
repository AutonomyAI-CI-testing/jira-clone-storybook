import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Colors and styles based on Figma design specification.
 * Using inline styles for colors because this file is outside the 
 * standard Tailwind content path in tailwind.config.js.
 */
const COLORS = {
  bgMain: '#1e1e1e',
  bgInput: '#252525',
  bgButton: '#8b4513', // Brownish orange
  borderInput: '#5a5a5a',
  textPrimary: '#c8c8c8',
  textSecondary: '#8b9291',
  textTertiary: '#c0c0bf',
  textLabel: '#b0b0af',
  textInput: '#b5b5b5',
  textButton: '#c8a080',
  textFooter: '#c0c0c0',
} as const;

/**
 * TestCard - A self-contained visual reproduction of a UI magician Agent plugin panel.
 * Matches Figma design exactly using a combination of Tailwind layout and inline colors.
 */
export const TestCard = () => {
  return (
    <div 
      id="testElem" 
      className="w-full" 
      style={{ 
        backgroundColor: COLORS.bgMain, 
        maxWidth: '380px', 
        padding: '20px 20px 16px' 
      }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
        <h2 className="font-semibold" style={{ color: COLORS.textPrimary, fontSize: '18px' }}>
          UI magician Agent
        </h2>
        <FiSettings color={COLORS.textPrimary} size="22" />
      </div>

      {/* Scope subtitle */}
      <div className="flex items-center" style={{ marginBottom: '16px' }}>
        <FiChevronUp color={COLORS.textSecondary} size="18" style={{ marginRight: '8px', flexShrink: 0 }} />
        <span className="font-semibold" style={{ color: COLORS.textSecondary, fontSize: '14px' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Main configuration section */}
      <div style={{ marginBottom: '24px' }}>
        <div className="flex items-center" style={{ marginBottom: '14px' }}>
          <FiChevronUp color={COLORS.textTertiary} size="18" style={{ marginRight: '8px', flexShrink: 0 }} />
          <h3 className="font-semibold" style={{ color: COLORS.textTertiary, fontSize: '18px' }}>
            Add New Design
          </h3>
        </div>
        
        {/* Form fields */}
        <div style={{ marginBottom: '12px' }}>
          <label className="flex items-center font-semibold" style={{ color: COLORS.textLabel, fontSize: '14px', marginBottom: '8px' }}>
            Personal Access Token <FiInfo color={COLORS.textLabel} size="16" style={{ marginLeft: '6px' }} />
          </label>
          <input 
            type="text" 
            placeholder="figd_xxxxxxxxxxxxxxxxxx" 
            className="w-full rounded border" 
            style={{ 
              backgroundColor: COLORS.bgInput, 
              borderColor: COLORS.borderInput, 
              color: COLORS.textInput, 
              fontSize: '14px', 
              padding: '10px 14px', 
              outline: 'none' 
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label className="flex items-center font-semibold" style={{ color: COLORS.textLabel, fontSize: '14px', marginBottom: '8px' }}>
            Design URL <FiInfo color={COLORS.textLabel} size="16" style={{ marginLeft: '6px' }} />
          </label>
          <input 
            type="text" 
            placeholder="https://www.figma.com/file/:" 
            className="w-full rounded border" 
            style={{ 
              backgroundColor: COLORS.bgInput, 
              borderColor: COLORS.borderInput, 
              color: COLORS.textInput, 
              fontSize: '14px', 
              padding: '10px 14px', 
              outline: 'none' 
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex" style={{ gap: '16px', marginBottom: '20px' }}>
          <button 
            className="flex-1 rounded font-semibold transition-opacity hover:opacity-90" 
            style={{ 
              backgroundColor: COLORS.bgButton, 
              color: COLORS.textButton, 
              fontSize: '14px', 
              padding: '12px 20px', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            Awesome
          </button>
          <button 
            className="flex-1 rounded font-semibold transition-opacity hover:opacity-90" 
            style={{ 
              backgroundColor: COLORS.bgButton, 
              color: COLORS.textButton, 
              fontSize: '14px', 
              padding: '12px 20px', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer section */}
      <div>
        <h3 className="font-semibold" style={{ color: COLORS.textFooter, fontSize: '18px' }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
