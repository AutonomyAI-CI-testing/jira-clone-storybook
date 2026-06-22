
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * Constants for the bespoke dark theme. 
 * Using hex values to match the Figma design exactly as requested in the planner.
 */
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#1e1e1e',
  BORDER: '#4a3a2a',
  TEXT_PRIMARY: '#e5e5e5',
  TEXT_MUTED: '#a08060',
  ACCENT: '#b85c2a',
} as const;

/**
 * Reusable Input field for the TestCard form.
 */
const FormInput: React.FC<{
  id: string;
  label: string;
  placeholder: string;
}> = ({ id, label, placeholder }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1">
      <label htmlFor={id} style={{ color: COLORS.TEXT_PRIMARY, fontSize: '0.875rem' }}>
        {label}
      </label>
      <HiInformationCircle style={{ color: COLORS.TEXT_PRIMARY, fontSize: '1rem' }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: COLORS.INPUT_BG,
        border: `1px solid ${COLORS.BORDER}`,
        color: 'white',
      }}
      className="w-full rounded px-3 py-2 text-sm focus:outline-none"
    />
  </div>
);

/**
 * TestCard component
 * A self-contained panel replicating a "UI magician Agent" panel from a Figma design.
 * Uses inline styles for specific hex colors to ensure design fidelity regardless of Tailwind configuration.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.CARD_BG, color: 'white' }}
      className="flex flex-col gap-4 p-5 rounded-xl w-full"
    >
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
          UI magician Agent
        </h2>
        <HiCog style={{ color: COLORS.TEXT_PRIMARY, fontSize: '1.25rem' }} />
      </div>

      {/* Decorative collapsible row - visual representation only as per requirements */}
      <div className="flex items-center gap-2">
        <HiChevronUp style={{ color: COLORS.TEXT_PRIMARY, fontSize: '1.125rem' }} />
        <span style={{ color: COLORS.TEXT_MUTED, fontSize: '0.875rem' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Primary section header */}
      <div className="flex items-center gap-2 mt-4">
        <HiChevronUp style={{ color: COLORS.TEXT_PRIMARY, fontSize: '1.125rem' }} />
        <h3 className="font-bold text-base" style={{ color: COLORS.TEXT_PRIMARY }}>
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <FormInput 
        id="pat" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxx" 
      />
      <FormInput 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          style={{ backgroundColor: COLORS.ACCENT, color: 'white' }}
          className="flex-1 rounded-lg px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.ACCENT, color: 'white' }}
          className="flex-1 rounded-lg px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90"
        >
          Prepare
        </button>
      </div>

      {/* Footer label */}
      <h3 className="font-bold text-base mt-4" style={{ color: COLORS.TEXT_PRIMARY }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
