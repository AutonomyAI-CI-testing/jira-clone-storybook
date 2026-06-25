
import React from 'react';
import { FiSettings, FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component reproduces a "UI magician Agent" panel from Figma.
 * It serves as a smoke-test fixture to verify Tailwind styling and basic rendering.
 * 
 * Design details:
 * - Background: Dark panel (#272822)
 * - Brand Color: Orange-brown (#843a17) used for action buttons
 * - Typography: Inter font family with specific sizes ranging from 10.5px to 13.5px
 */
const TestCard: React.FC = () => {
  // Shared styles to maintain consistency and reduce repetition
  const labelStyles = "text-[#a4a4a3] text-[11.5px] font-semibold";
  const inputStyles = "w-full bg-[#272822] p-2 text-[10.5px] font-semibold mb-4 outline-none";
  const buttonStyles = "bg-[#843a17] rounded text-[#8c8078] font-semibold text-xs px-6 py-2 transition-opacity hover:opacity-90";

  return (
    <div id="testElem" className="bg-[#272822] p-4 text-white font-sans w-full max-w-[320px]">
      {/* Header section with agent title and settings toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <FiSettings className="text-[#b5b5b5] cursor-pointer" aria-hidden="true" />
      </div>

      {/* Breadcrumb-style subtitle */}
      <div className="flex items-center gap-1 mb-4">
        <FiChevronUp className="text-[#8b9291]" aria-hidden="true" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold truncate">From entire frame to a singl...</p>
      </div>

      {/* Main section header for design entry */}
      <div className="flex items-center gap-1 mb-4 pt-4">
        <FiChevronUp className="text-[#b2b2b1]" aria-hidden="true" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token (PAT) Configuration */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="pat" className={labelStyles}>Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] cursor-help" aria-hidden="true" />
        </div>
        <input
          type="password"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${inputStyles} border border-[#a5adad]`}
          autoComplete="off"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="designUrl" className={labelStyles}>Design URL</label>
          <AiOutlineInfoCircle className="text-[#a3a3a2] cursor-help" aria-hidden="true" />
        </div>
        <input
          type="url"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className={`${inputStyles} border-2 border-[#929291]`}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mb-6">
        <button type="button" className={buttonStyles}>Awesome</button>
        <button type="button" className={buttonStyles}>Prepare</button>
      </div>

      {/* History/Recent activity indicator */}
      <footer>
        <p className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</p>
      </footer>
    </div>
  );
};

export default TestCard;
