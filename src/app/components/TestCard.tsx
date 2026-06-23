import React from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { IoSettingsOutline, IoInformationCircleOutline } from 'react-icons/io5';

// Design constants based on Figma spec
const COLORS = {
  BACKGROUND: '#1e1e1e',
  INPUT_BG: '#272822',
  BUTTON_BG: '#843a17',
  TITLE: '#b5b5b5',
  LABEL: '#a4a4a3',
  MUTED: '#8b9291',
  BUTTON_TEXT: '#d4a090',
  PLACEHOLDER: '#737470',
  BORDER_PAT: '#929291',
  BORDER_URL: '#a5adad',
  SECTION_HEADER: '#b2b2b1',
  RECENT: '#b0b0b0',
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClass: string;
}

/**
 * Reusable input field component for the TestCard
 * Encapsulates the label, info icon, and styled input logic
 */
function InputField({ id, label, placeholder, borderClass }: InputFieldProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-[#a4a4a3] text-[11.5px] font-semibold">
          {label}
        </label>
        <IoInformationCircleOutline className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        id={id}
        className={`mt-1 w-full bg-[#272822] ${borderClass} rounded-sm px-3 py-2 text-xs text-[#737470] font-semibold placeholder:text-[#737470] focus:outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
}

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#1e1e1e] p-5 w-[254px] font-sans selection:bg-orange-900/30">
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-base" />
      </div>

      {/* Collapsed subtitle row - indicates current context/scope */}
      <div className="flex items-center gap-2 mt-3">
        <FiChevronUp className="text-[#8b9291]" />
        <p className="text-[#8b9291] text-xs font-semibold truncate">From entire frame to a singl...</p>
      </div>

      {/* Primary action section header */}
      <div className="flex items-center gap-2 mt-8">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h3>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderClass="border-2 border-[#929291]"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClass="border border-[#a5adad]"
      />

      {/* Action buttons row - centered per Figma design */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#843a17] text-[#d4a090] text-[11.5px] font-semibold rounded px-6 py-2 transition-colors hover:brightness-110 active:brightness-95">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#d4a090] text-[11.5px] font-semibold rounded px-6 py-2 transition-colors hover:brightness-110 active:brightness-95">
          Prepare
        </button>
      </div>

      {/* Footer section for history/recent activity */}
      <h3 className="mt-8 text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
    </div>
  );
}
