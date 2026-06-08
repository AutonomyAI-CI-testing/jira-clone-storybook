import React from 'react';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';

/**
 * TestCard - UI component for agent configuration and design management.
 *
 * Displays a dark-themed card interface that allows users to:
 * - View agent status and current task
 * - Add new Figma design imports with personal access tokens
 * - View recent design breakdowns
 *
 * The component uses hardcoded colors and spacing to match a specific
 * design system. All color values are intentional design choices and
 * should not be changed without updating the design specification.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[254px] p-4 text-white rounded-lg">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Collapsible Row */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-[#8b9291] text-lg mr-1" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Divider / Spacing */}
      <div className="my-4 border-t border-gray-700"></div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <HiChevronUp className="text-[#b2b2b1] text-lg mr-1" />
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</span>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-3 ml-4">
          <label className="flex items-center text-[#a4a4a3] text-[11.5px] mb-1">
            Personal Access Token
            <HiInformationCircle className="ml-1 text-[#a4a4a3] text-sm" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 text-[11.5px] bg-[#272822] border border-[#a5adad] rounded-[4px] placeholder-[#737470] focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4 ml-4">
          <label className="flex items-center text-[#a4a4a3] text-[11.5px] mb-1">
            Design URL
            <HiInformationCircle className="ml-1 text-[#a4a4a3] text-sm" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 text-[11.5px] bg-[#272822] border border-[#929291] rounded-[4px] placeholder-[#737470] focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 ml-4">
          <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-1 px-3 rounded-[4px]">
            Awesome
          </button>
          <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-1 px-3 rounded-[4px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Header */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
