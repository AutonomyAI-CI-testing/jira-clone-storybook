
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Figma-sourced color palette
const COLORS = {
  bg: '#1a1a1a',
  headerText: '#b5b5b5',
  subtitleText: '#8b9291',
  sectionHeaderText: '#b2b2b1',
  labelText: '#a4a4a3',
  inputBg: '#2d2d2d',
  inputBorder: '#555',
  buttonBrown1: '#8B4513',
  buttonBrown2: '#9B4E20',
  buttonText: '#8c8078',
  recentBreakdowns: '#b0b0b0',
};

// Standardized font sizes from design
const FONT_SIZES = {
  title: '13.5px',
  subtitle: '11.5px',
  sectionHeader: '13.5px',
  label: '11.5px',
  input: '11.5px',
  button: '11.5px',
};

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg }}
      className="p-4 rounded-lg shadow-lg w-80 font-sans"
    >
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: COLORS.headerText, fontSize: FONT_SIZES.title, fontWeight: '600' }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline color={COLORS.headerText} size={20} />
      </div>

      {/* Subtitle Row: Context hint */}
      <div className="flex items-center mb-6">
        <FiChevronUp color={COLORS.subtitleText} size={16} className="mr-2" />
        <p style={{ color: COLORS.subtitleText, fontSize: FONT_SIZES.subtitle, fontWeight: '600' }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <FiChevronUp color={COLORS.sectionHeaderText} size={16} className="mr-2" />
          <h3 style={{ color: COLORS.sectionHeaderText, fontSize: FONT_SIZES.sectionHeader, fontWeight: '600' }}>
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat" className="block mb-2 flex items-center">
            <span style={{ color: COLORS.labelText, fontSize: FONT_SIZES.label, fontWeight: '600' }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle color={COLORS.labelText} size={14} className="ml-1" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md border text-white placeholder:text-[#737470]"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              fontSize: FONT_SIZES.input,
              fontWeight: '600',
            }}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4">
          <label htmlFor="designUrl" className="block mb-2 flex items-center">
            <span style={{ color: COLORS.labelText, fontSize: FONT_SIZES.label, fontWeight: '600' }}>
              Design URL
            </span>
            <AiOutlineInfoCircle color={COLORS.labelText} size={14} className="ml-1" />
          </label>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md border text-white placeholder:text-[#71726e]"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              fontSize: FONT_SIZES.input,
              fontWeight: '600',
            }}
          />
        </div>

        {/* Action Buttons: Brownish-orange theme */}
        <div className="flex justify-between gap-4 mt-6">
          <button
            className="flex-1 p-2 rounded-lg"
            style={{
              backgroundColor: COLORS.buttonBrown1,
              color: COLORS.buttonText,
              fontSize: FONT_SIZES.button,
              fontWeight: '600',
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 p-2 rounded-lg"
            style={{
              backgroundColor: COLORS.buttonBrown2,
              color: COLORS.buttonText,
              fontSize: FONT_SIZES.button,
              fontWeight: '600',
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section heading */}
      <div>
        <h3 style={{ color: COLORS.recentBreakdowns, fontSize: FONT_SIZES.sectionHeader, fontWeight: '600' }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
