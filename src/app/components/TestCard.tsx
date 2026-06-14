import { IoSettingsOutline } from 'react-icons/io5';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Color constants to maintain visual consistency as per the Figma spec
const COLORS = {
  bg: '#2a2a2a',
  bgInput: '#3a3a3a',
  bgButton: '#a0522d',
  borderInput: '#555555',
  textPrimary: '#ffffff',
  textSecondary: '#c0c0c0',
  textMuted: '#aaaaaa',
  textAccent: '#a0522d',
} as const;

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg, color: COLORS.textSecondary }}
      className="p-4 w-full flex flex-col gap-4 max-w-xs"
    >
      {/* Header section with branding and settings */}
      <div className="flex justify-between items-center">
        <h2 style={{ color: COLORS.textPrimary }} className="font-bold text-lg">
          UI magician Agent
        </h2>
        <IoSettingsOutline style={{ color: COLORS.textMuted, fontSize: '1.25rem' }} />
      </div>

      {/* Truncated status/context line */}
      <div className="flex items-center gap-2">
        <BsChevronUp style={{ color: COLORS.textMuted }} />
        <p style={{ color: COLORS.textAccent }} className="text-sm">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main configuration section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <BsChevronUp style={{ color: COLORS.textPrimary }} />
          <h3 style={{ color: COLORS.textPrimary }} className="font-bold text-base">
            Add New Design
          </h3>
        </div>

        {/* Form fields for Figma integration */}
        <div>
          <label
            htmlFor="personalAccessToken"
            style={{ color: COLORS.textSecondary }}
            className="text-sm flex items-center gap-1 mb-1"
          >
            Personal Access Token
            <AiOutlineInfoCircle style={{ color: COLORS.textMuted }} />
          </label>
          <input
            id="personalAccessToken"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              backgroundColor: COLORS.bgInput,
              border: `1px solid ${COLORS.borderInput}`,
              color: COLORS.textMuted,
            }}
            className="rounded px-3 py-2 w-full text-sm outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="designURL"
            style={{ color: COLORS.textSecondary }}
            className="text-sm flex items-center gap-1 mb-1"
          >
            Design URL
            <AiOutlineInfoCircle style={{ color: COLORS.textMuted }} />
          </label>
          <input
            id="designURL"
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={{
              backgroundColor: COLORS.bgInput,
              border: `1px solid ${COLORS.borderInput}`,
              color: COLORS.textMuted,
            }}
            className="rounded px-3 py-2 w-full text-sm outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            style={{ backgroundColor: COLORS.bgButton, color: COLORS.textPrimary }}
            className="flex-1 rounded-lg py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: COLORS.bgButton, color: COLORS.textPrimary }}
            className="flex-1 rounded-lg py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer list/history header */}
      <h3 style={{ color: COLORS.textPrimary }} className="font-bold text-base">
        Recent Breakdowns
      </h3>
    </div>
  );
};
