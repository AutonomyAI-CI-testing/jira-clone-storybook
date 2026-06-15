import React from 'react';
import { HiChevronUp, HiOutlineCog, HiInformationCircle } from 'react-icons/hi';

// Colors matched to Figma design tokens
const COLORS = {
  PANEL_BG: '#2a2a2a',
  INPUT_BG: '#1e1e1e',
  ACCENT_ORANGE: '#c1622f',
  ACCENT_ORANGE_HOVER: '#a8531f',
  ICON_GRAY: '#9ca3af', // gray-400
  TEXT_MUTED: '#6b7280', // gray-500
  BORDER_DARK: '#4b5563', // gray-600
};

/**
 * TestCard reproduces a "UI magician Agent" design panel from Figma.
 * It is used for visual validation of UI fidelity.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.PANEL_BG }}
      className="text-white p-4 rounded-lg w-full max-w-xs"
    >
      {/* Header row: Agent identity and settings */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-lg">UI magician Agent</span>
        <HiOutlineCog size={22} style={{ color: COLORS.ICON_GRAY }} />
      </div>

      {/* Collapsed row: Contextual info about the scope */}
      <div
        className="flex items-center gap-1 text-sm mb-6"
        style={{ color: COLORS.ACCENT_ORANGE }}
      >
        <HiChevronUp size={16} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section header: Form title */}
      <div className="flex items-center gap-2 font-bold text-lg mb-4">
        <HiChevronUp size={20} />
        <span>Add New Design</span>
      </div>

      {/* Form area: Design configuration */}
      <div>
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        {/* Action buttons: "Awesome" and "Prepare" workflows */}
        <div className="flex gap-3 mt-4">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* Footer: Historical data list */}
      <div className="mt-8">
        <h3 className="font-bold text-lg">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Shared input field with label and info icon
 */
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mb-3">
    <div className="flex items-center gap-1 text-sm font-medium mb-1">
      <span>{label}</span>
      <HiInformationCircle size={16} style={{ color: COLORS.ICON_GRAY }} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      style={{ backgroundColor: COLORS.INPUT_BG, borderColor: COLORS.BORDER_DARK }}
      className="w-full border rounded p-2 text-gray-300 placeholder-gray-500 text-sm"
    />
  </div>
);

/**
 * Actions buttons with branding color
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    style={{ backgroundColor: COLORS.ACCENT_ORANGE }}
    className="flex-1 text-white font-semibold rounded-xl py-3 text-sm hover:opacity-90 transition-opacity"
  >
    {label}
  </button>
);
