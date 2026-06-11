import type { ReactNode } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Figma-specific colors matching the design spec
const COLORS = {
  dark: '#2a2a2a',
  darker: '#1e1e1e',
  burningOrange: '#c97941',
  buttonBg: '#a0522d',
  textLight: '#e5e5e5',
  textMuted: '#9ca3af',
  borderColor: '#4b5563',
} as const;

/**
 * TestCard component
 * A self-contained smoke-test UI card that reproduces a dark-themed Figma design.
 * Uses Tailwind CSS with inline arbitrary values for Figma-specific colors.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="max-w-[360px] rounded-lg p-5 pb-6 font-sans"
      style={{
        background: COLORS.dark,
        color: COLORS.textLight,
      }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-xl m-0" style={{ color: COLORS.textLight }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline size={22} style={{ color: COLORS.textLight }} />
      </div>

      {/* Collapsed Row - Matches the Figma "collapsed" state indicator */}
      <div className="flex items-center mb-6" style={{ color: COLORS.burningOrange }}>
        <RiArrowDropDownLine
          size={22}
          className="-rotate-90"
          style={{ color: COLORS.burningOrange }}
        />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        <RiArrowDropDownLine size={22} style={{ color: COLORS.textLight }} />
        <h3 className="font-bold text-lg m-0" style={{ color: COLORS.textLight }}>
          Add New Design
        </h3>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-3.5 mb-5">
        <InputGroup
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputGroup
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-7">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section Footer */}
      <h3 className="font-bold text-lg m-0" style={{ color: COLORS.textLight }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

/**
 * Reusable input group with label and info icon
 */
const InputGroup = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="flex items-center gap-1 text-[13px] mb-1.5"
      style={{ color: COLORS.textMuted }}
    >
      {label}
      <AiOutlineInfoCircle size={14} />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full px-2.5 py-2 border rounded-md text-[13px] box-border outline-none transition-colors focus:border-gray-400"
      style={{
        background: COLORS.darker,
        borderColor: COLORS.borderColor,
        color: COLORS.textLight,
      }}
    />
  </div>
);

/**
 * Styled action button matching the burnt-orange design
 */
const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    className="flex-1 text-white border-none rounded-lg py-2.5 text-[15px] font-semibold cursor-pointer active:opacity-90 transition-opacity"
    style={{ background: COLORS.buttonBg }}
  >
    {children}
  </button>
);
