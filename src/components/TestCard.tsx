import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Constants for the component's color palette.
 * Using arbitrary hex values to ensure Tailwind emits these colors regardless of purge settings
 * for files outside the standard src/app directory.
 */
const COLORS = {
  CARD_BG: 'bg-[#2a2a2a]',
  INPUT_BG: 'bg-[#333333]',
  INPUT_BORDER: 'border-[#555555]',
  ACCENT_TEXT: 'text-[#c8934a]',
  MUTED_TEXT: 'text-[#cccccc]',
  ICON_MUTED: 'text-[#888888]',
  BUTTON_BG: 'bg-[#b85c20]',
  PLACEHOLDER: 'placeholder-[#888888]',
} as const;

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
}

/**
 * Shared input field component to reduce repetition in the form layout.
 */
const InputField = ({ label, id, placeholder }: InputFieldProps) => (
  <div className="mb-4">
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className={`text-sm ${COLORS.MUTED_TEXT}`}>
        {label}
      </label>
      <FiInfo className={`${COLORS.ICON_MUTED} text-sm`} />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 rounded ${COLORS.INPUT_BG} border ${COLORS.INPUT_BORDER} text-white ${COLORS.PLACEHOLDER}`}
    />
  </div>
);

/**
 * TestCard: A self-contained reproduction of a "UI magician Agent" design panel.
 * Used for visual verification and showcase of the Figma integration UI.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className={`${COLORS.CARD_BG} rounded-lg p-4 max-w-sm mx-auto font-sans text-white shadow-xl`}>
        {/* Header: Title and Settings */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">UI magician Agent</span>
          <FiSettings className="text-white text-xl cursor-not-allowed" />
        </div>

        {/* Status indicator / Collapsible preview row */}
        <div className="flex items-center gap-2 mb-6">
          <FiChevronUp className={COLORS.ACCENT_TEXT} title="Collapse" />
          <span className={`${COLORS.ACCENT_TEXT} text-sm truncate`}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Section Heading: Add New Design */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-white" />
          <span className="font-bold text-white">Add New Design</span>
        </div>

        {/* Form Fields: Replicated from Figma design requirements */}
        <InputField
          label="Personal Access Token"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <div className="mb-6">
          <InputField
            label="Design URL"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Action Buttons: Primary burnt-orange theme */}
        <div className="flex gap-3 mb-6">
          <button className={`flex-1 p-2 rounded-lg ${COLORS.BUTTON_BG} text-white font-medium hover:opacity-90 transition-opacity`}>
            Awesome
          </button>
          <button className={`flex-1 p-2 rounded-lg ${COLORS.BUTTON_BG} text-white font-medium hover:opacity-90 transition-opacity`}>
            Prepare
          </button>
        </div>

        {/* Footer: List identifier */}
        <div>
          <h2 className="font-bold text-white border-t border-[#444444] pt-4">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
