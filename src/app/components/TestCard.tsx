
import React from 'react';

/**
 * TestCard component representing the "UI magician Agent" interface.
 * This component allows users to input Figma design credentials and URLs
 * to trigger design breakdowns.
 */
export const TestCard = (): JSX.Element => {
  // Color constants for styling consistency
  const ORANGE_PRIMARY = '#b85c2a';
  const TEXT_DIMMED = '#b85c2a';

  return (
    <div
      id="testElem"
      className="p-4 bg-[#2a2a2a] text-white min-h-screen"
      role="main"
    >
      {/* Header section with title and settings icon */}
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <button
          className="text-xl hover:opacity-80 transition-opacity"
          aria-label="Settings"
        >
          ⚙️
        </button>
      </header>

      {/* Breadcrumb or context row */}
      <div className="flex items-center mb-4 cursor-default">
        <span className="mr-2" aria-hidden="true">
          ^
        </span>
        <span style={{ color: TEXT_DIMMED }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header for Add New Design */}
      <div className="flex items-center mb-4 cursor-default">
        <span className="mr-2" aria-hidden="true">
          ^
        </span>
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Input Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Input */}
        <div>
          <label htmlFor="pat" className="block text-sm font-medium mb-1">
            Personal Access Token{' '}
            <span className="text-xs cursor-help" title="Figma Personal Access Token">
              ⓘ
            </span>
          </label>
          <input
            type="password" // Changed to password for security of tokens
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#b85c2a]"
            autoComplete="off"
          />
        </div>

        {/* Design URL Input */}
        <div>
          <label htmlFor="designUrl" className="block text-sm font-medium mb-1">
            Design URL{' '}
            <span className="text-xs cursor-help" title="Link to the Figma design file">
              ⓘ
            </span>
          </label>
          <input
            type="url" // Changed to url type for better browser validation
            id="designUrl"
            placeholder="https://www.figma.com/file/m:"
            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#b85c2a]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-lg text-white font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#b85c2a] transition-all"
          style={{ backgroundColor: ORANGE_PRIMARY }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-lg text-white font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#b85c2a] transition-all"
          style={{ backgroundColor: ORANGE_PRIMARY }}
        >
          Prepare
        </button>
      </div>

      {/* History/Footer Section */}
      <footer className="border-t border-gray-700 pt-4">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};
