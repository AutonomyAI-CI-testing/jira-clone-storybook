
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiChevronUp } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-[#2a2a2a] p-5 font-[Inter]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Chevron Row */}
      <div className="flex items-center gap-2 mb-4">
        <BiChevronUp className="text-[#8b9291] text-lg" />
        <p className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <BiChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-[#a3a3a2] text-[11.5px] font-semibold">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a3a3a2] text-sm" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 text-[10.5px] bg-[#272822] border border-[#a5adad] text-[#737470] rounded-sm focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-[11.5px] font-semibold">Design URL</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 text-[10.5px] bg-[#272822] border-2 border-[#929291] text-[#71726e] rounded-sm focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-4 mb-6">
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg py-2 px-4 flex-1">Awesome</button>
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg py-2 px-4 flex-1">Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
