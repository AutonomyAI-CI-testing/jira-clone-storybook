
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoChevronUp } from 'react-icons/io5';

/**
 * Design constants matched from Figma specifications.
 * These are kept as constants to centralize styling and improve readability
 * while ensuring identical visual output.
 */
const COLORS = {
  bg: '#272822',
  textMuted: '#b5b5b5',
  textSecondary: '#8b9291',
  textSection: '#b2b2b1',
  label: '#a4a4a3',
  labelSecondary: '#a3a3a2',
  placeholder: '#737470',
  placeholderSecondary: '#71726e',
  border: '#a5adad',
  borderSecondary: '#929291',
  buttonBg: '#843a17',
  buttonText: '#c4a898',
  heading: '#b0b0b0',
} as const;

/**
 * TestCard is a smoke test component designed to verify the UI pipeline,
 * Tailwind configuration, and icon integration in isolation.
 * 
 * It replicates a "UI Magician Agent" panel from Figma with a dark theme.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 rounded-lg max-w-[280px] text-white" style={{ backgroundColor: COLORS.bg }}>
      {/* Header: Title and Settings accessibility */}
      <header className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm" style={{ color: COLORS.textMuted }}>
          UI magician Agent
        </h2>
        <AiOutlineSetting className="text-lg" style={{ color: COLORS.textMuted }} />
      </header>

      {/* Breadcrumb/Context row */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className="text-xs" style={{ color: COLORS.textSecondary }} />
        <span className="text-xs font-semibold" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer between sections */}
      <div className="my-4" aria-hidden="true" />

      {/* Section Trigger/Heading */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className="text-lg" style={{ color: COLORS.textSection }} />
        <h3 className="text-lg font-semibold" style={{ color: COLORS.textSection }}>
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label htmlFor="pat" className="text-sm" style={{ color: COLORS.label }}>
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.label }} title="Enter your Figma PAT" />
          </div>
          <input
            id="pat"
            type="password" // Changed to password for production readiness/security feel, though visual remains similar if empty
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            autoComplete="off"
            className="border text-sm w-full rounded px-3 py-2 focus:outline-none focus:ring-1"
            style={{ 
              backgroundColor: COLORS.bg, 
              borderColor: COLORS.border,
              color: 'white'
            }}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label htmlFor="design-url" className="text-sm" style={{ color: COLORS.labelSecondary }}>
              Design URL
            </label>
            <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.labelSecondary }} title="URL of the Figma design" />
          </div>
          <input
            id="design-url"
            type="url"
            placeholder="https://www.figma.com/file/:"
            className="border text-sm w-full rounded px-3 py-2 focus:outline-none focus:ring-1"
            style={{ 
              backgroundColor: COLORS.bg, 
              borderColor: COLORS.borderSecondary,
              color: 'white'
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button 
          className="flex-1 rounded-lg px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 rounded-lg px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <h3 className="text-lg font-semibold" style={{ color: COLORS.heading }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
