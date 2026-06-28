
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TestCard: React.FC = () => {
  return (
    /* The test-card uses arbitrary Tailwind values to match specific Figma design specs 
       that fall outside the project's standard design token system. */
    <div id="testElem" className="bg-[#2a2a2a] px-8 py-10 font-inter text-white w-[390px]">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[18px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-gray-400 text-2xl" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-gray-300 text-base" />
        <span className="text-[#8b9291] text-[14px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Vertical Spacer */}
      <div className="my-12"></div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-gray-300 text-base" />
        <h3 className="text-[#b2b2b1] text-[18px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-[#a4a4a3] text-[14px] font-semibold">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-500 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-4 py-4 mt-2 rounded bg-[#272822] border-2 border-[#929291] text-white placeholder-[#737470] text-[14px]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-[#a3a3a2] text-[14px] font-semibold">
          <span>Design URL</span>
          <AiOutlineInfoCircle className="text-gray-500 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-4 py-4 mt-2 rounded bg-[#272822] border border-[#a5adad] text-white placeholder-[#71726e] text-[14px]"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-8 justify-center mt-10">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-14 mb-4">
        <h3 className="text-[#b0b0b0] text-[18px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Reusable action button styled according to design specs.
 * Uses a specific orange/brown background for the feature's primary actions.
 */
const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-10 py-5 text-[14px] font-semibold hover:brightness-110 transition-all">
    {children}
  </button>
);

export default TestCard;
