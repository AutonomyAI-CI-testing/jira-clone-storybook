
import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard is a static mock-up component designed to verify the dark-themed UI
 * Magician Agent panel. It matches a specific Figma design used for smoke testing.
 */
export const TestCard = () => {
  // Shared button styles to maintain consistency with the Figma design's orange-brown tone
  const primaryButtonStyle = { backgroundColor: '#b85c2c' };
  const buttonClassName = "px-5 py-3 rounded-lg text-white text-sm font-medium flex-1 transition-opacity hover:opacity-90 active:scale-[0.98]";

  return (
    <div
      id="testElem"
      // Using inline style for the exact dark background specified in Figma (#2a2a2a)
      // because the standard Tailwind tokens in this project are variable-based.
      style={{ backgroundColor: '#2a2a2a' }}
      className="p-5 min-h-screen text-gray-200 font-sans max-w-xs"
    >
      {/* Header section with branding and settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-100">UI magician Agent</h1>
        <button aria-label="Settings" className="hover:bg-gray-700 p-1 rounded-full transition-colors">
          <IoSettingsOutline className="text-gray-400 text-xl" />
        </button>
      </div>

      {/* Navigation context / Breadcrumb-like indicator */}
      <div className="flex items-center gap-2 mb-6 cursor-pointer hover:bg-gray-800 p-1 rounded transition-colors w-fit">
        <IoChevronUp className="text-gray-400 text-sm" />
        <span className="text-gray-400 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Divider */}
      <div className="border-t border-gray-700 mb-6" aria-hidden="true" />

      {/* Configuration Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <IoChevronUp className="text-gray-400 text-base" />
        <h2 className="text-lg font-bold text-gray-100">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-gray-200 text-sm">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm cursor-help" />
        </div>
        <input
          type="text"
          id="pat"
          autoComplete="off"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-3 text-gray-400 text-sm placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-gray-200 text-sm">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm cursor-help" />
        </div>
        <input
          type="text"
          id="designUrl"
          autoComplete="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-3 text-gray-400 text-sm placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={primaryButtonStyle}
          className={buttonClassName}
        >
          Awesome
        </button>
        <button
          style={primaryButtonStyle}
          className={buttonClassName}
        >
          Prepare
        </button>
      </div>

      {/* History/Footer Section */}
      <h2 className="text-xl font-bold text-gray-100">Recent Breakdowns</h2>
    </div>
  );
};
