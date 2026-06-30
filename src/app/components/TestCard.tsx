import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Standalone UI replication of the "UI magician Agent" panel from the Figma design.
// Self-contained with no props; root element carries id="testElem" for test targeting.
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 w-80 bg-[#2a2a2a] text-white font-sans text-xs">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-sm font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Collapsible Row */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-[#8b9291] mr-1" />
        <span className="text-[#8b9291] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Spacer Gap */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-[#b2b2b1] mr-1" />
        <h3 className="text-[#b2b2b1] text-sm font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="text-[#a4a4a3] font-semibold mr-1">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#333] border border-[#555] text-[#a4a4a3] placeholder-[#737470] focus:outline-none focus:border-[#b85c2a]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designUrl" className="text-[#a4a4a3] font-semibold mr-1">Design URL</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#333] border border-[#555] text-[#a4a4a3] placeholder-[#737470] focus:outline-none focus:border-[#b85c2a]"
        />
      </div>

      {/* Buttons Row */}
      <div className="flex justify-between gap-2 mb-6">
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#9e4b1e] text-[#8c8078] text-sm font-semibold focus:outline-none hover:bg-[#b85c2a]">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg bg-[#9e4b1e] text-[#8c8078] text-sm font-semibold focus:outline-none hover:bg-[#b85c2a]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] text-sm font-semibold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
