import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';

/**
 * PRODUCTION NOTES:
 * This component uses hardcoded hex values in Tailwind arbitrary classes (e.g., bg-[#282828]).
 * This is intentional because it lives in src/components/, which is outside the main app 
 * theme provider and CSS variable scope. Using arbitrary values ensures the Figma design 
 * is accurately represented regardless of app-level styling.
 */

const COLORS = {
  bg: 'bg-[#282828]',
  inputBg: 'bg-[#1e1b18]',
  textPrimary: 'text-[#d4c5b8]',
  textSubtle: 'text-[#9a8c82]',
  textHeading: 'text-[#c8bbb0]',
  border: 'border-[#4a3f38]',
  button: 'bg-[#9a4a20]',
  buttonText: 'text-[#e8d5c4]',
};

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className={`min-h-screen ${COLORS.bg} p-4 ${COLORS.textPrimary} font-sans`}
    >
      <Header />

      {/* Add New Design Section */}
      <div className="mb-6">
        <SectionHeading title="Add New Design" />

        <InputGroup
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputGroup
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        <div className="flex space-x-2">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className={`text-lg font-bold ${COLORS.textHeading}`}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-lg" />
      </div>
      <div className={`mb-6 flex items-center text-sm ${COLORS.textSubtle}`}>
        <FiChevronUp className="mr-1" />
        <span>From entire frame to a singl...</span>
      </div>
    </>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className={`mb-3 flex items-center text-lg font-bold ${COLORS.textHeading}`}>
      <FiChevronUp className="mr-2" />
      <h3>{title}</h3>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  placeholder: string;
}

function InputGroup({ label, placeholder }: InputGroupProps) {
  return (
    <div className="mb-3">
      <label className={`mb-1 block text-sm ${COLORS.textPrimary}`}>
        {label} <span className="cursor-help text-xs">ⓘ</span>
      </label>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`w-full rounded border p-2 ${COLORS.inputBg} ${COLORS.border} ${COLORS.textPrimary} placeholder:${COLORS.textSubtle} outline-none focus:ring-1 focus:ring-[#9a4a20]`}
      />
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <button
      className={`flex-1 rounded p-2 font-semibold ${COLORS.button} ${COLORS.buttonText} transition-colors hover:brightness-110 active:brightness-90`}
    >
      {label}
    </button>
  );
}
