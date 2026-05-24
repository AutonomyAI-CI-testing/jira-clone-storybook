import { useState } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import cx from "classix";

// Design tokens for consistent styling
const COLORS = {
  bg: "#2c2c2c",
  bgSecondary: "#22272b",
  textPrimary: "#b6c2cf",
  textSecondary: "#9fadbc",
  textTertiary: "#8c9bab",
  textMuted: "#738496",
  borderColor: "#454f59",
  buttonBg: "#d97008",
  buttonBgHover: "#b65c02",
  buttonText: "#f8f8f8",
};

const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
};

const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBg;
};

export const TestCard = (): JSX.Element => {
  const [isFrameCollapsed, setIsFrameCollapsed] = useState(false);

  return (
    <div
      className="w-full max-w-xs p-5 text-sm"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-lg font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          UI magician Agent
        </h1>
        <FiSettings
          size={18}
          style={{ color: COLORS.textSecondary }}
          strokeWidth={1.5}
        />
      </div>

      {/* Collapsible Section 1: Frame Description */}
      <div className="mb-6 space-y-3">
        <button
          onClick={() => setIsFrameCollapsed(!isFrameCollapsed)}
          className="flex items-center gap-2 transition-colors"
          style={{ color: COLORS.textTertiary }}
        >
          <FiChevronUp
            size={16}
            className={cx(
              "transition-transform",
              isFrameCollapsed && "rotate-180"
            )}
            strokeWidth={2}
          />
          <span className="text-xs font-semibold">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Section Header: Add New Design */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp
          size={16}
          style={{ color: COLORS.textTertiary }}
          strokeWidth={2}
        />
        <h2
          className="text-lg font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form Section */}
      <div className="space-y-4">
        {/* Personal Access Token */}
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <span
              className="text-xs font-semibold"
              style={{ color: COLORS.textSecondary }}
            >
              Personal Access Token
            </span>
            <FiInfo
              size={15}
              style={{ color: COLORS.textMuted }}
              strokeWidth={2}
            />
          </label>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2.5 text-xs font-semibold outline-none"
            style={{
              backgroundColor: COLORS.bgSecondary,
              color: COLORS.textPrimary,
              border: `1px solid ${COLORS.textMuted}`,
              caretColor: COLORS.textPrimary,
            }}
          />
        </div>

        {/* Design URL */}
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <span
              className="text-xs font-semibold"
              style={{ color: COLORS.textSecondary }}
            >
              Design URL
            </span>
            <FiInfo
              size={15}
              style={{ color: COLORS.textMuted }}
              strokeWidth={2}
            />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-2.5 text-xs font-semibold outline-none"
            style={{
              backgroundColor: COLORS.bgSecondary,
              color: COLORS.textPrimary,
              border: `1px solid ${COLORS.textMuted}`,
              caretColor: COLORS.textPrimary,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            className="flex-1 rounded px-4 py-2.5 text-xs font-semibold transition-colors"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-4 py-2.5 text-xs font-semibold transition-colors"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div
        className="mt-12 pt-6"
        style={{ borderTop: `1px solid ${COLORS.borderColor}` }}
      >
        <h3
          className="text-lg font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 mt-12 flex items-center justify-center border-t pt-3">
        <p
          className="text-center text-xs"
          style={{ color: COLORS.textSecondary }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
