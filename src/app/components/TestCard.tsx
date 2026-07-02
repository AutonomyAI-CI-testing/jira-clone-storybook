
import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component
 * 
 * Replicates a "UI magician Agent" panel from the Figma design.
 * This is a static, visual-only component used for preview and testing.
 */
export const TestCard = () => {
  // Brand colors from Figma design
  const COLORS = {
    header: '#b5b5b5',
    subtitle: '#8b9291',
    sectionHeading: '#b2b2b1',
    label: '#a4a4a3',
    inputPlaceholder: '#737470',
    buttonBg: '#9c4a1a',
    buttonText: '#c8a898',
    recentHeading: '#b0b0b0',
    cardBg: '#2a2a2a',
    inputBg: '#1e1e1e',
    borderColor: '#555555',
  };

  return (
    <div 
      id="testElem" 
      className="p-4 rounded shadow-lg min-w-[300px]"
      style={{ backgroundColor: COLORS.cardBg, color: 'white' }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm" style={{ color: COLORS.header }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-gray-400 text-lg" aria-label="Settings" />
      </div>

      {/* Collapsed Status Row */}
      <div className="flex items-center mb-4">
        <IoChevronUp className="text-sm mr-1" style={{ color: COLORS.subtitle }} />
        <p className="text-xs" style={{ color: COLORS.subtitle }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Configuration Section Heading */}
      <div className="flex items-center mb-4">
        <IoChevronUp className="text-sm mr-1" style={{ color: COLORS.sectionHeading }} />
        <h3 className="font-semibold text-sm" style={{ color: COLORS.sectionHeading }}>
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <div className="mb-4">
        <label 
          htmlFor="accessToken" 
          className="flex items-center text-xs mb-1"
          style={{ color: COLORS.label }}
        >
          Personal Access Token 
          <AiOutlineInfoCircle className="ml-1" title="Enter your Figma Personal Access Token" />
        </label>
        <input
          id="accessToken"
          type="password"
          autoComplete="off"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border text-xs outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.borderColor, 
            color: COLORS.inputPlaceholder 
          }}
        />
      </div>

      <div className="mb-6">
        <label 
          htmlFor="designUrl" 
          className="flex items-center text-xs mb-1"
          style={{ color: COLORS.label }}
        >
          Design URL 
          <AiOutlineInfoCircle className="ml-1" title="The URL of your Figma design file" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded border text-xs outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.borderColor, 
            color: COLORS.inputPlaceholder 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2 mb-4">
        <button 
          type="button"
          className="flex-1 p-3 rounded-lg font-semibold text-xs transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button 
          type="button"
          className="flex-1 p-3 rounded-lg font-semibold text-xs transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="border-t pt-4" style={{ borderColor: COLORS.borderColor }}>
        <h3 className="font-semibold text-sm" style={{ color: COLORS.recentHeading }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
