
import React from 'react';
import { FaCog, FaChevronUp, FaInfoCircle } from 'react-icons/fa';

// Design tokens from Figma spec
const COLORS = {
  bgPanel: '#1a1a1a',
  bgInput: '#272822',
  bgButton: '#843a17',
  textPrimary: '#b5b5b5',
  textSecondary: '#8b9291',
  textSection: '#b2b2b1',
  textLabel: '#a4a4a3',
  textPlaceholder: '#737470',
  textButton: '#8c8078',
  textMuted: '#b0b0b0',
  borderInputPAT: '#929291',
  borderInputURL: '#a5adad',
};

/**
 * TestCard component representing the "UI Magician Agent" design panel.
 * Built as a standalone component for visual testing and review.
 */
export function TestCard(): JSX.Element {
  const inputBaseClass =
    'w-full bg-[#272822] border rounded text-xs font-semibold px-3 py-2 mt-1 outline-none';

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col gap-3 p-5 font-sans"
      style={{ backgroundColor: COLORS.bgPanel, color: COLORS.textPrimary }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">UI magician Agent</span>
        <FaCog size={16} />
      </div>

      {/* Chevron subtitle row */}
      <div className="flex items-center gap-2" style={{ color: COLORS.textSecondary }}>
        <FaChevronUp size={8} />
        <span className="text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2" style={{ color: COLORS.textSection }}>
        <FaChevronUp size={10} />
        <span className="text-sm font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token input */}
      <div className="mt-2">
        <div className="flex items-center gap-2" style={{ color: COLORS.textLabel }}>
          <span className="text-xs font-semibold">Personal Access Token</span>
          <FaInfoCircle size={12} />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputBaseClass}
          style={{
            borderColor: COLORS.borderInputPAT,
            color: COLORS.textPlaceholder,
          }}
        />
      </div>

      {/* Design URL input */}
      <div className="mt-3">
        <div className="flex items-center gap-2" style={{ color: COLORS.textLabel }}>
          <span className="text-xs font-semibold">Design URL</span>
          <FaInfoCircle size={12} />
        </div>
        <input
          placeholder="https://www.figma.com/file/:"
          className={inputBaseClass}
          style={{
            borderColor: COLORS.borderInputURL,
            color: '#71726e', // Specific placeholder color for URL
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="mt-4 flex gap-3 justify-center">
        <button
          className="flex-1 rounded py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.bgButton, color: COLORS.textButton }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.bgButton, color: COLORS.textButton }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-6">
        <span className="text-sm font-semibold" style={{ color: COLORS.textMuted }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
