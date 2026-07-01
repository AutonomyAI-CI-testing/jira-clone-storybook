
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design constants matching the Figma specification.
 * These are kept as constants to ensure consistency across the component
 * and to make it easier to update the theme if needed.
 */
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#272822',
  ACCENT_BROWN: '#843a17',
  TEXT_HEADING: '#b5b5b5', // "UI magician Agent" and others
  TEXT_MUTED: '#b07a5a',    // "From entire frame..."
  TEXT_BRIGHT: '#d4d4d4',   // "Add New Design"
  TEXT_BUTTON: '#c8b8a8',
  BORDER_TOKEN: '#a5adad',
  BORDER_URL: '#929291',
} as const;

/**
 * A reusable input field for the TestCard form.
 * Encapsulates the label, info icon, and styled input.
 */
interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClass: string;
  borderColor: string;
  placeholderColorClass: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  borderClass,
  borderColor,
  placeholderColorClass,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-1">
      <label htmlFor={id} className="text-sm font-semibold" style={{ color: COLORS.TEXT_HEADING }}>
        {label}
      </label>
      <FiInfo style={{ color: COLORS.TEXT_HEADING }} />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`text-sm rounded px-3 py-2 w-full outline-none ${borderClass} ${placeholderColorClass}`}
      style={{
        backgroundColor: COLORS.INPUT_BG,
        color: '#888',
        borderColor: borderColor,
      }}
    />
  </div>
);

/**
 * TestCard component
 * 
 * A static UI panel mirroring the "UI Magician Agent" design.
 * Used for visual testing and design system demonstration.
 */
export const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="p-4 w-full max-w-sm rounded-md" 
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header row: Title and settings icon */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[13.5px]" style={{ color: COLORS.TEXT_HEADING }}>
          UI magician Agent
        </h2>
        <FiSettings style={{ color: COLORS.TEXT_HEADING }} />
      </div>

      {/* Collapsed state indicator */}
      <div className="flex items-center gap-2 mt-3">
        <FiChevronUp style={{ color: COLORS.TEXT_HEADING }} />
        <span className="text-[11.5px] font-semibold" style={{ color: COLORS.TEXT_MUTED }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacing consistent with design layout */}
      <div className="my-8" aria-hidden="true" />

      {/* Section breakdown: New Design entry */}
      <div className="flex items-center gap-2">
        <FiChevronUp style={{ color: COLORS.TEXT_HEADING }} />
        <h3 className="font-bold text-[13.5px]" style={{ color: COLORS.TEXT_BRIGHT }}>
          Add New Design
        </h3>
      </div>

      {/* Form configuration fields */}
      <div className="mt-4 flex flex-col gap-4">
        <FormField
          id="personalAccessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClass="border"
          borderColor={COLORS.BORDER_TOKEN}
          placeholderColorClass="placeholder:text-[#737470]"
        />

        <FormField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderClass="border-2"
          borderColor={COLORS.BORDER_URL}
          placeholderColorClass="placeholder:text-[#71726e]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button 
          className="rounded-lg px-8 py-3 text-[11.5px] font-semibold transition-opacity hover:opacity-90" 
          style={{ backgroundColor: COLORS.ACCENT_BROWN, color: COLORS.TEXT_BUTTON }}
        >
          Awesome
        </button>
        <button 
          className="rounded-lg px-8 py-3 text-[11.5px] font-semibold transition-opacity hover:opacity-90" 
          style={{ backgroundColor: COLORS.ACCENT_BROWN, color: COLORS.TEXT_BUTTON }}
        >
          Prepare
        </button>
      </div>

      {/* History section footer */}
      <h3 className="mt-8 font-bold text-[13.5px]" style={{ color: COLORS.TEXT_HEADING }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

