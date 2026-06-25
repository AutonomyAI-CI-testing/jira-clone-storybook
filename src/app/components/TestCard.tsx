/**
 * TestCard component for the UI magician Agent.
 * Renders a dark-themed card for adding new Figma designs and viewing recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  // Theme colors preserved from original implementation to ensure visual consistency
  const COLORS = {
    bg: "#2a2a2a",
    inputBg: "#272822",
    accent: "#843a17",
    textPrimary: "#b5b5b5",
    textSecondary: "#8b9291",
    label: "#a4a4a3",
    inputBorder: "#a5adad",
    buttonText: "#8c8078",
  };

  const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.4L21 18l-2 2-1.4-.3a1.65 1.65 0 0 0-1.4-.3H9.6a1.65 1.65 0 0 0-1.4.3L6 20l-2-2 1.4-.3a1.65 1.65 0 0 0 .3-1.4V9.6a1.65 1.65 0 0 0-.3-1.4L4 6l2-2 1.4.3a1.65 1.65 0 0 0 1.4.3h8.8a1.65 1.65 0 0 0 1.4-.3L21 6l-2 2-1.4.3a1.65 1.65 0 0 0-.3 1.4z"></path>
    </svg>
  );

  const InfoIcon = ({ color }: { color: string }) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );

  const ChevronUpIcon = ({ color, width = 12, height = 8 }: { color: string, width?: number, height?: number }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );

  return (
    <div id="testElem" className="w-[254px] px-5 pt-5 pb-8 font-sans" style={{ backgroundColor: COLORS.bg }}>
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold" style={{ color: COLORS.textPrimary }}>UI magician Agent</span>
        <SettingsIcon />
      </div>

      {/* Subtitle Row - Truncated text matches Figma design */}
      <div className="flex items-center gap-2 mt-3">
        <ChevronUpIcon color={COLORS.textSecondary} width={8} height={5} />
        <span className="text-[11.5px] font-semibold" style={{ color: COLORS.textSecondary }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer - Strategic layout spacing */}
      <div className="mt-10"></div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-[13.5px] font-semibold" style={{ color: "#b2b2b1" }}>Add New Design</span>
      </div>

      {/* PAT Input Section */}
      <div className="flex items-center gap-2 mt-8">
        <label htmlFor="pat-input" className="text-[11.5px] font-semibold" style={{ color: COLORS.label }}>Personal Access Token</label>
        <InfoIcon color={COLORS.label} />
      </div>
      <input
        id="pat-input"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="border w-full px-3 py-2 mt-2 text-[11.5px] outline-none"
        style={{ backgroundColor: COLORS.inputBg, borderColor: COLORS.inputBorder, color: "#737470" }}
      />

      {/* URL Input Section */}
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="url-input" className="text-[11.5px] font-semibold" style={{ color: "#a3a3a3" }}>Design URL</label>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        id="url-input"
        type="text"
        placeholder="https://www.figma.com/file:/"
        className="border-2 w-full px-3 py-2 mt-2 text-[11.5px] outline-none"
        style={{ backgroundColor: COLORS.inputBg, borderColor: "#929291", color: "#71726e" }}
      />

      {/* Buttons Row - Matching design CTA colors */}
      <div className="flex gap-3 justify-center mt-5">
        <button className="rounded px-7 py-2.5 text-[11.5px] font-semibold" style={{ backgroundColor: COLORS.accent, color: COLORS.buttonText }}>
          Awesome
        </button>
        <button className="rounded px-7 py-2.5 text-[11.5px] font-semibold" style={{ backgroundColor: COLORS.accent, color: COLORS.buttonText }}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="mt-8 text-[13.5px] font-semibold" style={{ color: "#b0b0b0" }}>Recent Breakdowns</h3>
    </div>
  );
};
