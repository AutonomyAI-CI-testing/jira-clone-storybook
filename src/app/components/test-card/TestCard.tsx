
import type { FC } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard is a self-contained smoke-test component that replicates a specific Figma design.
 * It is used to verify visual rendering fidelity in a dark-themed environment.
 * 
 * Design Specs:
 * - Background: #2a2a2a (Card), #1e1e1e (Inputs)
 * - Accent: #c4622d (Terracotta / Burnt Orange)
 */
const TestCard: FC = () => {
  // Shared styles for the input fields
  const inputClass = "w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none";
  
  // Shared styles for the primary action buttons
  const buttonClass = "flex-1 bg-[#c4622d] hover:bg-[#b5541f] text-white font-semibold rounded-lg px-5 py-3 transition-colors cursor-pointer";

  return (
    <div id="testElem">
      <div className="bg-[#2a2a2a] text-white p-5 w-full max-w-[320px] flex flex-col gap-4 rounded-lg shadow-xl">
        {/* Header: Title and Settings */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">UI magician Agent</span>
          <AiOutlineSetting size={20} className="cursor-pointer" />
        </div>

        {/* Informational Row: Secondary text style */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={20} />
          <span className="text-[#c4622d]">From entire frame to a singl...</span>
        </div>

        {/* Section: Add New Design */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={20} />
          <span className="font-bold">Add New Design</span>
        </div>

        {/* Form: Design Inputs */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-1 text-sm">
              Personal Access Token <AiOutlineInfoCircle size={16} />
            </label>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-1 text-sm">
              Design URL <AiOutlineInfoCircle size={16} />
            </label>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={inputClass}
            />
          </div>
        </div>

        {/* Action Buttons: Side-by-side terracotta buttons */}
        <div className="flex gap-3">
          <button className={buttonClass}>Awesome</button>
          <button className={buttonClass}>Prepare</button>
        </div>

        {/* Footer: Section heading */}
        <div className="text-white font-semibold text-lg mt-2">Recent Breakdowns</div>
      </div>
    </div>
  );
};

export default TestCard;
