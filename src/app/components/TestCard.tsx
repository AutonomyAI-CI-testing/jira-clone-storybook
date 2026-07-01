import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Helper component for labeled input fields with an info icon.
 * Used for consistency in styling and structure within the TestCard.
 */
interface InputGroupProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputGroup = ({ id, label, placeholder }: InputGroupProps) => (
  <div className="mt-3 first:mt-4">
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#222222] border border-[#3a3a3a] text-white placeholder-[#737470] text-sm focus:outline-none focus:ring-1 focus:ring-[#b85c2c] transition-all"
    />
  </div>
);

/**
 * TestCard - A smoke-test component visually replicating a UI Magician Agent panel.
 * This is a static visual representation with no external props or state.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-lg p-5 w-64 flex flex-col font-sans shadow-xl">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5] cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Collapsible Indicator Row - Shows current selection scope */}
      <div className="flex items-center gap-2 mt-2 cursor-pointer group">
        <FiChevronUp className="text-[#8b9291] group-hover:text-white transition-colors" />
        <span className="text-[#8b9291] text-xs group-hover:text-white transition-colors">
          From entire frame to a singl...
        </span>
      </div>

      {/* Configuration Section Header */}
      <div className="flex items-center gap-2 mt-6 cursor-pointer group">
        <FiChevronUp className="text-[#b2b2b1] group-hover:text-white transition-colors" />
        <span className="text-[#b2b2b1] font-semibold text-sm group-hover:text-white transition-colors">
          Add New Design
        </span>
      </div>

      <InputGroup
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputGroup
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center mt-4">
        <button className="flex-1 bg-[#b85c2c] hover:bg-[#c96d3d] text-[#e0d5cc] rounded-lg px-2 py-2 text-sm font-medium transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2c] hover:bg-[#c96d3d] text-[#e0d5cc] rounded-lg px-2 py-2 text-sm font-medium transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t border-[#3a3a3a] pt-4">
        <span className="text-[#b0b0b0] font-semibold text-sm cursor-pointer hover:text-white transition-colors">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
