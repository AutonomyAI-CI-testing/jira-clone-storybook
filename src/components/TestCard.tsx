import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

/**
 * Constants for theme and styling to keep JSX clean and maintainable.
 * These match the arbitrary values required by the design spec.
 */
const COLORS = {
  cardBg: '#1e1e1e',
  inputBg: '#2a2a2a',
  buttonBg: '#a0522d',
  mutedText: '#c17b4a',
} as const;

/**
 * Reusable input field component for the form sections.
 * Maintains consistent styling and layout for form groups.
 */
const FormField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-sm" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded border border-gray-700 placeholder-gray-500 text-white"
      style={{ backgroundColor: COLORS.inputBg }}
    />
  </div>
);

/**
 * TestCard: A self-contained smoke test component visually replicating a 
 * dark-themed UI panel for design system verification.
 * 
 * Note: Uses inline styles for specific hex values to guarantee fidelity 
 * regardless of Tailwind config variations, while using utility classes 
 * for layout and spacing.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg text-white w-[300px]"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* 1. Header row: Primary identity and configuration access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <AiOutlineSetting className="text-xl" />
      </div>

      {/* 2. Collapsible-looking row: Status/Context indicator */}
      <div className="flex items-center gap-2 mb-4">
        <BiChevronUp className="text-xl" />
        <span style={{ color: COLORS.mutedText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Section header: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <BiChevronUp className="text-xl" />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* 4 & 5. Form Inputs */}
      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* 6. Primary Action Row: Pair of high-emphasis buttons */}
      <div className="flex gap-2 mb-6">
        {['Awesome', 'Prepare'].map((label) => (
          <button
            key={label}
            className="flex-1 p-2 rounded text-white font-semibold"
            style={{ backgroundColor: COLORS.buttonBg }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 7. Footer label: Secondary content section header */}
      <div>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
