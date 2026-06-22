
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#272822] p-5 w-[254px] font-sans">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-sm font-semibold">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Sub-row (frame description) */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp />
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-2 mt-6">
        <FiChevronUp />
        <span className="text-[#b2b2b1] text-sm font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle />
        </div>
        <input
          readOnly
          className="bg-[#272822] border border-[#a5adad] w-full mt-1 px-2 py-1.5 text-xs text-[#737470] font-semibold placeholder:text-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">
            Design URL
          </span>
          <AiOutlineInfoCircle />
        </div>
        <input
          readOnly
          className="bg-[#272822] border-2 border-[#929291] w-full mt-1 px-2 py-1.5 text-xs text-[#737470] font-semibold placeholder:text-[#737470]"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold px-4 py-2 rounded">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold px-4 py-2 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <p className="text-[#b0b0b0] text-sm font-semibold mt-6">
        Recent Breakdowns
      </p>
    </div>
  );
};
