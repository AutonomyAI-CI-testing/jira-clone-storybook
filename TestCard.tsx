
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * UI Constants for styling to ensure consistency and easier maintenance.
 * These hex values represent the specific dark theme design.
 */
const COLORS = {
  bg: '#2a2a2a',
  bgInput: '#272822',
  bgButton: '#843a17',
  textPrimary: '#ffffff',
  textSecondary: '#b5b5b5',
  textMuted: '#8b9291',
  textLabel: '#a4a4a3',
  textPlaceholder: '#737470',
  textButton: '#8c8078',
  borderInput: '#929291',
};

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 max-w-xs mx-auto rounded-lg shadow-lg font-sans text-white bg-[#2a2a2a]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-semibold">UI magician Agent</h2>
        <HiCog className="text-[#b5b5b5] text-xl cursor-not-allowed" title="Settings" />
      </div>

      {/* Collapsible Info Row */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-[#8b9291] text-lg" />
        <p className="text-[#8b9291] text-sm truncate">From entire frame to a singl...</p>
      </div>

      {/* Spacer for visual rhythm */}
      <div className="mb-6" aria-hidden="true"></div>

      {/* Section: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className="text-[#b2b2b1] text-base font-semibold">Add New Design</h3>
      </div>

      {/* Form Field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat-input" className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <HiInformationCircle className="text-[#a4a4a3] text-base cursor-help" />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#272822] border border-[#929291] text-white placeholder-[#737470] text-sm focus:outline-none focus:ring-1 focus:ring-[#929291]"
        />
      </div>

      {/* Form Field: Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="design-url-input" className="text-[#a4a4a3] text-sm">Design URL</label>
          <HiInformationCircle className="text-[#a4a4a3] text-base cursor-help" />
        </div>
        <input
          id="design-url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#272822] border border-[#a5adad] text-white placeholder-[#71726e] text-sm focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button 
          type="button"
          className="flex-1 py-2 px-4 rounded-lg bg-[#843a17] text-[#8c8078] font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button 
          type="button"
          className="flex-1 py-2 px-4 rounded-lg bg-[#843a17] text-[#8c8078] font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <div>
        <h3 className="text-[#b0b0b0] font-semibold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
