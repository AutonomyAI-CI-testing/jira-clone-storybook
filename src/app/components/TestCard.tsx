import React from 'react';
import { AiFillSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiChevronUp } from 'react-icons/hi';

/**
 * TestCard is a standalone UI component used for visual validation of Figma-to-code translation.
 * It replicates a "UI magician Agent" panel with hardcoded content and specific brand colors.
 * Note: Uses inline styles for brand colors (#2a2a2a, #b05a2f) not present in the project's design tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ background: '#2a2a2a' }}
      className="w-[320px] rounded-xl p-5 flex flex-col gap-5 font-sans"
    >
      {/* Header: Title and Settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <AiFillSetting className="text-gray-400" size={22} />
      </div>

      {/* Status: Active context/frame subtitle */}
      <div className="flex items-center gap-1.5">
        <HiChevronUp className="text-[#c97a45]" size={16} />
        <span className="text-[#c97a45] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Main Action Section: Add New Design Form */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-white" size={18} />
          <span className="text-white font-bold text-base">Add New Design</span>
        </div>

        <FormInput
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <FormInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        <div className="flex gap-3">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* Footer: Recent activity header */}
      <div className="pt-2">
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

/**
 * Reusable input field with label and info icon.
 * Styled for dark mode with specific contrast colors.
 */
const FormInput = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-1.5">
      <label className="text-gray-300 text-sm">{label}</label>
      <AiOutlineInfoCircle className="text-gray-400" size={15} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-600 px-3 py-2 text-gray-400 text-sm placeholder:text-gray-600 outline-none focus:border-gray-500"
      style={{ background: '#1e1e1e' }}
      readOnly
    />
  </div>
);

/**
 * Primary action button with burnt orange background.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    className="flex-1 rounded-lg py-3 text-white font-semibold text-sm transition-opacity hover:opacity-90"
    style={{ background: '#b05a2f' }}
  >
    {label}
  </button>
);
