
import React from 'react';

/**
 * Constants for theme colors and values following the Figma design spec.
 * These are used directly via inline styles where Tailwind tokens don't match precisely.
 */
const COLORS = {
  BACKGROUND: '#2a2a2a',
  ACCENT_ORANGE: '#c8845a',
  BUTTON_BROWN: '#b35c2e',
} as const;

/**
 * TestCard provides a presentational dark-themed panel for the UI magician Agent.
 * Replicates a specific Figma UI designed for demonstrating UI patterns.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-4 text-white"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <span className="text-xl" aria-hidden="true">
          ⚙
        </span>
      </div>

      {/* Tagline/Subtitle describing the agent's function */}
      <div className="flex items-center mb-6">
        <span className="mr-2" style={{ color: COLORS.ACCENT_ORANGE }} aria-hidden="true">
          ˄
        </span>
        <p className="text-sm" style={{ color: COLORS.ACCENT_ORANGE }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Visual separator/spacer matching Figma layout vertical rhythm */}
      <div className="mb-6 h-px" aria-hidden="true" />

      {/* Main Form Section: Add New Design */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-lg font-bold" aria-hidden="true">
          ˄
        </span>
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      <div className="space-y-4 mb-6">
        {/* Input: Personal Access Token */}
        <div>
          <label
            htmlFor="pat-input"
            className="block text-white text-sm font-bold mb-1"
          >
            Personal Access Token{' '}
            <span className="ml-1 inline-block" title="Information">
              ℹ
            </span>
          </label>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            style={{ backgroundColor: '#3a3a3a', color: '#d1d1d1' }}
          />
        </div>

        {/* Input: Design URL */}
        <div>
          <label
            htmlFor="url-input"
            className="block text-white text-sm font-bold mb-1"
          >
            Design URL{' '}
            <span className="ml-1 inline-block" title="Information">
              ℹ
            </span>
          </label>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            style={{ backgroundColor: '#3a3a3a', color: '#d1d1d1' }}
          />
        </div>
      </div>

      {/* Primary Actions: Side-by-side buttons aligned to the right */}
      <div className="flex justify-end space-x-4 mb-6">
        <button
          type="button"
          className="px-4 py-2 rounded-lg text-white font-bold hover:brightness-110 transition-all"
          style={{ backgroundColor: COLORS.BUTTON_BROWN }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg text-white font-bold hover:brightness-110 transition-all"
          style={{ backgroundColor: COLORS.BUTTON_BROWN }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: List of previous activity */}
      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
