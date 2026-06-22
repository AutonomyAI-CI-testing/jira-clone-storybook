
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';

// Constants for hardcoded Figma colors to improve readability.
// These exact values represent the design spec.
const COLORS = {
  bg: '#1c1c1c',
  headerText: '#b5b5b5',
  mutedText: '#8b9291',
  sectionHeading: '#b2b2b1',
  label: '#a4a4a3',
  labelAlt: '#a3a3a2',
  inputPlaceholder: '#737470',
  inputPlaceholderAlt: '#71726e',
  buttonBg: '#8B4513',
  buttonText: '#8c8078',
  recentBreakdowns: '#b0b0b0',
} as const;

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 text-white min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold" style={{ color: COLORS.headerText }}>UI magician Agent</h1>
        <IoSettingsOutline className="text-2xl" style={{ color: COLORS.headerText }} />
      </div>

      {/* Collapsed Chevron Row */}
      <div className="flex items-center mb-6">
        <MdKeyboardArrowUp className="text-lg mr-2" style={{ color: COLORS.mutedText }} />
        <p className="text-sm" style={{ color: COLORS.mutedText }}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <MdKeyboardArrowUp className="text-lg mr-2" style={{ color: COLORS.sectionHeading }} />
        <h2 className="text-lg font-bold" style={{ color: COLORS.sectionHeading }}>Add New Design</h2>
      </div>

      {/* Form Area */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Input */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="pat" className="text-sm mr-2" style={{ color: COLORS.label }}>Personal Access Token</label>
            <AiOutlineInfoCircle className="text-base" style={{ color: COLORS.label }} />
          </div>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#2a2a2a] border border-[#444] text-sm"
            style={{ color: COLORS.inputPlaceholder }}
          />
        </div>

        {/* Design URL Input */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="designUrl" className="text-sm mr-2" style={{ color: COLORS.labelAlt }}>Design URL</label>
            <AiOutlineInfoCircle className="text-base" style={{ color: COLORS.labelAlt }} />
          </div>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#2a2a2a] border border-[#444] text-sm"
            style={{ color: COLORS.inputPlaceholderAlt }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="flex-1 rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h2 className="text-lg font-bold" style={{ color: COLORS.recentBreakdowns }}>Recent Breakdowns</h2>
      </div>
    </div>
  );
};
