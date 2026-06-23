
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component visually replicates the "UI magician Agent" Figma design.
 * It is a self-contained smoke test component used to verify design implementation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] p-4 bg-[#1a1a1a] flex flex-col gap-3 rounded-md shadow-lg">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <FiSettings className="text-[#b5b5b5] text-base" />
        </button>
      </div>

      {/* Subtitle Row: Contextual info */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#8b9291] text-sm shrink-0" />
        <p className="text-[#8b9291] font-semibold text-xs truncate">
          From entire frame to a singl...
        </p>
      </div>

      {/* Visual divider matching the design's section separation */}
      <div className="h-px bg-[#333] my-2" aria-hidden="true" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#b2b2b1] text-sm shrink-0" />
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Input Group: Personal Access Token */}
      <InputGroup
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Input Group: Design URL */}
      <InputGroup
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons: Principal CTAs for the magician agent */}
      <div className="flex gap-3 justify-end mt-1">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer Title: History of previous actions */}
      <h3 className="text-[#b0b0b0] font-semibold text-sm mt-1">Recent Breakdowns</h3>
    </div>
  );
};

/**
 * Reusable input group for the card with design-specific styling.
 */
const InputGroup = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-[11px] font-semibold">
        {label}
      </label>
      <FiInfo className="text-[#a4a4a3] text-[10px]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-[#2a2a2a] border border-[#444] text-[#737470] placeholder-[#737470] text-xs px-3 py-2 rounded focus:outline-none focus:border-[#555] transition-colors w-full"
    />
  </div>
);

/**
 * Styled button used for primary actions in the TestCard.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="bg-[#b5541a] hover:bg-[#c6642a] text-white text-[11px] font-semibold rounded px-4 py-2 transition-colors active:scale-95"
  >
    {label}
  </button>
);
