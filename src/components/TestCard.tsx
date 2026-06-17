
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component displays a design agent status and input fields for configuration.
 * Used for demonstrating UI generation capabilities.
 */
export const TestCard = (): JSX.Element => {
  // Theme colors and styles extracted for readability
  const colors = {
    background: '#1e1e1e',
    inputBg: '#2a2a2a',
    inputBorder: '#555',
    primaryButton: '#b85c2a',
    iconPlaceholder: '#aaaaaa',
    statusAccent: '#c17f3b',
  };

  return (
    <div
      id="testElem"
      className="p-6 max-w-sm mx-auto shadow-lg rounded-lg"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <FiSettings
          className="text-2xl"
          style={{ color: colors.iconPlaceholder }}
          aria-label="Settings"
        />
      </div>

      {/* Collapsed/Status Row */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp
          className="text-lg"
          style={{ color: colors.statusAccent }}
        />
        <span
          className="text-sm"
          style={{ color: colors.statusAccent }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer for layout consistency */}
      <div className="h-8" aria-hidden="true"></div>

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-white text-lg" />
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="text-white text-sm flex items-center gap-2 mb-1"
        >
          Personal Access Token
          <FiInfo
            className="text-base"
            style={{ color: colors.iconPlaceholder }}
          />
        </label>
        <input
          type="text"
          id="pat"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md text-white border outline-none"
          style={{
            backgroundColor: colors.inputBg,
            borderColor: colors.inputBorder,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label
          htmlFor="designUrl"
          className="text-white text-sm flex items-center gap-2 mb-1"
        >
          Design URL
          <FiInfo
            className="text-base"
            style={{ color: colors.iconPlaceholder }}
          />
        </label>
        <input
          type="text"
          id="designUrl"
          readOnly
          defaultValue="https://www.figma.com/file:/"
          placeholder="https://www.figma.com/file:/"
          className="w-full p-2 rounded-md text-white border outline-none"
          style={{
            backgroundColor: colors.inputBg,
            borderColor: colors.inputBorder,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          type="button"
          className="flex-1 py-2 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: colors.primaryButton }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: colors.primaryButton }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
