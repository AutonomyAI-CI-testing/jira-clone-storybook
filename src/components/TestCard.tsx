
import React from 'react';

/**
 * Design tokens extracted from Figma to ensure consistent reproduction
 * of the "UI magician Agent" design.
 */
const COLORS = {
  CARD_BG: '#1a1a1a',
  INPUT_BG: '#252525',
  INPUT_BORDER: '#3a3a3a',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_SECONDARY: '#8b9291',
  TEXT_MUTED: '#b2b2b1',
  LABEL_TEXT: '#a4a4a3',
  PLACEHOLDER: '#737470',
  BUTTON_BG: '#7a4a2a',
  BUTTON_TEXT: '#c8a882',
  FOOTER_TEXT: '#b0b0b0',
} as const;

/**
 * SVG Icon Components for the TestCard.
 * These are kept inline to maintain self-containment as per requirements.
 */
const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.TEXT_PRIMARY}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.56a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.56a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.73V2a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-up"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

/**
 * TestCard evaluates the design-to-code pipeline by replicating a Figma design.
 * It is a standalone component using inline styles for Figma-specific colors
 * to avoid issues with Tailwind CSS purging in non-standard directories.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.CARD_BG }}
      className="p-6 rounded-lg shadow-lg max-w-sm mx-auto my-10"
    >
      {/* Header section with title and gear icon */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ color: COLORS.TEXT_PRIMARY }} className="text-lg font-bold">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Primary subtitle with toggle icon */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronUpIcon color={COLORS.TEXT_SECONDARY} />
        <span style={{ color: COLORS.TEXT_SECONDARY }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header for adding new designs */}
      <div className="flex items-center gap-2 mt-4 mb-4">
        <ChevronUpIcon color={COLORS.TEXT_MUTED} />
        <span style={{ color: COLORS.TEXT_MUTED }} className="font-semibold">
          Add New Design
        </span>
      </div>

      {/* Input group for Figma Personal Access Token */}
      <label style={{ color: COLORS.LABEL_TEXT }} className="block text-sm font-medium mb-1">
        Personal Access Token <span className="text-xs">ⓘ</span>
      </label>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          color: COLORS.PLACEHOLDER,
          borderColor: COLORS.INPUT_BORDER,
          backgroundColor: COLORS.INPUT_BG,
        }}
        className="w-full rounded border px-3 py-2 text-sm mb-4 bg-zinc-800"
      />

      {/* Input group for Figma Design URL */}
      <label
        style={{ color: COLORS.LABEL_TEXT }}
        className="block text-sm font-medium mb-1"
      >
        Design URL <span className="text-xs">ⓘ</span>
      </label>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{
          color: COLORS.PLACEHOLDER, // Matches design placeholder color
          borderColor: COLORS.INPUT_BORDER,
          backgroundColor: COLORS.INPUT_BG,
        }}
        className="w-full rounded border px-3 py-2 text-sm mb-6 bg-zinc-800"
      />

      {/* Action buttons - styled with orange-brown background from Figma */}
      <div className="flex gap-3 mt-4">
        <button
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          className="flex-1 rounded-lg py-2 font-semibold transition-opacity hover:opacity-90"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          className="flex-1 rounded-lg py-2 font-semibold transition-opacity hover:opacity-90"
        >
          Prepare
        </button>
      </div>

      {/* Footer list/history header */}
      <div className="mt-6">
        <span style={{ color: COLORS.FOOTER_TEXT }} className="font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
