import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * Design tokens and colors derived from Figma specifications.
 * Inline styles are used here to ensure pixel-perfect color parity and
 * to avoid issues with Tailwind purging custom colors in isolated component rendering.
 */
const COLORS = {
  bg: '#2a2a2a',
  header: '#b5b5b5',
  subtitle: '#8b9291',
  sectionTitle: '#b2b2b1',
  label: '#a4a4a3',
  inputBg: '#333330',
  inputBorder: '#4a4a48',
  inputPlaceholder: '#737470',
  buttonAwesome: '#a0522d',
  buttonPrepare: '#8b4513',
  recentBreakdowns: '#b0b0b0',
} as const;

/**
 * Helper component for inputs with labels and info icons.
 */
const DesignInput = ({ label, placeholder, color }: { label: string; placeholder: string; color: string }) => (
  <div className="mb-3">
    <div className="flex items-center gap-1 mb-1">
      <span style={{ color }} className="text-xs font-semibold">
        {label}
      </span>
      <HiInformationCircle style={{ color }} size={14} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.inputPlaceholder,
      }}
      className="w-full border rounded px-3 py-2 text-xs font-semibold outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg }}
      className="w-full p-5 font-sans"
    >
      {/* Header: Title and Settings */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: COLORS.header }} className="text-sm font-semibold">
          UI magician Agent
        </span>
        <HiCog style={{ color: COLORS.header }} size={20} />
      </div>

      {/* Subtitle / Context info */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp style={{ color: COLORS.subtitle }} size={14} />
        <span style={{ color: COLORS.subtitle }} className="text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp style={{ color: COLORS.sectionTitle }} size={14} />
        <span style={{ color: COLORS.sectionTitle }} className="text-sm font-semibold">
          Add New Design
        </span>
      </div>

      <DesignInput
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        color={COLORS.label}
      />

      <DesignInput
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        color="#a3a3a2" // Specific hex from Figma for this label
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5 mb-8">
        <button
          style={{ backgroundColor: COLORS.buttonAwesome, color: '#e8d5c4' }}
          className="flex-1 rounded-lg py-3 text-xs font-semibold"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.buttonPrepare, color: '#c4a882' }}
          className="flex-1 rounded-lg py-3 text-xs font-semibold"
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <span style={{ color: COLORS.recentBreakdowns }} className="text-sm font-semibold">
        Recent Breakdowns
      </span>
    </div>
  );
};
