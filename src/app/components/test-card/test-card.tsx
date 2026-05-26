/**
 * TestCard - A dark-themed interface card for AI agent configuration.
 * Displays settings for design integrations with token and URL inputs,
 * along with action buttons and a copyright footer.
 */

// Design color palette - all colors used in TestCard component
const COLORS = {
  background: "#2b2b2b",
  headerText: "#b5b5b5",
  collapsibleIcon: "#b0b0b0",
  collapsibleText: "#8b9291",
  addDesignIcon: "#b2b2b1",
  addDesignText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelIcon: "#a4a4a3",
  labelText2: "#a3a3a2",
  labelIcon2: "#a3a3a2",
  inputBorder: "#5a5a5a",
  inputBackground: "#1a1a1a",
  inputText: "#5a5a5a",
  buttonBackground: "#b8713d",
  buttonHover: "#c9845a",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
  copyrightBorder: "#d1d5db",
  copyrightText: "#9ca3af",
};

// Collapse/expand indicator icon - used for collapsible sections
const CollapseIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// Info/help icon - used next to form labels
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#2b2b2b] p-5">
      {/* Header */}
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-[20px] font-bold" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        {/* Settings/Gear Icon */}
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          style={{ color: COLORS.headerText }}
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 9.5v5M9.5 12h5" />
          <path d="M15 6.5L17 5m-5 2L15 5m-9 14l2-1.5m5 2l-2-1.5m-5-11l2 1.5m7-2l2 1.5" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-16 flex items-center gap-2">
        <div style={{ color: COLORS.collapsibleIcon }}>
          <CollapseIcon />
        </div>
        <span className="text-[11.5px] font-bold" style={{ color: COLORS.collapsibleText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 flex items-center gap-2">
        <div style={{ color: COLORS.addDesignIcon }}>
          <CollapseIcon />
        </div>
        <span className="text-[13.5px] font-bold" style={{ color: COLORS.addDesignText }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-bold" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <div style={{ color: COLORS.labelIcon }}>
            <InfoIcon />
          </div>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            borderColor: COLORS.inputBorder,
            backgroundColor: COLORS.inputBackground,
            color: COLORS.inputText,
          }}
          className="w-full border-2 px-3 py-3 text-[11.5px] font-bold"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-12">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-bold" style={{ color: COLORS.labelText2 }}>
            Design URL
          </label>
          <div style={{ color: COLORS.labelIcon2 }}>
            <InfoIcon />
          </div>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            borderColor: COLORS.inputBorder,
            backgroundColor: COLORS.inputBackground,
            color: COLORS.inputText,
          }}
          className="w-full border-2 px-3 py-3 text-[10.5px] font-bold"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-20 flex gap-5">
        <button
          className="flex-1 rounded-md py-3.5 text-center text-[13px] font-bold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBackground)}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-md py-3.5 text-center text-[13px] font-bold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBackground)}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="text-[13.5px] font-bold" style={{ color: COLORS.footerText }}>
        Recent Breakdowns
      </div>

      {/* Copyright Footer */}
      <div
        className="mt-4 border-t pt-3 text-center text-xs"
        style={{
          borderColor: COLORS.copyrightBorder,
          color: COLORS.copyrightText,
        }}
      >
        © AutonomyAI
      </div>
    </div>
  );
};
