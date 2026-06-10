import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Design system colors from Figma integration panel
 */
const COLORS = {
  OUTER_BG: '#1a1a1a',
  CARD_BG: '#272822',
  TITLE_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL_TEXT: '#a4a4a3',
  LABEL_TEXT_ALT: '#a3a3a2',
  PLACEHOLDER: '#737470',
  PLACEHOLDER_ALT: '#71726e',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  BORDER: '#a5adad',
  BORDER_THICK: '#929291',
  RECENT_TEXT: '#b0b0b0',
} as const;

/**
 * TestCard component
 * 
 * A self-contained dark-themed card UI that resembles a Figma integration panel.
 * It displays a header, collapsible sections, and a form for adding new designs.
 * This is a static component used for visual validation and testing.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 w-[254px] font-sans" style={{ backgroundColor: COLORS.OUTER_BG }}>
      {/* Card panel */}
      <div className="rounded p-4 flex flex-col gap-3" style={{ backgroundColor: COLORS.CARD_BG }}>

        {/* 1. Header row */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm" style={{ color: COLORS.TITLE_TEXT }}>UI magician Agent</span>
          <IoSettingsOutline size={18} style={{ color: COLORS.TITLE_TEXT }} />
        </div>

        {/* 2. Collapsed description row */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={12} style={{ color: COLORS.MUTED_TEXT }} />
          <span className="text-xs font-semibold" style={{ color: COLORS.MUTED_TEXT }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer gap */}
        <div className="h-4" />

        {/* 3. Add New Design section heading */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={14} style={{ color: COLORS.SECTION_HEADER }} />
          <span className="font-semibold text-sm" style={{ color: COLORS.SECTION_HEADER }}>Add New Design</span>
        </div>

        {/* 4. Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold" style={{ color: COLORS.LABEL_TEXT }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={15} style={{ color: COLORS.LABEL_TEXT }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="
              border rounded-sm
              px-3 py-2 text-xs font-semibold
              w-full outline-none
            "
            style={{ 
              backgroundColor: COLORS.CARD_BG, 
              borderColor: COLORS.BORDER,
              color: COLORS.PLACEHOLDER
            }}
            readOnly
          />
        </div>

        {/* 5. Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold" style={{ color: COLORS.LABEL_TEXT_ALT }}>Design URL</span>
            <AiOutlineInfoCircle size={15} style={{ color: COLORS.LABEL_TEXT_ALT }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="
              border-2 rounded-sm
              px-3 py-2 text-xs font-semibold
              w-full outline-none
            "
            style={{ 
              backgroundColor: COLORS.CARD_BG, 
              borderColor: COLORS.BORDER_THICK,
              color: COLORS.PLACEHOLDER_ALT
            }}
            readOnly
          />
        </div>

        {/* 6. Buttons row */}
        <div className="flex gap-3 justify-center mt-1">
          <button className="
            font-semibold text-xs
            rounded px-6 py-2.5 w-[85px]
          " style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}>
            Awesome
          </button>
          <button className="
            font-semibold text-xs
            rounded px-6 py-2.5 w-[85px]
          " style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}>
            Prepare
          </button>
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* 7. Recent Breakdowns */}
        <span className="font-semibold text-sm" style={{ color: COLORS.RECENT_TEXT }}>
          Recent Breakdowns
        </span>

      </div>
    </div>
  );
};
