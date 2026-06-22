
import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

/**
 * TestCard: A standalone demo component replicating a Figma design for a "UI magician Agent" panel.
 * Constrained by requirements to be a single-file, self-contained component with no props.
 * Used for Figma-to-code fidelity validation.
 */
const TestCard: React.FC = () => {
  // Shared text styles for consistency and readability
  const labelStyles = "text-[11.5px] font-semibold";
  const sectionHeaderStyles = "text-[13.5px] font-semibold";
  
  // Shared input class string - keeps UI identical while reducing repetition
  const commonInputClasses = `w-full p-2 rounded bg-[#272822] text-[11.5px] font-semibold placeholder-[#737470] focus:outline-none focus:ring-1`;

  return (
    <div 
      id="testElem" 
      className="p-4 bg-[#1e1e1e] text-white" 
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header Row: Displays the agent name and settings access point */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-[#b5b5b5] ${sectionHeaderStyles}`}>UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg cursor-pointer" title="Settings" />
      </div>

      {/* Collapsible Hint Row: Provides context about the current selection state */}
      <div className="flex items-center gap-2 mb-6 cursor-pointer" title="Collapse hint">
        <IoChevronUp className="text-[#8b9291] text-sm" />
        <p className={`text-[#8b9291] ${labelStyles}`}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section: Primary action area for importing Figma designs */}
      <div className="flex items-center gap-2 mb-4 cursor-pointer">
        <IoChevronUp className="text-[#b2b2b1] text-sm" />
        <h3 className={`text-[#b2b2b1] ${sectionHeaderStyles}`}>Add New Design</h3>
      </div>

      {/* Personal Access Token Field: Required for Figma API authentication */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="token" className={`text-[#a4a4a3] ${labelStyles}`}>Personal Access Token</label>
          <IoInformationCircleOutline className="text-[#a4a4a3] text-sm cursor-help" />
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          // border width/color matches specific Figma specs from planner
          className={`${commonInputClasses} border border-[#a5adad] focus:ring-[#a5adad]`}
          autoComplete="off"
        />
      </div>

      {/* Design URL Field: Destination Figma frame URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="url" className={`text-[#a3a3a2] ${labelStyles}`}>Design URL</label>
          <IoInformationCircleOutline className="text-[#a3a3a2] text-sm cursor-help" />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          // border-2 matches specific Figma design spec for this field
          className={`${commonInputClasses} border-2 border-[#929291] focus:ring-[#929291] placeholder-[#71726e]`}
          autoComplete="off"
        />
      </div>

      {/* Action Buttons: Principal CTAs for the magician agent flow */}
      <div className="flex gap-4 mb-8">
        <button 
          className="flex-1 py-2 px-4 rounded-lg bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold active:opacity-80 transition-opacity"
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 px-4 rounded-lg bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold active:opacity-80 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section: History of previous agent activities */}
      <div>
        <h3 className={`text-[#b0b0b0] ${sectionHeaderStyles}`}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
