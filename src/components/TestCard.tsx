import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiArrowUpSLine } from 'react-icons/ri';
import { HiOutlineInformationCircle } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#272822] text-white font-sans p-5 w-[254px]">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mt-2">
        <RiArrowUpSLine className="text-gray-400" />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Large gap */}
      <div className="mt-12"></div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine className="text-white text-xl" />
        <span className="text-white text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <label className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-sm font-semibold">Personal Access Token</span>
          <HiOutlineInformationCircle className="text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full mt-1 bg-[#272822] border border-[#a5adad] rounded p-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <label className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-sm font-semibold">Design URL</span>
          <HiOutlineInformationCircle className="text-[#a3a3a2]" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full mt-1 bg-[#272822] border-2 border-[#929291] rounded p-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 justify-center mt-5">
        <button type="button" className="bg-[#843a17] text-[#c4a89a] font-semibold rounded px-6 py-2 text-sm">
          Awesome
        </button>
        <button type="button" className="bg-[#843a17] text-[#c4a89a] font-semibold rounded px-6 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] text-lg font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
