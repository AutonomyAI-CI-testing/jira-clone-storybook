
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuChevronUp } from 'react-icons/lu';
import { BsInfoCircle } from 'react-icons/bs';

/**
 * TestCard component displays a design agent configuration interface.
 * It includes fields for authentication tokens and design URLs, along with action buttons.
 */
const TestCard: React.FC = () => {
  // Shared text colors for consistency
  const TEXT_DIM = "text-[#b5b5b5]";
  const TEXT_MUTED = "text-[#8b9291]";
  const TEXT_SECONDARY = "text-[#a4a4a3]";

  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 max-w-sm">
      {/* Header Section */}
      <div className="flex justify-between items-center px-5 pt-5">
        <h2 className={`${TEXT_DIM} text-sm font-semibold`}>UI magician Agent</h2>
        <IoSettingsOutline size={18} className={TEXT_DIM} />
      </div>

      {/* Status/Context Indicator */}
      <div className="flex items-center px-5 pt-1">
        <LuChevronUp className={TEXT_MUTED} size={16} />
        <p className={`${TEXT_MUTED} text-xs font-semibold truncate`}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="h-8" aria-hidden="true" />

      {/* Section Header */}
      <div className="flex items-center px-5 mt-4 group cursor-pointer">
        <LuChevronUp className="text-[#b2b2b1]" size={16} />
        <h3 className="text-[#b2b2b1] text-sm font-semibold ml-2">Add New Design</h3>
      </div>

      {/* Input Fields Section */}
      <div className="px-5 mt-4 space-y-4">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="pat" className={`${TEXT_SECONDARY} text-xs font-semibold uppercase tracking-wider`}>
              Personal Access Token
            </label>
            <BsInfoCircle size={12} className={`${TEXT_SECONDARY} ml-1`} title="Your Figma Personal Access Token" />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#272822] border-2 border-[#929291] text-[#b5b5b5] placeholder:text-[#737470] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="design-url" className={`${TEXT_SECONDARY} text-xs font-semibold uppercase tracking-wider`}>
              Design URL
            </label>
            <BsInfoCircle size={12} className={`${TEXT_SECONDARY} ml-1`} title="Link to the Figma design file" />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[#b5b5b5] placeholder:text-[#737470] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3 mt-6 px-5">
        <button className="bg-[#843a17] hover:bg-[#9a451d] transition-colors rounded text-[#8c8078] text-xs font-semibold px-8 py-2.5">
          Awesome
        </button>
        <button className="bg-[#843a17] hover:bg-[#9a451d] transition-colors rounded text-[#8c8078] text-xs font-semibold px-8 py-2.5">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h3 className="text-[#b0b0b0] text-sm font-semibold px-5 pt-6">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
