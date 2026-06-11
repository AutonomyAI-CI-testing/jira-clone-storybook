
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

// Style constants matching Figma design specs from requirements
const COLORS = {
  header: '#b5b5b5',
  subtitle: '#8b9291',
  sectionHeading: '#b2b2b1',
  label: '#a4a4a3',
  placeholder: '#737470',
  buttonBg: '#b5541a',
  recentBreakdowns: '#b0b0b0',
} as const;

const FONT_SIZES = {
  large: '13.5px',
  small: '11.5px',
} as const;

/**
 * TestCard - A smoke-test component mirroring the "UI magician Agent" panel.
 * Built to verify the component generation pipeline output matches Figma specs.
 */
const TestCard = () => {
  return (
    <div id="testElem" className="w-full p-4 bg-[#2a2a2a] rounded-lg shadow-lg min-w-[350px]">
      {/* Header section with title and gear icon */}
      <div className="flex items-center justify-between mb-2">
        <h1 
          className="font-semibold" 
          style={{ color: COLORS.header, fontSize: FONT_SIZES.large }}
        >
          UI magician Agent
        </h1>
        <AiOutlineSetting className="text-lg" style={{ color: COLORS.header }} />
      </div>

      {/* Subtitle with chevron and status message */}
      <div className="flex items-center space-x-1 mb-6">
        <FiChevronUp className="text-lg" style={{ color: COLORS.subtitle }} />
        <p 
          className="font-semibold"
          style={{ color: COLORS.subtitle, fontSize: FONT_SIZES.small }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Section toggle: Add New Design */}
      <div className="flex items-center space-x-1 mt-4 mb-4">
        <FiChevronUp className="text-lg" style={{ color: COLORS.sectionHeading }} />
        <h2 
          className="font-semibold"
          style={{ color: COLORS.sectionHeading, fontSize: FONT_SIZES.large }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form Section: Figma Credentials */}
      <div className="mb-4">
        <div className="flex items-center space-x-1 mb-1">
          <label 
            htmlFor="pat" 
            className="font-semibold"
            style={{ color: COLORS.label, fontSize: FONT_SIZES.small }}
          >
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.label }} />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#333] border border-[#555] font-semibold outline-none"
          style={{ 
            color: COLORS.placeholder, 
            fontSize: FONT_SIZES.small 
          }}
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-1 mb-1">
          <label 
            htmlFor="design-url" 
            className="font-semibold"
            style={{ color: COLORS.label, fontSize: FONT_SIZES.small }}
          >
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.label }} />
        </div>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#333] border border-[#555] font-semibold outline-none"
          style={{ 
            color: COLORS.placeholder, 
            fontSize: FONT_SIZES.small 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around space-x-4 mb-6">
        <button 
          className="flex-1 px-6 py-2 text-white font-semibold rounded-lg"
          style={{ backgroundColor: COLORS.buttonBg, fontSize: FONT_SIZES.small }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 px-6 py-2 text-white font-semibold rounded-lg"
          style={{ backgroundColor: COLORS.buttonBg, fontSize: FONT_SIZES.small }}
        >
          Prepare
        </button>
      </div>

      {/* Section Footer */}
      <h2 
        className="font-semibold mt-4"
        style={{ color: COLORS.recentBreakdowns, fontSize: FONT_SIZES.large }}
      >
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
