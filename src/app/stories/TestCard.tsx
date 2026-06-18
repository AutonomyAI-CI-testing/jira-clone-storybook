import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

// Constants for theme colors to maintain consistency and readability
const COLORS = {
  cardBg: '#2a2a2a',
  inputBg: '#1a1a1a',
  buttonBg: '#b5481e',
  mutedOrange: '#c17a4f',
  border: 'border-zinc-600',
  textSecondary: 'text-zinc-400',
};

/**
 * TestCard component
 * 
 * A self-contained smoke test component used to verify Tailwind CSS,
 * react-icons, and basic layout rendering in the Storybook environment.
 * Replicates a Figma design panel for a "UI magician Agent".
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div
        className="rounded-xl p-5 text-white"
        style={{ backgroundColor: COLORS.cardBg }}
      >
        {/* Header row: Title and settings icon */}
        <div className="flex items-center justify-between">
          <span className="font-bold">UI magician Agent</span>
          <AiOutlineSetting size={22} color="white" title="Settings" />
        </div>

        {/* Subtext row: Status/Context indicator */}
        <div className="mt-2 flex items-center gap-2">
          <BiChevronUp color="white" />
          <span className="text-sm" style={{ color: COLORS.mutedOrange }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Section title: Toggleable header for design addition */}
        <div className="mb-2 mt-6">
          <div className="flex items-center gap-2">
            <BiChevronUp color="white" />
            <span className="text-lg font-bold">Add New Design</span>
          </div>
        </div>

        {/* Input Field: Personal Access Token */}
        <div className="mt-4">
          <label className="mb-1 flex items-center gap-1 text-sm">
            Personal Access Token
            <AiOutlineInfoCircle size={16} color="white" title="Token info" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={`w-full rounded border px-3 py-2 text-sm ${COLORS.border} ${COLORS.textSecondary}`}
            style={{ backgroundColor: COLORS.inputBg }}
          />
        </div>

        {/* Input Field: Design URL */}
        <div className="mt-3">
          <label className="mb-1 flex items-center gap-1 text-sm">
            Design URL
            <AiOutlineInfoCircle size={16} color="white" title="URL info" />
          </label>
          <input
            type="url"
            placeholder="https://www.figma.com/file/:"
            className={`w-full rounded border px-3 py-2 text-sm ${COLORS.border} ${COLORS.textSecondary}`}
            style={{ backgroundColor: COLORS.inputBg }}
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg py-2 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.buttonBg }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg py-2 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.buttonBg }}
          >
            Prepare
          </button>
        </div>

        {/* Footer section heading */}
        <h3 className="mt-8 text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
