import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuChevronUp, LuInfo } from 'react-icons/lu';

/**
 * TestCard is a static, self-contained component designed to validate visual styling
 * and layout based on a Figma reference. It uses Tailwind CSS for all styling.
 * 
 * Note: This component is purely visual/static as per design requirements and 
 * does not include interactive state or props.
 */

// Custom brand colors extracted from Figma design specs
const COLORS = {
  BACKGROUND: 'bg-[#2a2a2a]',
  ACCENT_ORANGE: 'text-[#c8784a]',
  BUTTON_PRIMARY: 'bg-[#b35c2e] hover:bg-[#c96a38]',
  BUTTON_SECONDARY: 'bg-[#8b4423] hover:bg-[#9e5230]',
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`${COLORS.BACKGROUND} text-gray-200 p-5 rounded-lg w-full max-w-sm font-sans shadow-xl`}
    >
      {/* Header section with brand name and settings */}
      <header className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-white">UI magician Agent</span>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <IoSettingsOutline className="text-gray-400 text-xl" />
        </button>
      </header>

      {/* Instructional/Collapsible-style row (Static) */}
      <div className={`flex items-center gap-2 ${COLORS.ACCENT_ORANGE} text-sm mb-6 cursor-default`}>
        <LuChevronUp aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Main Form Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-white font-semibold text-base mb-4 cursor-default">
          <LuChevronUp aria-hidden="true" />
          <span>Add New Design</span>
        </div>

        {/* Form Fields: Personal Access Token */}
        <div className="mb-4">
          <label htmlFor="pat-input" className="block text-gray-300 text-sm mb-1">
            <span className="flex items-center gap-1">
              Personal Access Token
              <LuInfo className="text-gray-400" aria-hidden="true" />
            </span>
          </label>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Form Fields: Design URL */}
        <div className="mb-6">
          <label htmlFor="url-input" className="block text-gray-300 text-sm mb-1">
            <span className="flex items-center gap-1">
              Design URL
              <LuInfo className="text-gray-400" aria-hidden="true" />
            </span>
          </label>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className={`flex-1 ${COLORS.BUTTON_PRIMARY} text-white font-semibold py-3 rounded-xl text-sm transition-colors`}>
            Awesome
          </button>
          <button className={`flex-1 ${COLORS.BUTTON_SECONDARY} text-white font-semibold py-3 rounded-xl text-sm transition-colors`}>
            Prepare
          </button>
        </div>
      </div>

      {/* Footer / History Section */}
      <footer className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="text-white font-semibold text-base">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};
