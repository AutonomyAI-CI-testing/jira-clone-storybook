
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiChevronUp } from 'react-icons/hi';

/**
 * TestCard component
 * 
 * A static visual reference component that replicates a specific Figma design.
 * Used for design fidelity checks.
 */

// Constants for color palette from Figma design
const COLORS = {
  BACKGROUND: '#222',
  HEADER_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_TEXT: '#b2b2b1',
  LABEL_TEXT: '#a4a4a3',
  INPUT_BG: '#272822',
  INPUT_BORDER_PRIMARY: '#929291',
  INPUT_BORDER_SECONDARY: '#a5adad',
  PLACEHOLDER_TEXT: '#737470',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#e8d5c8',
  FOOTER_TEXT: '#b0b0b0',
};

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#222] p-5 font-sans">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</span>
        <AiOutlineSetting className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Status Row: Collapsed state indicator */}
      <div className="flex items-center mb-10">
        <HiChevronUp className="text-[#8b9291] text-lg mr-1" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Content Section: Form fields and actions */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-[#b2b2b1] text-lg mr-1" />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</span>
      </div>

      {/* Input Field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold mr-1">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-[11.5px]" />
        </div>
        <input
          id="pat"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 bg-[#272822] border-2 border-[#929291] text-[#737470] text-[11.5px] rounded-sm outline-none"
        />
      </div>

      {/* Input Field: Design URL */}
      <div className="mb-6">
        <div className="flex items-center mb-1">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-[11.5px] font-semibold mr-1">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-[11.5px]" />
        </div>
        <input
          id="designUrl"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] rounded-sm outline-none"
        />
      </div>

      {/* Primary Actions */}
      <div className="flex justify-between space-x-3 mb-8">
        <button className="h-[37px] flex-1 bg-[#843a17] text-[#e8d5c8] text-[11.5px] font-semibold rounded-[4px]">
          Awesome
        </button>
        <button className="h-[37px] flex-1 bg-[#843a17] text-[#e8d5c8] text-[11.5px] font-semibold rounded-[4px]">
          Prepare
        </button>
      </div>

      {/* Footer Section Heading */}
      <div className="mt-2">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
