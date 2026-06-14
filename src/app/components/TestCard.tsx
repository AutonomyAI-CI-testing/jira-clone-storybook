import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// --- Constants ---
// Colors matched from the Figma-like reference design
const COLORS = {
  bgPrimary: '#2a2a2a',
  bgInput: '#3a3a3a',
  accent: '#b5431a',
  textSubtle: '#c2784a',
  textSecondary: 'rgba(255,255,255,0.7)',
  textPlaceholder: 'rgba(255,255,255,0.5)',
  borderInput: 'rgba(255,255,255,0.2)',
  white: '#ffffff',
} as const;

// --- Sub-components ---

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label className="text-sm" style={{ color: COLORS.white }}>
        {label}
      </label>
      <AiOutlineInfoCircle style={{ color: COLORS.textSecondary, fontSize: '0.9rem' }} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded px-3 py-2 w-full text-sm outline-none"
      style={{
        backgroundColor: COLORS.bgInput,
        border: `1px solid ${COLORS.borderInput}`,
        color: COLORS.textPlaceholder,
      }}
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="font-semibold px-5 py-2 rounded-lg flex-1 transition-opacity hover:opacity-90"
    style={{ backgroundColor: COLORS.accent, color: COLORS.white }}
  >
    {children}
  </button>
);

// --- Main Component ---

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="rounded-xl p-6 flex flex-col gap-4 max-w-sm"
        style={{ backgroundColor: COLORS.bgPrimary }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold" style={{ color: COLORS.white }}>
            UI magician Agent
          </span>
          <IoSettingsOutline style={{ color: COLORS.textSecondary, fontSize: '1.25rem' }} />
        </div>

        {/* Subtitle */}
        <div className="flex items-center gap-1">
          <FiChevronUp style={{ color: COLORS.textSubtle }} />
          <span className="text-sm" style={{ color: COLORS.textSubtle }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex items-center gap-2 mt-2">
          <FiChevronUp style={{ color: COLORS.white, fontSize: '1.25rem' }} />
          <span className="font-bold text-xl" style={{ color: COLORS.white }}>
            Add New Design
          </span>
        </div>

        <InputField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxx" />
        <InputField label="Design URL" placeholder="https://www.figma.com/file/:" />

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <span className="font-bold text-xl" style={{ color: COLORS.white }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
