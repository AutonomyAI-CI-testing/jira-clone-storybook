import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  const [expandedFrameSection, setExpandedFrameSection] = useState(true);
  const [expandedDesignSection, setExpandedDesignSection] = useState(true);
  const [personalAccessToken, setPersonalAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  // UI color constants for consistent theming
  const colors = {
    textPrimary: "#b5b5b5",
    textSecondary: "#a3a3a2",
    textMuted: "#737470",
    textPlaceholder: "#71726e",
    buttonBackground: "#8B4513",
    buttonText: "#c9b5a0",
    buttonHover: "#9d5523",
    buttonActive: "#7a3d10",
    borderColor: "var(--DarkNeutral300A)",
    backgroundColor: "var(--DarkNeutral0)",
    inputBackground: "var(--DarkNeutral200)",
    inputBackgroundHover: "var(--DarkNeutral250)",
  };

  const toggleFrameSection = () => setExpandedFrameSection(!expandedFrameSection);
  const toggleDesignSection = () => setExpandedDesignSection(!expandedDesignSection);

  return (
    <div className="w-full rounded-lg p-8 shadow-lg" style={{ maxWidth: "508px", backgroundColor: colors.backgroundColor }}>
      {/* Header: Title and settings button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl" style={{ color: colors.textPrimary }}>
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ color: colors.textPrimary }}
          aria-label="Settings"
        >
          <FiSettings size={28} />
        </button>
      </div>

      {/* Collapsible Frame Section */}
      <div className="mb-10" style={{ borderBottom: `1px solid ${colors.borderColor}` }}>
        <button
          onClick={toggleFrameSection}
          className="w-full flex items-center gap-3 py-4 text-left hover:opacity-80 transition-opacity"
        >
          {expandedFrameSection ? (
            <FiChevronUp size={24} className="flex-shrink-0" style={{ color: colors.textSecondary }} />
          ) : (
            <FiChevronDown size={24} className="flex-shrink-0" style={{ color: colors.textSecondary }} />
          )}
          <span className="font-primary-bold text-lg" style={{ color: colors.textSecondary }}>
            From entire frame to a singl...
          </span>
        </button>
        {expandedFrameSection && (
          <div className="pb-4 text-base" style={{ color: colors.textMuted }}>
            {/* Content placeholder for expanded section */}
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-10" style={{ borderBottom: `1px solid ${colors.borderColor}` }}>
        <div className="w-full flex items-center gap-3 py-4 text-left">
          <FiChevronUp size={24} className="flex-shrink-0" style={{ color: colors.textSecondary }} />
          <span className="font-primary-bold text-xl" style={{ color: colors.textSecondary }}>
            Add New Design
          </span>
        </div>
      </div>

      {/* Form Fields - visible when expandedDesignSection is true */}
      {expandedDesignSection && (
        <div className="space-y-5">
          {/* Personal Access Token Field */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <label className="font-primary-bold text-[10.5px]" style={{ color: colors.textSecondary }}>
                Personal Access Token
              </label>
              <button
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ color: colors.textSecondary }}
                aria-label="Token info"
              >
                <FiInfo size={14} />
              </button>
            </div>
            <input
              type="text"
              value={personalAccessToken}
              onChange={(e) => setPersonalAccessToken(e.target.value)}
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border px-2.5 py-1.5 font-primary text-[10.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand transition-colors"
              style={{
                borderColor: colors.borderColor,
                backgroundColor: colors.inputBackground,
                color: colors.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.inputBackgroundHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.inputBackground)}
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <label className="font-primary-bold text-[10.5px]" style={{ color: colors.textSecondary }}>
                Design URL
              </label>
              <button
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ color: colors.textSecondary }}
                aria-label="URL info"
              >
                <FiInfo size={14} />
              </button>
            </div>
            <input
              type="url"
              value={designUrl}
              onChange={(e) => setDesignUrl(e.target.value)}
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border px-2.5 py-1.5 font-primary text-[10.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand transition-colors"
              style={{
                borderColor: colors.borderColor,
                backgroundColor: colors.inputBackground,
                color: colors.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.inputBackgroundHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.inputBackground)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              className="flex-1 rounded py-2.5 font-primary-bold text-[11.5px] transition-colors"
              style={{
                backgroundColor: colors.buttonBackground,
                color: colors.buttonText,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBackground)}
              onMouseDown={(e) => (e.currentTarget.style.backgroundColor = colors.buttonActive)}
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
            >
              Awesome
            </button>
            <button
              className="flex-1 rounded py-2.5 font-primary-bold text-[11.5px] transition-colors"
              style={{
                backgroundColor: colors.buttonBackground,
                color: colors.buttonText,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBackground)}
              onMouseDown={(e) => (e.currentTarget.style.backgroundColor = colors.buttonActive)}
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
            >
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Footer: Recent Breakdowns section */}
      <div className="mt-8 pt-4" style={{ borderTop: `1px solid ${colors.borderColor}` }}>
        <p className="font-primary-bold text-[13.5px]" style={{ color: colors.textMuted }}>
          Recent Breakdowns
        </p>
      </div>

      {/* Copyright Footer */}
      <div className="mt-8 pt-3" style={{ borderTop: "1px solid #d1d5db" }}>
        <p className="text-center font-primary-bold text-[11.5px]" style={{ color: colors.textSecondary }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
