
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

export const TestCard = () => {
  return (
    <div id="testElem" className="p-5 w-[254px] bg-[#2a2a2a] text-[#b5b5b5] font-inter font-semibold">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[13.5px]">UI magician Agent</h2>
        <AiOutlineSetting className="text-lg" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6 text-[#8b9291]">
        <BiChevronUp className="text-lg mr-1" />
        <p className="text-[12px]">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4 text-[#b2b2b1]">
        <BiChevronUp className="text-lg mr-1" />
        <h3 className="text-[13.5px]">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center text-[11.5px] text-[#a4a4a3] mb-2">
          Personal Access Token
          <AiOutlineInfoCircle className="ml-1 text-sm" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 h-[41px] text-[11.5px] bg-[#272822] border border-[#a5adad] rounded-[4px] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-[11.5px] text-[#a4a4a3] mb-2">
          Design URL
          <AiOutlineInfoCircle className="ml-1 text-sm" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 h-[36px] text-[11.5px] bg-[#272822] border border-[#929291] rounded-[4px] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mb-6">
        <button className="px-6 py-2 bg-[#843a17] text-[#8c8078] text-[11.5px] rounded-[4px] font-semibold w-1/2 mr-2">Awesome</button>
        <button className="px-6 py-2 bg-[#843a17] text-[#8c8078] text-[11.5px] rounded-[4px] font-semibold w-1/2 ml-2">Prepare</button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h3>
    </div>
  );
};
