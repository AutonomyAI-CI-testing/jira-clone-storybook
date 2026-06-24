import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

const ACTION_BUTTON_BG = 'bg-[#843a17]';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-[254px] p-5 bg-[#272822] font-[Inter] text-white">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <FiSettings className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-3">
        <FiChevronUp className="text-[#8b9291] text-sm" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</p>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-6">
        <FiChevronUp className="text-[#b2b2b1] text-sm" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 bg-[#272822] border border-[#a5adad] text-[#737470] text-[10.5px] font-semibold focus:outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="design-url" className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</label>
          <FiInfo className="text-[#a3a3a2] text-xs" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 bg-[#272822] border-2 border-[#929291] text-[#71726e] text-[11.5px] font-semibold focus:outline-none"
        />
      </div>

      {/* Action buttons row */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className={`${ACTION_BUTTON_BG} text-[#8c8078] text-[11.5px] font-semibold rounded-md px-6 py-2`}>Awesome</button>
        <button className={`${ACTION_BUTTON_BG} text-[#8c8078] text-[11.5px] font-semibold rounded-md px-6 py-2`}>Prepare</button>
      </div>

      {/* Recent Breakdowns heading */}
      <h3 className="mt-8 text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
    </div>
  );
};
