import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design system constants from Figma specs.
 * Using constants for non-obvious color values to improve maintainability.
 */
const COLORS = {
  panelBg: '#2a2a2a',
  headerText: '#b5b5b5',
  mutedText: '#8b9291',
  sectionTitle: '#b2b2b1',
  labelColor: '#a4a4a3',
  placeholderColorOriginal: '#737470',
  buttonBg: '#b8541a',
  buttonText: '#8c8078',
  borderColor: '#4a4a4a',
  recentBreakdowns: '#b0b0b0',
} as const;

/**
 * Reusable Form Field component for the design inputs.
 */
const FormField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
}> = ({ id, label, placeholder }) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs font-semibold mr-2 cursor-pointer">
        {label}
      </label>
      <FiInfo className="text-[#a4a4a3] text-xs" title="More information" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="bg-transparent border border-[#4a4a4a] rounded text-[#737470] text-xs px-3 py-2 w-full focus:outline-none focus:border-[#b8541a] transition-colors"
    />
  </div>
);

/**
 * TestCard component
 * 
 * A static reproduction of the "UI magician Agent" panel.
 * Built with Tailwind arbitrary values to match exact Figma specifications.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-64 font-sans rounded-sm shadow-xl">
      {/* Header - Title and Settings */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg cursor-pointer hover:rotate-45 transition-transform" />
      </div>

      {/* Sub-header / Scope indicator */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-[#8b9291] text-lg mr-2" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Trigger: Add New Design */}
      <div className="flex items-center mb-4 pt-4">
        <FiChevronUp className="text-[#b2b2b1] text-lg mr-2" />
        <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h3>
      </div>

      {/* Input Fields */}
      <FormField 
        id="personalAccessToken" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      <FormField 
        id="designURL" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons */}
      <div className="flex justify-between mb-6 space-x-2">
        {/* Warm orange-brown buttons as per Figma design choices */}
        <button className="bg-[#b8541a] hover:bg-[#a64a17] transition-colors rounded-lg text-[#8c8078] text-[11.5px] font-semibold px-4 py-2 w-1/2">
          Awesome
        </button>
        <button className="bg-[#b8541a] hover:bg-[#a64a17] transition-colors rounded-lg text-[#8c8078] text-[11.5px] font-semibold px-4 py-2 w-1/2">
          Prepare
        </button>
      </div>

      {/* Bottom Section Heading */}
      <div className="border-t border-[#4a4a4a] pt-4">
        <h3 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
