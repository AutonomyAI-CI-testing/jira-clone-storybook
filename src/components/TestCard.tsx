import { FC } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Figma-inspired hex colors used for high-fidelity mirroring.
 * Defined as constants to avoid magic values and improve maintainability.
 */
const COLORS = {
  bg: '#2a2a2a',
  headerText: '#b5b5b5',
  subtext: '#8b9291',
  sectionHeading: '#b2b2b1',
  label: '#a4a4a3',
  inputPlaceholder: '#737470',
  buttonBg: '#b5541c',
  footerHeading: '#b0b0b0',
} as const;

export const TestCard: FC = () => {
  return (
    <div
      id="testElem"
      className="p-4 w-full max-w-xs font-sans text-sm rounded-lg"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-base" style={{ color: COLORS.headerText }} />
      </div>

      {/* Collapsed accordion row */}
      <div className="flex items-center gap-1 mb-6">
        <span style={{ color: COLORS.subtext }}>^</span>
        <span className="text-xs font-semibold" style={{ color: COLORS.subtext }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-1 mb-4">
        <span style={{ color: COLORS.sectionHeading }}>^</span>
        <span className="font-semibold text-sm" style={{ color: COLORS.sectionHeading }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <label
        htmlFor="pat"
        className="block text-xs font-semibold mb-1 flex items-center gap-1"
        style={{ color: COLORS.label }}
      >
        Personal Access Token <AiOutlineInfoCircle style={{ color: COLORS.label }} />
      </label>
      <input
        id="pat"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full p-2 mb-4 bg-transparent border rounded-lg text-xs font-semibold focus:outline-none focus:border-white"
        style={{ borderColor: COLORS.sectionHeading, color: COLORS.inputPlaceholder }}
      />

      {/* Design URL */}
      <label
        htmlFor="designUrl"
        className="block text-xs font-semibold mb-1 flex items-center gap-1"
        style={{ color: COLORS.label }}
      >
        Design URL <AiOutlineInfoCircle style={{ color: COLORS.label }} />
      </label>
      <input
        id="designUrl"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full p-2 mb-6 bg-transparent border rounded-lg text-xs font-semibold focus:outline-none focus:border-white"
        style={{ borderColor: COLORS.sectionHeading, color: COLORS.inputPlaceholder }}
      />

      {/* Action Buttons */}
      <div className="flex gap-2 mb-8">
        <button
          className="text-white rounded-lg px-4 py-2 flex-1 text-xs font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Awesome
        </button>
        <button
          className="text-white rounded-lg px-4 py-2 flex-1 text-xs font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <span className="font-semibold text-sm" style={{ color: COLORS.footerHeading }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
