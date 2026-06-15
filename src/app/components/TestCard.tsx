
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design system constants to match Figma "UI magician Agent" panel.
 * These are hardcoded arbitrary values as they represent a specific dark-orange theme
 * that doesn't map directly to the project's standard CSS variables.
 */
const COLORS = {
  CARD_BG: 'bg-[#161616]',
  ACCENT_ORANGE: 'bg-[#b85c2a]',
  HOVER_ORANGE: 'hover:bg-[#a04e22]',
  MUTED_ORANGE: 'text-[#c07050]',
  INPUT_BG: 'bg-[#2a2a2a]',
  INPUT_BORDER: 'border-[#3a3a3a]',
  INPUT_FOCUS: 'focus:ring-[#c07050]',
} as const;

/**
 * A reusable input field for the TestCard form.
 * Encapsulates standard styling and accessibility for the dark-themed inputs.
 */
const FormInput = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="mb-4 last:mb-6">
    <label htmlFor={id} className="text-gray-300 text-sm flex items-center mb-2">
      {label} <FiInfo className="ml-1 opacity-70" aria-hidden="true" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-md px-3 py-2 text-sm text-gray-300 ${COLORS.INPUT_BG} border ${COLORS.INPUT_BORDER} placeholder:text-gray-600 focus:outline-none focus:ring-1 ${COLORS.INPUT_FOCUS} transition-shadow`}
    />
  </div>
);

/**
 * TestCard: A presentational component replicating the "UI magician Agent" Figma design.
 * 
 * Used primarily for design fidelity testing in Storybook.
 * Note: Interactions are currently static as per product requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={`${COLORS.CARD_BG} rounded-xl p-4 w-[280px] shadow-2xl`}>
      {/* Header: Panel title and settings entry point */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg leading-tight">UI magician Agent</h2>
        <button aria-label="Settings" className="text-gray-400 hover:text-white transition-colors">
          <FiSettings className="text-xl" />
        </button>
      </div>

      {/* Collapsible Info: Contextual hint about the current frame selection */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-white mr-2 flex-shrink-0" aria-hidden="true" />
        <p className={`${COLORS.MUTED_ORANGE} text-sm truncate`}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Trigger: Add New Design header */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-white mr-2 flex-shrink-0" aria-hidden="true" />
        <h3 className="text-white font-bold text-base">Add New Design</h3>
      </div>

      {/* Configuration Form */}
      <FormInput 
        id="pat" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      <FormInput 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons: Principal CTAs for the agent workflow */}
      <div className="flex gap-3 mb-6">
        <button className={`flex-1 rounded-full py-2 text-sm font-semibold ${COLORS.ACCENT_ORANGE} ${COLORS.HOVER_ORANGE} text-white transition-colors`}>
          Awesome
        </button>
        <button className={`flex-1 rounded-full py-2 text-sm font-semibold ${COLORS.ACCENT_ORANGE} ${COLORS.HOVER_ORANGE} text-white transition-colors`}>
          Prepare
        </button>
      </div>

      {/* Footer Section: View history of previous operations */}
      <div className="border-t border-[#2a2a2a] pt-4">
        <h3 className="text-white font-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
