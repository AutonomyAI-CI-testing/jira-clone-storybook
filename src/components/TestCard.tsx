
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design-approved color palette for the UI magician Agent panel.
// These are defined as constants to maintain consistency across the component
// while the file remains outside the main Tailwind scan path.
const COLORS = {
  CARD_BG: '#282828',
  INPUT_BG: '#333333',
  BORDER: '#555555',
  PRIMARY_CTA: '#a0522d',
  ACCENT_ORANGE: '#c87941',
  TEXT: {
    HEADING: '#ffffff',
    SUBTITLE: '#c87941',
    LABEL: '#a4a4a3',
    PLACEHOLDER: '#737470',
    BUTTON: '#8c8078',
    FOOTER: '#b0b0b0',
    MUTED: '#9ca3af',
  },
} as const;

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full p-5 rounded-lg"
      style={{ background: COLORS.CARD_BG }}
    >
      {/* Header section with title and settings access */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className="text-lg font-semibold"
          style={{ color: COLORS.TEXT.HEADING }}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline
          className="text-xl cursor-not-allowed"
          style={{ color: COLORS.TEXT.MUTED }}
          aria-label="Settings"
        />
      </div>

      {/* Breadcrumb-style subtitle */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp style={{ color: COLORS.ACCENT_ORANGE }} aria-hidden="true" />
        <p className="text-sm font-medium" style={{ color: COLORS.TEXT.SUBTITLE }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="mb-6">
        {/* Section toggle/header */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp style={{ color: COLORS.TEXT.MUTED }} aria-hidden="true" />
          <h3
            className="font-semibold"
            style={{ color: COLORS.TEXT.HEADING }}
          >
            Add New Design
          </h3>
        </div>

        {/* Input: Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label
              htmlFor="pat"
              className="text-sm"
              style={{ color: COLORS.TEXT.LABEL }}
            >
              Personal Access Token
            </label>
            <AiOutlineInfoCircle
              className="text-sm"
              style={{ color: COLORS.TEXT.MUTED }}
              aria-label="Help info"
            />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md outline-none text-gray-200"
            style={{
              background: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.BORDER}`,
            }}
          />
        </div>

        {/* Input: Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label
              htmlFor="designUrl"
              className="text-sm"
              style={{ color: COLORS.TEXT.LABEL }}
            >
              Design URL
            </label>
            <AiOutlineInfoCircle
              className="text-sm"
              style={{ color: COLORS.TEXT.MUTED }}
              aria-label="Help info"
            />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md outline-none text-gray-200"
            style={{
              background: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.BORDER}`,
            }}
          />
        </div>

        {/* Action buttons - visual representation only for smoke test */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            type="button"
            className="py-2 px-5 rounded-md font-medium transition-opacity hover:opacity-90"
            style={{ background: COLORS.PRIMARY_CTA, color: COLORS.TEXT.BUTTON }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="py-2 px-5 rounded-md font-medium transition-opacity hover:opacity-90"
            style={{ background: COLORS.PRIMARY_CTA, color: COLORS.TEXT.BUTTON }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer section for historical data */}
      <div className="pt-4 border-t" style={{ borderColor: COLORS.BORDER }}>
        <h3
          className="font-semibold"
          style={{ color: COLORS.TEXT.FOOTER }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
