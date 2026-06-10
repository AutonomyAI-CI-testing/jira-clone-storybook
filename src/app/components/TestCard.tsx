
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design tokens matching the Figma design
const COLORS = {
  background: '#1a1c1a',
  inputBackground: '#2a2d2a',
  borderColor: '#444',
  textPrimary: '#dcdcdc',
  textSecondary: '#8b9291',
  textLabel: '#a4a4a3',
  placeholder: '#555',
  buttonPrimary: '#8c3d1d',
  buttonHover: '#7a3418',
  iconMuted: '#b2b2b1',
};

/**
 * TestCard renders the UI Magician Agent configuration panel.
 * It allows users to set up their Figma integration tokens and design URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="p-10 w-[420px] font-sans flex flex-col gap-8 min-h-[700px]" 
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header section with title and configuration entry point */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h1>
        <IoSettingsOutline size={28} color={COLORS.textPrimary} />
      </div>

      {/* Summary/Description row with expand/collapse control */}
      <div className="flex items-center gap-3">
        <FiChevronUp size={20} color={COLORS.textSecondary} />
        <p className="text-lg font-medium" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Visual spacer to separate introductory content from form fields */}
      <div className="mt-10" />

      {/* Section header for the design input form */}
      <div className="flex items-center gap-3">
        <FiChevronUp size={20} color={COLORS.iconMuted} />
        <h2 className="text-xl font-semibold" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h2>
      </div>

      {/* Form Field: Personal Access Token */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" className="text-lg" style={{ color: COLORS.textLabel }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={20} color={COLORS.textLabel} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border rounded-md px-4 py-4 text-lg placeholder-[#555] text-white focus:outline-none focus:ring-1 focus:ring-amber-800" 
          style={{ 
            backgroundColor: COLORS.inputBackground, 
            borderColor: COLORS.borderColor 
          }}
        />
      </div>

      {/* Form Field: Design URL */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-lg" style={{ color: COLORS.textLabel }}>
            Design URL
          </label>
          <AiOutlineInfoCircle size={20} color={COLORS.textLabel} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border rounded-md px-4 py-4 text-lg placeholder-[#555] text-white focus:outline-none focus:ring-1 focus:ring-amber-800" 
          style={{ 
            backgroundColor: COLORS.inputBackground, 
            borderColor: COLORS.borderColor 
          }}
        />
      </div>

      {/* Primary Actions: Awesome and Prepare buttons */}
      <div className="flex gap-4 justify-between mt-6">
        <button 
          className="flex-1 text-lg font-semibold py-5 rounded-lg transition-colors" 
          style={{ backgroundColor: COLORS.buttonPrimary, color: COLORS.textPrimary }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 text-lg font-semibold py-5 rounded-lg transition-colors" 
          style={{ backgroundColor: COLORS.buttonPrimary, color: COLORS.textPrimary }}
        >
          Prepare
        </button>
      </div>

      {/* Secondary section for historical activity */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
