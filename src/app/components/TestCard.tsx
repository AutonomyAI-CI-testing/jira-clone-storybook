import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component displays a "UI magician Agent" configuration panel.
 * It includes fields for Figma access tokens and design URLs.
 * 
 * Note: The color palette (e.g., #2a2a2a, #c1622f) and layout are 
 * based on the provided design specifications for the plugin interface.
 */
export const TestCard = (): JSX.Element => {
  // Shared styles for the input fields to maintain consistency
  const inputClassName = "w-full p-2 rounded bg-[#1e1e1e] border border-[#444] text-white placeholder-[#737470] text-sm focus:outline-none focus:border-[#666]";

  return (
    <div id="testElem" className="p-6 bg-[#2a2a2a] text-white min-h-screen">
      {/* Header Row: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-xl cursor-not-allowed" />
      </div>

      {/* Breadcrumb or context indicator */}
      <div className="flex items-center mb-6 pl-1">
        <span className="text-[#8b9291] mr-2 text-sm" aria-hidden="true">^</span>
        <p className="text-[#8b9291] text-sm truncate">From entire frame to a singl...</p>
      </div>

      {/* Visual spacer to separate sections */}
      <div className="my-6"></div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center mb-4 pl-1">
        <span className="text-[#b2b2b1] mr-2 font-bold text-sm" aria-hidden="true">^</span>
        <h3 className="text-[#b2b2b1] text-sm font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input field */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center text-[#a3a3a2] text-sm mb-2">
          Personal Access Token <HiInformationCircle className="ml-1 opacity-70" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      {/* Design URL Input field */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-[#a3a3a2] text-sm mb-2">
          Design URL <HiInformationCircle className="ml-1 opacity-70" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClassName}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="flex-1 py-2 px-4 bg-[#c1622f] text-white/80 font-semibold rounded text-sm hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-[#c1622f] text-white/80 font-semibold rounded text-sm hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Activity */}
      <div>
        <h3 className="text-[#b0b0b0] text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};