
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Constants for shared styling and colors to ensure consistency and easier updates
const COLORS = {
  BACKGROUND_CARD: 'bg-[#2a2a2a]',
  BACKGROUND_INPUT: 'bg-[#272822]',
  TEXT_PRIMARY: 'text-[#b5b5b5]',
  TEXT_SECONDARY: 'text-[#8b9291]',
  TEXT_LABEL: 'text-[#a4a4a3]',
  TEXT_HEADING: 'text-[#b2b2b1]',
  BORDER_TOKEN: 'border-[#929291]',
  BORDER_URL: 'border-[#a5adad]',
  BUTTON_BG: 'bg-[#843a17]',
  BUTTON_TEXT: 'text-[#8c8078]',
} as const;

/**
 * Reusable Input field component for the TestCard form.
 * Encapsulates label, info icon, and input styling.
 */
interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClass: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, placeholder, borderClass }) => (
  <div className="mb-4">
    <div className="flex items-center gap-1.5 mb-1">
      <label htmlFor={id} className={`${COLORS.TEXT_LABEL} font-semibold text-xs`}>
        {label}
      </label>
      <HiInformationCircle className={`${COLORS.TEXT_LABEL} w-3 h-3`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full ${COLORS.BACKGROUND_INPUT} border ${borderClass} rounded-[4px] px-2 py-2 ${COLORS.TEXT_PRIMARY} placeholder-[#737470] text-xs outline-none`}
    />
  </div>
);

/**
 * Common Button component for consistency across the card actions.
 */
const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className={`${COLORS.BUTTON_BG} ${COLORS.BUTTON_TEXT} font-semibold text-xs rounded-[4px] px-6 py-2.5 hover:opacity-90 transition-opacity`}>
    {children}
  </button>
);

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className={`${COLORS.BACKGROUND_CARD} p-5 w-[254px]`}>
      {/* Header Row: Displays the agent name and settings toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`${COLORS.TEXT_PRIMARY} font-semibold text-sm`}>UI magician Agent</h2>
        <HiCog className={`${COLORS.TEXT_PRIMARY} w-5 h-5 cursor-pointer`} />
      </div>

      {/* Context/Status Row: Shows current scope/operation summary */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className={`${COLORS.TEXT_SECONDARY} w-4 h-4`} />
        <p className={`${COLORS.TEXT_SECONDARY} text-xs truncate`}>From entire frame to a singl...</p>
      </div>

      {/* "Add New Design" Section Header */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        <HiChevronUp className={`${COLORS.TEXT_HEADING} w-4 h-4`} />
        <h3 className={`${COLORS.TEXT_HEADING} font-semibold text-sm`}>Add New Design</h3>
      </div>

      <div className="space-y-4">
        <FormField
          id="pat-input"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClass={`border-2 ${COLORS.BORDER_TOKEN}`}
        />

        <FormField
          id="url-input"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderClass={COLORS.BORDER_URL}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-3 justify-center mt-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* History section label */}
      <h3 className="mt-8 text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
    </div>
  );
}
