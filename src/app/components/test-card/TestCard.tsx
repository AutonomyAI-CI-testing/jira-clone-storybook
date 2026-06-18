import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component based on Figma design for the "UI magician Agent" panel.
 * This is a static component used for previewing the UI implementation.
 */
export const TestCard = (): JSX.Element => {
  // Color constants derived from Figma design requirements
  const colors = {
    panelBg: '#1d2125',
    formSectionBg: '#282e33',
    inputBorder: '#3d4650',
    primaryButton: '#c25f28',
    textMain: '#e8e8e8',
    textMuted: '#b0b8c1',
    textHint: '#c17a4a',
  };

  return (
    <div
      id="testElem"
      className="flex flex-col gap-4 p-6 text-[#e8e8e8] min-w-[320px] max-w-sm rounded-lg shadow-lg"
      style={{ backgroundColor: colors.panelBg, color: colors.textMain }}
    >
      {/* Header section with tool name and settings access */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-primary-bold">UI magician Agent</h2>
        <FiSettings className="text-gray-400 text-xl" aria-label="Settings" />
      </div>

      {/* Collapsible hint row - static in this version */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-400" aria-hidden="true" />
        <p className="text-sm text-[#c17a4a] italic">From entire frame to a singl...</p>
      </div>

      <div className="my-2" aria-hidden="true"></div>

      {/* Primary action section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-400" aria-hidden="true" />
        <h3 className="text-lg font-primary-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="pat" className="flex items-center gap-2 text-sm text-[#b0b8c1]">
          Personal Access Token
          <FiInfo className="text-gray-500" title="Token information" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#3d4650] bg-[#282e33] px-3 py-2 text-sm text-gray-400 placeholder:text-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="design-url" className="flex items-center gap-2 text-sm text-[#b0b8c1]">
          Design URL
          <FiInfo className="text-gray-500" title="URL information" />
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#3d4650] bg-[#282e33] px-3 py-2 text-sm text-gray-400 placeholder:text-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Action Buttons - uses brand color for prominence */}
      <div className="flex gap-4 mt-2">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c25f28] px-6 py-3 text-sm font-primary text-white hover:brightness-110 transition-all duration-200"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c25f28] px-6 py-3 text-sm font-primary text-white hover:brightness-110 transition-all duration-200"
        >
          Prepare
        </button>
      </div>

      <div className="my-2" aria-hidden="true"></div>

      {/* Footer section for historical logs */}
      <h3 className="text-lg font-primary-bold mt-2">Recent Breakdowns</h3>
    </div>
  );
};
