
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const COLORS = {
  bg: '#2a2a2a',
  inputBg: '#272822',
  textPrimary: '#b5b5b5',
  textSecondary: '#8b9291',
  textTertiary: '#b2b2b1',
  label: '#a4a4a3',
  inputBorder: '#a5adad',
  inputPlaceholder: '#737470',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
} as const;

/**
 * TestCard component for the UI Magician Agent.
 * High-fidelity card for design integration inputs.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-4 rounded shadow-lg font-sans space-y-4 max-w-sm"
      style={{ backgroundColor: COLORS.bg, color: COLORS.textPrimary }}
    >
      {/* Header Row */}
      <header className="flex justify-between items-center">
        <h2 className="text-[13.5px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-lg cursor-pointer" aria-label="Settings" />
      </header>

      {/* Subtitle Row - Collapsible indicator */}
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <FiChevronUp className="text-sm" style={{ color: COLORS.textSecondary }} />
        <p className="text-[11.5px] font-semibold" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacing to match original design intent */}
      <div className="h-4" aria-hidden="true" />

      {/* Add New Design Section Heading */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-sm" style={{ color: COLORS.textTertiary }} />
          <h3 className="text-[13.5px] font-semibold" style={{ color: COLORS.textTertiary }}>
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="pat" className="text-[11.5px] font-semibold" style={{ color: COLORS.label }}>
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-xs" style={{ color: COLORS.label }} />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md border-[1px] text-[11.5px] font-semibold focus:outline-none focus:ring-1 transition-shadow"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              color: COLORS.inputPlaceholder, // Using placeholder color as text color per original design
            }}
          />
        </div>

        {/* Design URL Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="design-url" className="text-[11.5px] font-semibold" style={{ color: COLORS.label }}>
              Design URL
            </label>
            <AiOutlineInfoCircle className="text-xs" style={{ color: COLORS.label }} />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="w-full p-2 rounded-md border-[2px] text-[11.5px] font-semibold focus:outline-none focus:ring-1 transition-shadow"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: '#929291', // Specific border color for URLs
              color: '#71726e',
            }}
          />
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="flex-1 py-2 rounded-lg text-[11.5px] font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-lg text-[11.5px] font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3
        className="text-[13.5px] font-semibold mt-4"
        style={{ color: '#b0b0b0' }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};
