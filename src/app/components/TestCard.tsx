
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TestCard: React.FC = () => {
  return (
    /* The test-card uses arbitrary Tailwind values to match specific Figma design specs 
       that fall outside the project's standard design token system. */
    <div id="testElem" className="bg-[#2a2a2a] p-4 font-inter text-white max-w-md">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-gray-400 text-lg" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp className="text-gray-300 text-sm" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Vertical Spacer */}
      <div className="my-8"></div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-gray-300 text-sm" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-500 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 mt-1 rounded bg-[#272822] border-2 border-[#929291] text-white placeholder-[#737470] text-[11.5px]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 text-[#a3a3a2] text-[11.5px] font-semibold">
          <span>Design URL</span>
          <AiOutlineInfoCircle className="text-gray-500 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 mt-1 rounded bg-[#272822] border border-[#a5adad] text-white placeholder-[#71726e] text-[11.5px]"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-4 justify-center mt-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Reusable action button styled according to design specs.
 * Uses a specific orange/brown background for the feature's primary actions.
 */
const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-[#843a17] text-[#8c8078] rounded px-6 py-2 text-[11.5px] font-semibold hover:brightness-110 transition-all">
    {children}
  </button>
);

export default TestCard;
