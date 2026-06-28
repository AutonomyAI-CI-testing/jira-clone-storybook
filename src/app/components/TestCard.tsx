import React from "react";

/**
 * Design tokens extracted from Figma specification.
 * These are exact hex values and sizes required for pixel-perfect match.
 */
const COLORS = {
  BACKGROUND: "#272822",
  HEADER_TEXT: "#b5b5b5",
  MUTED_TEXT: "#8b9291",
  SECTION_TEXT: "#b2b2b1",
  LABEL_TEXT: "#a4a4a3",
  LABEL_TEXT_ALT: "#a3a3a2",
  INPUT_PLACEHOLDER: "#737470",
  INPUT_PLACEHOLDER_ALT: "#71726e",
  INPUT_BORDER: "#a5adad",
  INPUT_BORDER_ALT: "#929291",
  BUTTON_BG: "#843a17",
  BUTTON_TEXT: "#c8b8b0",
  RECENT_HEADING: "#b0b0b0",
} as const;

/**
 * Shared Info Icon SVG component.
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * A self-contained "UI magician Agent" card component.
 * Matches Figma design with dark theme and specific rust-colored accents.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-5 font-['Inter'] w-[254px]"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span
          className="font-semibold text-[13.5px]"
          style={{ color: COLORS.HEADER_TEXT }}
        >
          UI magician Agent
        </span>
        <svg
          className="w-4 h-4"
          style={{ color: COLORS.HEADER_TEXT }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Sub-row: chevron + muted text */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs" style={{ color: COLORS.MUTED_TEXT }}>
          ∧
        </span>
        <span className="text-xs" style={{ color: COLORS.MUTED_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mt-6">
        <span style={{ color: COLORS.SECTION_TEXT }}>∧</span>
        <span
          className="font-semibold text-[13.5px]"
          style={{ color: COLORS.SECTION_TEXT }}
        >
          Add New Design
        </span>
      </div>

      {/* Form: Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label
            htmlFor="pat"
            className="text-[11.5px]"
            style={{ color: COLORS.LABEL_TEXT }}
          >
            Personal Access Token
          </label>
          <InfoIcon className="w-3 h-3" style={{ color: COLORS.LABEL_TEXT }} />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          autoComplete="off"
          className="rounded-sm w-full px-3 py-2 text-xs mt-1 border outline-none transition-colors"
          style={{
            backgroundColor: COLORS.BACKGROUND,
            borderColor: COLORS.INPUT_BORDER,
            color: COLORS.INPUT_PLACEHOLDER,
          }}
          // The product requirement specifies a specific border color for the top field
        />
      </div>

      {/* Form: Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label
            htmlFor="designUrl"
            className="text-[11.5px]"
            style={{ color: COLORS.LABEL_TEXT_ALT }}
          >
            Design URL
          </label>
          <InfoIcon
            className="w-3 h-3"
            style={{ color: COLORS.LABEL_TEXT_ALT }}
          />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          autoComplete="off"
          className="rounded-sm w-full px-3 py-2 text-xs mt-1 border-2 outline-none transition-colors"
          style={{
            backgroundColor: COLORS.BACKGROUND,
            borderColor: COLORS.INPUT_BORDER_ALT,
            color: COLORS.INPUT_PLACEHOLDER_ALT,
          }}
          // Bottom field uses a thicker 2px border per spec
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          className="font-semibold text-xs rounded-lg px-6 py-3 flex-1 transition-opacity hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="font-semibold text-xs rounded-lg px-6 py-3 flex-1 transition-opacity hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Section Heading */}
      <h3
        className="font-semibold text-[13.5px] mt-8"
        style={{ color: COLORS.RECENT_HEADING }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};
