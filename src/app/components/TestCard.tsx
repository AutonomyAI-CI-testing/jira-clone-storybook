
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4">
      <div className="bg-[#2a2a2a] p-5 rounded-lg max-w-sm mx-auto shadow-lg space-y-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">
            UI magician Agent
          </h2>
          <IoSettingsOutline className="text-[#a4a4a4] text-lg" />
        </div>

        {/* Collapsed section row */}
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-[#8b9291] text-lg" />
          <p className="text-[#8b9291] text-sm">
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 py-2">
            <HiChevronUp className="text-[#b2b2b1] text-lg" />
            <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">
              Add New Design
            </h3>
          </div>

          {/* Personal Access Token field */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <label htmlFor="accessToken" className="text-[#a4a4a3] text-sm">
                Personal Access Token
              </label>
              <HiInformationCircle className="text-[#a4a4a3] text-base" />
            </div>
            <input
              id="accessToken"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full p-2.5 bg-[#272822] border-2 border-[#929291] rounded text-[#737470] text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Design URL field */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <label htmlFor="designUrl" className="text-[#a3a3a2] text-sm">
                Design URL
              </label>
              <HiInformationCircle className="text-[#a3a3a2] text-base" />
            </div>
            <input
              id="designUrl"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2.5 bg-[#272822] border border-[#a5adad] rounded text-[#71726e] text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex gap-3 justify-end pt-2">
          <button className="bg-[#843a17] text-[#8c8078] rounded font-semibold text-[11.5px] px-6 py-2.5">
            Awesome
          </button>
          <button className="bg-[#843a17] text-[#8c8078] rounded font-semibold text-[11.5px] px-6 py-2.5">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns heading */}
        <h3 className="text-[#b0b0b0] font-semibold text-[13.5px] pt-3">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
