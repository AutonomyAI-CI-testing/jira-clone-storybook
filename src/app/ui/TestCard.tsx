import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * Constants for the specific brand colors used in the design.
 * These are extracted to maintain consistency and ease of updates.
 */
const COLORS = {
  BACKGROUND: '#2a2a2a',
  INPUT_BG: '#1a1a1a',
  ORANGE_PRIMARY: '#b85c2a',
  ORANGE_MUTED: '#c47a4a',
};

/**
 * TestCard component
 * 
 * A self-contained component that replicates a Figma design panel.
 * Used as a smoke test to validate UI rendering capabilities.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-6 max-w-sm mx-auto rounded-lg shadow-lg text-white"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiCog className="text-white text-2xl" aria-hidden="true" />
      </div>

      {/* Subtitle Row - Matches the design's specific muted orange tone */}
      <div
        className="flex items-center text-sm mb-6"
        style={{ color: COLORS.ORANGE_MUTED }}
      >
        <HiChevronUp className="text-lg mr-1" aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center text-white text-lg font-bold mb-4">
        <HiChevronUp className="text-xl mr-2" aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="flex items-center text-sm font-semibold mb-2"
        >
          Personal Access Token
          <HiInformationCircle
            className="ml-1 text-gray-400 cursor-help"
            aria-label="Your Figma Personal Access Token"
          />
        </label>
        <input
          type="password"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border border-gray-600 text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
          style={{ backgroundColor: COLORS.INPUT_BG }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label
          htmlFor="design-url"
          className="flex items-center text-sm font-semibold mb-2"
        >
          Design URL
          <HiInformationCircle
            className="ml-1 text-gray-400 cursor-help"
            aria-label="The full URL of your Figma file"
          />
        </label>
        <input
          type="url"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded border border-gray-600 text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
          style={{ backgroundColor: COLORS.INPUT_BG }}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 mb-6">
        <button
          type="button"
          className="flex-1 text-white rounded-lg px-6 py-2 font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.ORANGE_PRIMARY }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 text-white rounded-lg px-6 py-2 font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.ORANGE_PRIMARY }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
