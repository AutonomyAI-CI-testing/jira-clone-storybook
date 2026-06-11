import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Design specification constants from Figma
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#272822',
  BUTTON_BG: '#843a17',
  TITLE_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL_TEXT: '#a4a4a3',
  PLACEHOLDER: '#737470',
  BUTTON_TEXT: '#8c8078',
  RECENT_TITLE: '#b0b0b0',
  BORDER_PAT: '#a5adad',
  BORDER_URL: '#929291',
} as const;

/**
 * Reusable Form Field component for the TestCard
 */
interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  borderStyle: string;
  placeholderColor: string;
}

const FormField = ({ label, id, placeholder, borderStyle, placeholderColor }: FormFieldProps) => (
  <div className="flex flex-col space-y-1 mt-3">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className="text-[11.5px] font-semibold" style={{ color: COLORS.LABEL_TEXT }}>
        {label}
      </label>
      <HiInformationCircle style={{ color: COLORS.LABEL_TEXT }} size={14} />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full rounded p-2 text-sm focus:outline-none ${borderStyle}`}
      style={{
        backgroundColor: COLORS.INPUT_BG,
        color: placeholderColor,
      }}
    />
  </div>
);

/**
 * TestCard: A smoke-test component reproducing a UI magician Agent panel.
 * All content is static as per the design requirements.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 p-4 flex flex-col space-y-3"
      style={{ backgroundColor: COLORS.CARD_BG, color: 'white' }}
    >
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[13.5px]" style={{ color: COLORS.TITLE_TEXT }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline style={{ color: COLORS.MUTED_TEXT }} size={18} />
      </div>

      {/* State Indicator: Collapsed context row */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp style={{ color: COLORS.MUTED_TEXT }} size={16} />
        <span className="text-[11.5px] font-semibold" style={{ color: COLORS.MUTED_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Design-specified vertical spacing */}
      <div className="mt-4" />

      {/* Main Section Header */}
      <div className="flex items-center gap-2">
        <HiChevronUp style={{ color: COLORS.SECTION_HEADER }} size={16} />
        <h3 className="font-semibold text-[13.5px]" style={{ color: COLORS.SECTION_HEADER }}>
          Add New Design
        </h3>
      </div>

      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        borderStyle="border border-[#a5adad]"
        placeholderColor={COLORS.PLACEHOLDER}
      />

      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderStyle="border-2 border-[#929291]"
        placeholderColor="#71726e" // Specific choice from Figma spec
      />

      {/* Action Buttons: Themed with specific brown background */}
      <div className="flex gap-3 justify-center mt-3">
        <button
          className="rounded px-5 py-2 font-semibold text-xs transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="rounded px-5 py-2 font-semibold text-xs transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Secondary Section Title */}
      <h4 className="font-semibold text-[13.5px] mt-4" style={{ color: COLORS.RECENT_TITLE }}>
        Recent Breakdowns
      </h4>
    </div>
  );
}
