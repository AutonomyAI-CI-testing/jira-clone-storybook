import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1e1e1e] p-4 text-white">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h1>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center mb-6 pl-1">
        <FiChevronUp className="text-[#8b9291] text-md mr-1" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FiChevronUp className="text-[#b2b2b1] text-md mr-1" />
          <h2 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label htmlFor="token" className="text-[#a4a4a3] text-[11.5px] font-semibold mr-1">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm" />
          </div>
          <input
            id="token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[11.5px] text-[#737470] focus:outline-none"
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="designUrl" className="text-[#a3a3a2] text-[11.5px] font-semibold mr-1">Design URL</label>
            <AiOutlineInfoCircle className="text-[#a3a3a2] text-sm" />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#272822] border-[2px] border-[#929291] text-[11.5px] text-[#71726e] focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-8">
          <button className="flex-1 py-2 px-4 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-[4px]">
            Awesome
          </button>
          <button className="flex-1 py-2 px-4 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-[4px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div>
        <p className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</p>
      </div>
    </div>
  );
};

export default TestCard;
