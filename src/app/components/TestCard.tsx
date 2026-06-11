import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';

/**
 * TestCard is a smoke test component designed to verify UI rendering, 
 * Tailwind CSS integration, and icon library functionality.
 * 
 * It visually replicates a specific dark-themed UI panel design.
 */
const TestCard: React.FC = () => {
  // Design constants matching Figma specifications
  const COLORS = {
    background: '#2a2a2a',
    inputBackground: '#1e1e1e',
    accent: '#9b4f24',
    accentMuted: '#c07040',
  };

  const inputClasses = `bg-[${COLORS.inputBackground}] border border-gray-600 rounded text-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[${COLORS.accent}] transition-shadow`;
  const buttonClasses = `bg-[${COLORS.accent}] text-white font-medium px-5 py-2 rounded-lg flex-1 hover:bg-[#a0522d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[${COLORS.background}]`;

  return (
    <div id="testElem" className={`bg-[${COLORS.background}] p-6 max-w-sm mx-auto flex flex-col shadow-xl rounded-sm`}>
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-white text-lg m-0">UI magician Agent</h2>
        <button aria-label="Settings" className="text-gray-300 hover:text-white transition-colors">
          <AiOutlineSetting size={22} />
        </button>
      </div>

      {/* Subheader Row: Muted status info */}
      <div className="flex items-center gap-2 mt-2">
        <BsChevronUp className={`text-[${COLORS.accentMuted}]`} />
        <span className={`text-[${COLORS.accentMuted}] text-sm truncate`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer - creates visual separation between general info and actions */}
      <div className="my-8" aria-hidden="true" />

      {/* Section Header: Interactive area indicator */}
      <div className="flex items-center gap-2">
        <BsChevronUp className="text-white" />
        <h3 className="font-bold text-white text-lg m-0">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-white text-sm mb-2">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle size={14} className="text-gray-400 cursor-help" title="Figma Personal Access Token" />
        </label>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          autoComplete="off"
          className={inputClasses}
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-white text-sm mb-2">
          <span>Design URL</span>
          <AiOutlineInfoCircle size={14} className="text-gray-400 cursor-help" title="Link to the Figma design file" />
        </label>
        <input
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={inputClasses}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-8">
        <button className={buttonClasses}>
          Awesome
        </button>
        <button className={buttonClasses}>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <h3 className="font-bold text-white text-lg m-0 border-t border-gray-700 pt-6">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
