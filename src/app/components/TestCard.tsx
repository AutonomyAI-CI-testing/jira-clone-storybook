import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';


const COLORS = {
  CARD_BG: '#2a2a2a',
  HEADER_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  LABEL_ALT: '#a3a3a2',
  INPUT_BG: '#272822',
  INPUT_PLACEHOLDER: '#737470',
  INPUT_PLACEHOLDER_ALT: '#71726e',
  INPUT_BORDER: '#a5adad',
  INPUT_BORDER_ALT: '#929291',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  FOOTER_TEXT: '#b0b0b0',
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 rounded-lg max-w-sm font-sans" style={{ backgroundColor: COLORS.CARD_BG }}>
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold" style={{ color: COLORS.HEADER_TEXT }}>UI magician Agent</span>
        <IoSettingsOutline style={{ color: COLORS.MUTED_TEXT, fontSize: '1.25rem' }} />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUpOutline style={{ color: COLORS.MUTED_TEXT, fontSize: '1.125rem' }} />
        <span className="text-sm" style={{ color: COLORS.MUTED_TEXT }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        <IoChevronUpOutline style={{ color: COLORS.SECTION_HEADER, fontSize: '1.125rem' }} />
        <span className="text-base font-semibold" style={{ color: COLORS.SECTION_HEADER }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="accessToken" className="text-sm" style={{ color: COLORS.LABEL }}>Personal Access Token</label>
          <AiOutlineInfoCircle style={{ color: COLORS.LABEL }} />
        </div>
        <input
          id="accessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md text-sm outline-none"
          style={{ backgroundColor: COLORS.INPUT_BG, color: COLORS.INPUT_PLACEHOLDER, border: `1px solid ${COLORS.INPUT_BORDER}` }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designURL" className="text-sm" style={{ color: COLORS.LABEL_ALT }}>Design URL</label>
          <AiOutlineInfoCircle style={{ color: COLORS.LABEL_ALT }} />
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md text-sm outline-none"
          style={{ backgroundColor: COLORS.INPUT_BG, color: COLORS.INPUT_PLACEHOLDER_ALT, border: `2px solid ${COLORS.INPUT_BORDER_ALT}` }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-base font-semibold" style={{ color: COLORS.FOOTER_TEXT }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};

