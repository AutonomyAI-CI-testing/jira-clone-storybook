
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design constants reflecting the Figma specification.
 * These values are extracted to maintain consistency and improve readability.
 */
const COLORS = {
  bg: '#272822',
  textMuted: '#b5b5b5',
  textSecondary: '#8b9291',
  textAccent: '#b2b2b1',
  labelColor: '#a4a4a3',
  urlLabelColor: '#a3a3a2',
  placeholderColorPrimary: '#737470',
  placeholderColorSecondary: '#71726e',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
  headingColor: '#b0b0b0',
  inputBorderPat: '#a5adad',
  inputBorderUrl: '#929291',
} as const;

/**
 * TestCard component
 * 
 * A self-contained panel replicating the "UI magician Agent" UI.
 * This component is intended for visual testing and showcase purposes.
 * 
 * Note: The root element has id="testElem" as required for automated test targeting.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-5 font-[Inter]"
      style={{ backgroundColor: COLORS.bg, color: 'white' }}
    >
      {/* Header section: Title and configuration settings */}
      <div className="flex justify-between items-center">
        <h2 className="text-[13.5px] font-semibold" style={{ color: COLORS.textMuted }}>
          UI magician Agent
        </h2>
        <FiSettings style={{ color: COLORS.textMuted }} aria-hidden="true" />
      </div>

      {/* Collapsed row: Contextual information */}
      <div className="flex items-center gap-2 mt-3 cursor-pointer">
        <FiChevronUp className="text-sm" style={{ color: COLORS.textSecondary }} aria-hidden="true" />
        <p className="text-[11.5px] font-semibold" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-6 cursor-pointer">
        <FiChevronUp className="text-sm" style={{ color: COLORS.textAccent }} aria-hidden="true" />
        <h3 className="text-[13.5px] font-semibold" style={{ color: COLORS.textAccent }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token (PAT) field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <label
            htmlFor="pat"
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.labelColor }}
          >
            Personal Access Token
          </label>
          <FiInfo className="text-xs" style={{ color: COLORS.labelColor }} aria-hidden="true" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 border text-[10.5px] font-semibold outline-none"
          style={{
            backgroundColor: COLORS.bg,
            borderColor: COLORS.inputBorderPat,
            color: COLORS.placeholderColorPrimary,
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <label
            htmlFor="designUrl"
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.urlLabelColor }}
          >
            Design URL
          </label>
          <FiInfo className="text-xs" style={{ color: COLORS.urlLabelColor }} aria-hidden="true" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 border-2 text-[11.5px] font-semibold outline-none"
          style={{
            backgroundColor: COLORS.bg,
            borderColor: COLORS.inputBorderUrl,
            color: COLORS.placeholderColorSecondary,
          }}
        />
      </div>

      {/* Action buttons: Execution triggers */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          type="button"
          className="text-[11.5px] font-semibold rounded-md px-6 py-2 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="text-[11.5px] font-semibold rounded-md px-6 py-2 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns gallery heading */}
      <h3 className="mt-8 text-[13.5px] font-semibold" style={{ color: COLORS.headingColor }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
