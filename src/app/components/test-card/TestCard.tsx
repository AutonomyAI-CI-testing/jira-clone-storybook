
import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';
import { RiArrowUpSLine } from 'react-icons/ri';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design-specific color tokens that don't map to project standard tokens.
// Extracted to constants to maintain consistency with the Figma plugin design.
const COLORS = {
  BACKGROUND: '#2a2a2a', // Zinc-800 equivalent
  INPUT_BG: '#1a1a1a',
  ACCENT: '#c8823d', // Amber/orange muted text
  PRIMARY_BUTTON: '#a0522d', // Orange-brown button
  PRIMARY_BUTTON_HOVER: '#8b4513',
} as const;

/**
 * A self-contained smoke-test component that visually approximates a Figma plugin panel.
 * Used as a visual regression target in Storybook.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="text-white rounded-xl p-4 w-[300px] space-y-4"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header: Branding and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <HiOutlineCog className="text-xl opacity-80" />
      </div>

      {/* Collapsible Info Row: Muted accent indicates secondary/informative status */}
      <div className="flex items-center gap-1">
        <RiArrowUpSLine className="text-lg" />
        <span className="text-sm" style={{ color: COLORS.ACCENT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacing element to match Figma plugin vertical rhythm */}
      <div className="h-4" aria-hidden="true" />

      {/* Form Section: Add New Design */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <RiArrowUpSLine className="text-base" />
          <h3 className="text-base font-bold">Add New Design</h3>
        </div>

        <InputField
          id="personalAccessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Row: Primary buttons for the plugin workflow */}
      <div className="flex gap-3 justify-center mt-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Bottom Section Heading */}
      <h3 className="text-base font-bold mt-4">Recent Breakdowns</h3>
    </div>
  );
};

/**
 * Reusable input field pattern for the TestCard form.
 * Encapsulates the label, info icon, and dark-themed input styling.
 */
const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-sm text-gray-400" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
      style={{ backgroundColor: COLORS.INPUT_BG }}
    />
  </div>
);

/**
 * Themed button matching the Figma plugin and "UI magician" design.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 opacity-90 hover:opacity-100"
    style={{ backgroundColor: COLORS.PRIMARY_BUTTON }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON_HOVER)}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON)}
  >
    {children}
  </button>
);
