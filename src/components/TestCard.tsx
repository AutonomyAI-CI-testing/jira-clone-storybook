import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard is a smoke test component that replicates a dark-themed settings panel.
 * It uses inline styles for colors because this file resides in src/components/
 * which is outside the default Tailwind JIT scanning path (src/app/**).
 */

const COLORS = {
  bg: "#2a2a2a",
  inputBg: "#3a3a3a",
  primaryText: "#b5b5b5",
  secondaryText: "#8b9291",
  mutedText: "#a4a4a3",
  headerText: "#b2b2b1",
  footerText: "#b0b0b0",
  placeholder: "#737470",
  buttonBg: "#c0522a",
  buttonText: "#8c8078",
  border: "#555",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg w-full max-w-xs font-sans"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header Row: Agent Title and Settings */}
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.primaryText }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={18} style={{ color: COLORS.primaryText }} />
      </div>

      {/* Collapsed Subtitle Row: Contextual Information */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp size={16} style={{ color: COLORS.secondaryText }} />
        <span className="text-xs" style={{ color: COLORS.secondaryText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Main Actionable Area */}
      <div className="flex items-center gap-1 mt-4">
        <FiChevronUp size={16} style={{ color: COLORS.headerText }} />
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          Add New Design
        </span>
      </div>

      {/* Input Field: Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.mutedText }}
          >
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={12} style={{ color: COLORS.mutedText }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full mt-1 px-3 py-2 rounded text-xs focus:outline-none"
          style={{
            borderColor: COLORS.border,
            backgroundColor: COLORS.inputBg,
            color: COLORS.primaryText,
            "--tw-placeholder-color": COLORS.placeholder,
          } as React.CSSProperties}
        />
      </div>

      {/* Input Field: Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.mutedText }}
          >
            Design URL
          </span>
          <AiOutlineInfoCircle size={12} style={{ color: COLORS.mutedText }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full mt-1 px-3 py-2 rounded text-xs focus:outline-none"
          style={{
            borderColor: COLORS.border,
            backgroundColor: COLORS.inputBg,
            color: COLORS.primaryText,
            "--tw-placeholder-color": COLORS.placeholder,
          } as React.CSSProperties}
        />
      </div>

      {/* Action Buttons: Principal CTAs */}
      <div className="flex gap-3 mt-4">
        <button
          className="flex-1 py-2 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Navigation/History */}
      <div className="mt-6">
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.footerText }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
