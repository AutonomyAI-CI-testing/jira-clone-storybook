
import React from 'react';
import { HiOutlineCog, HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component displays a configuration panel for the "UI magician Agent".
 * It includes fields for Personal Access Token and Design URL, and action buttons.
 * 
 * Note: Hardcoded colors and styles are part of the specific "magician" theme design.
 */
export const TestCard = (): JSX.Element => {
  const containerClasses = "w-[254px] p-4 bg-[#272822] text-white font-sans rounded-sm selection:bg-blue-500/30";
  const labelClasses = "text-[#a4a4a3] text-[11.5px] font-semibold";
  const inputClasses = "bg-[#272822] border border-[#a5adad] text-[#737470] w-full px-3 py-2 text-[11.5px] font-semibold rounded-md focus:outline-none focus:border-white/40 transition-colors";
  const buttonClasses = "bg-[#843a17] hover:bg-[#9a451d] text-[#8c8078] font-semibold text-[11.5px] px-6 py-2 rounded-md transition-colors active:scale-95";

  return (
    <div id="testElem" className={containerClasses}>
      {/* Header Row */}
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h2>
        <button type="button" aria-label="Settings" className="hover:text-white transition-colors">
          <HiOutlineCog className="text-[#b5b5b5] text-lg" />
        </button>
      </div>

      {/* Subtitle Row - Breadcrumb style context */}
      <div className="flex items-center gap-1 pb-4">
        <HiChevronUp className="text-[#8b9291] text-lg" />
        <p title="From entire frame to a single component" className="text-[#8b9291] text-[11.5px] font-semibold truncate cursor-default">
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer / Divider */}
      <div className="border-t border-gray-600/50 my-4" role="presentation"></div>

      {/* Section Header */}
      <div className="flex items-center gap-1 pb-4">
        <HiChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className={labelClasses}>Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm cursor-help" title="Figma Personal Access Token" />
        </div>
        <input
          id="pat"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClasses}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className={labelClasses}>Design URL</label>
          <AiOutlineInfoCircle className="text-[#a3a3a2] text-sm cursor-help" title="Link to the Figma design file" />
        </div>
        <input
          id="designUrl"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={`${inputClasses} border-2 border-[#929291]`}
        />
      </div>

      {/* Control Actions */}
      <div className="flex gap-3 justify-center mb-6">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-600/30 pt-4">
        <h3 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
