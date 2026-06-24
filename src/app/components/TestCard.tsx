
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component
 * A self-contained UI panel replicating the "UI magician Agent" design.
 * Uses hardcoded values as per specifications for a standalone testable component.
 * 
 * Design Colors:
 * - Background: #272822
 * - Primary Text: #b5b5b5
 * - Muted Text: #8b9291, #a4a4a3, #b2b2b1
 * - Button Background: #843a17
 * - Button Text: #8c8078
 */

const TEXT_COLORS = {
  header: 'text-[#b5b5b5]',
  muted: 'text-[#8b9291]',
  section: 'text-[#b2b2b1]',
  label: 'text-[#a4a4a3]',
  labelAlt: 'text-[#a3a3a2]',
  placeholder: 'text-[#737470]',
  placeholderAlt: 'text-[#71726e]',
  button: 'text-[#8c8078]',
  recent: 'text-[#b0b0b0]',
};

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#272822] p-5 font-[Inter] select-none">
      {/* Header section - UI Magician Title and settings icon */}
      <div className="flex justify-between items-center">
        <h2 className={`${TEXT_COLORS.header} text-[13.5px] font-semibold uppercase tracking-tight`}>
          UI magician Agent
        </h2>
        <FiSettings className={TEXT_COLORS.header} />
      </div>

      {/* Status/Collapsed row - Quick summary of the current context */}
      <div className="flex items-center gap-2 mt-3 cursor-pointer">
        <FiChevronUp className={TEXT_COLORS.muted} />
        <span className={`${TEXT_COLORS.muted} text-[11.5px] font-semibold truncate`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* "Add New Design" section header - Collapsible section for configuration */}
      <div className="flex items-center gap-2 mt-6 cursor-pointer">
        <FiChevronUp className={TEXT_COLORS.section} />
        <h3 className={`${TEXT_COLORS.section} text-[13.5px] font-semibold`}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field - Figma API authentication */}
      <div className="mt-5">
        <div className="flex items-center gap-1 mb-2">
          <label 
            htmlFor="personalAccessToken" 
            className={`${TEXT_COLORS.label} text-[11.5px] font-semibold`}
          >
            Personal Access Token
          </label>
          <FiInfo className={`${TEXT_COLORS.label} text-[11.5px] cursor-help`} title="Enter your Figma Personal Access Token" />
        </div>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full bg-[#272822] border border-[#a5adad] p-2 text-[10.5px] font-semibold ${TEXT_COLORS.placeholder} outline-none focus:border-white transition-colors`}
        />
      </div>

      {/* Design URL field - Source file for the UI generation */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-2">
          <label 
            htmlFor="designURL" 
            className={`${TEXT_COLORS.labelAlt} text-[11.5px] font-semibold`}
          >
            Design URL
          </label>
          <FiInfo className={`${TEXT_COLORS.labelAlt} text-[11.5px] cursor-help`} title="Paste the Figma file or frame URL" />
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full bg-[#272822] border-2 border-[#929291] p-2 text-[10.5px] font-semibold ${TEXT_COLORS.placeholderAlt} outline-none focus:border-white transition-colors`}
        />
      </div>

      {/* Action buttons row - Primary workflows */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className={`bg-[#843a17] ${TEXT_COLORS.button} text-[11.5px] font-semibold rounded-md px-6 py-2 hover:brightness-110 active:scale-95 transition-all`}>
          Awesome
        </button>
        <button className={`bg-[#843a17] ${TEXT_COLORS.button} text-[11.5px] font-semibold rounded-md px-6 py-2 hover:brightness-110 active:scale-95 transition-all`}>
          Prepare
        </button>
      </div>

      {/* "Recent Breakdowns" heading - Footer section for history */}
      <h3 className={`mt-8 ${TEXT_COLORS.recent} text-[13.5px] font-semibold cursor-pointer`}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
