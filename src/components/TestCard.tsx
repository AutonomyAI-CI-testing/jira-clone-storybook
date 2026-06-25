
import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline, IoInformationCircleOutline } from 'react-icons/io5';

/**
 * Design tokens extracted from Figma to ensure visual consistency.
 * These reflect the specific dark theme requirements of the "UI magician Agent".
 */
const COLORS = {
  cardBg: '#272822',
  headerText: '#b5b5b5',
  mutedText: '#8b9291',
  headingText: '#b2b2b1',
  labelText: '#a4a4a3',
  urlLabelText: '#a3a3a2',
  placeholderPat: '#737470',
  placeholderUrl: '#71726e',
  inputBorderPat: '#a5adad',
  inputBorderUrl: '#929291',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
  recentBreakdowns: '#b0b0b0',
} as const;

/**
 * TestCard is a standalone presentational component representing a settings card.
 * It uses inline styles for color-specific values to bypass Tailwind's content scanning
 * limits in this project's configuration while maintaining layout via Tailwind utilities.
 */
export const TestCard = () => {
  return (
    <div 
      id="testElem" 
      style={{ backgroundColor: COLORS.cardBg }} 
      className="p-4 w-80 rounded-lg shadow-xl"
    >
      {/* Header: Identity and Settings */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline size={20} style={{ color: COLORS.headerText }} aria-hidden="true" />
      </div>

      {/* Status/Context row */}
      <div className="flex items-center mb-6">
        <IoChevronUpOutline size={20} style={{ color: COLORS.mutedText }} aria-hidden="true" />
        <p className="text-sm ml-2 truncate" style={{ color: COLORS.mutedText }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Decorative/Spacing element matching Figma's vertical rhythm */}
      <div className="h-8" aria-hidden="true"></div>

      {/* Configuration Section Heading */}
      <div className="flex items-center mb-4">
        <h3 className="text-md font-semibold" style={{ color: COLORS.headingText }}>
          Add New Design
        </h3>
        <IoChevronUpOutline size={20} style={{ color: COLORS.headingText }} aria-hidden="true" />
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat-input" className="text-sm font-medium" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <IoInformationCircleOutline 
            size={16} 
            style={{ color: COLORS.labelText, marginLeft: '4px' }} 
            aria-label="Info about Personal Access Token"
          />
        </div>
        <input
          id="pat-input"
          type="password" // Typical for sensitive tokens, though placeholder is shown
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly // Standalone presentational component as per spec
          className="w-full p-2 rounded text-sm outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800"
          style={{ 
            backgroundColor: COLORS.cardBg, 
            border: `1px solid ${COLORS.inputBorderPat}`, 
            color: COLORS.placeholderPat 
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="url-input" className="text-sm font-medium" style={{ color: COLORS.urlLabelText }}>
            Design URL
          </label>
          <IoInformationCircleOutline 
            size={16} 
            style={{ color: COLORS.urlLabelText, marginLeft: '4px' }} 
            aria-label="Info about Design URL"
          />
        </div>
        <input
          id="url-input"
          type="url"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full p-2 rounded text-sm outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800"
          style={{ 
            backgroundColor: COLORS.cardBg, 
            border: `2px solid ${COLORS.inputBorderUrl}`, 
            color: COLORS.placeholderUrl 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          type="button"
          className="w-1/2 py-2 px-4 rounded font-semibold text-sm transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText, borderRadius: '4px' }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-1/2 py-2 px-4 rounded font-semibold text-sm transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText, borderRadius: '4px' }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div>
        <h3 className="text-md font-semibold" style={{ color: COLORS.recentBreakdowns }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
