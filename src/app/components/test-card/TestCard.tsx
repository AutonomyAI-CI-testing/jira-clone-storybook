
/**
 * TestCard Component
 * 
 * A self-contained smoke test component that replicates the "UI magician Agent" panel.
 * Uses hardcoded hexadecimal values from Figma to verify design accuracy.
 */
export const TestCard = (): JSX.Element => {
  // Styles are extracted into constants for readability while maintaining the exact Figma values.
  const COLORS = {
    panelBg: "bg-[#2a2a2a]",
    inputBg: "bg-[#1e1e1e]",
    inputBorder: "border-[#3a3a3a]",
    buttonBg: "bg-[#7a3b1e]",
    textPrimary: "text-[#b5b5b5]",   // UI magician Agent
    textSecondary: "text-[#8b9291]", // Hint row
    textTertiary: "text-[#b2b2b1]",  // Section headings 
    textLabel: "text-[#a4a4a3]",     // Input labels
    textPlaceholder: "text-[#737470]",
    textButton: "text-[#8c8078]",
    textFooter: "text-[#b0b0b0]"     // Recent Breakdowns
  };

  return (
    <div id="testElem" className={`${COLORS.panelBg} p-4 w-[254px] font-sans flex flex-col gap-3 shadow-xl`}>
      {/* 1. Header row: Title and Settings */}
      <div className="flex justify-between items-center">
        <span className={`${COLORS.textPrimary} font-semibold text-sm`}>UI magician Agent</span>
        <span className={COLORS.textPrimary} aria-hidden="true">⚙</span>
      </div>

      {/* 2. Collapsible hint row: Status information */}
      <div className="flex items-center gap-1">
        <span className={`${COLORS.textSecondary} text-xs`} aria-hidden="true">^</span>
        <span className={`${COLORS.textSecondary} text-xs font-semibold`}>From entire frame to a singl...</span>
      </div>

      {/* 3. Section Heading: Add New Design toggle */}
      <div className="flex items-center gap-1 mt-2">
        <span className={`${COLORS.textTertiary} font-semibold text-sm`}>^ Add New Design</span>
      </div>

      {/* 4. Input Field: Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className={`${COLORS.textLabel} text-xs font-semibold`}>Personal Access Token</label>
          <span className={`${COLORS.textLabel} text-xs`} title="Information" aria-hidden="true">ⓘ</span>
        </div>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${COLORS.inputBg} border ${COLORS.inputBorder} ${COLORS.textPlaceholder} placeholder:color-[#737470] text-xs px-2 py-1.5 rounded w-full outline-none`}
        />
      </div>

      {/* 5. Input Field: Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className={`${COLORS.textLabel} text-xs font-semibold`}>Design URL</label>
          <span className={`${COLORS.textLabel} text-xs`} title="Information" aria-hidden="true">ⓘ</span>
        </div>
        <input
          readOnly
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={`${COLORS.inputBg} border ${COLORS.inputBorder} text-[#71726e] placeholder:color-[#71726e] text-xs px-2 py-1.5 rounded w-full outline-none`}
        />
      </div>

      {/* 6. Primary Actions: Awesome and Prepare buttons */}
      <div className="flex gap-2 mt-1">
        <button className={`flex-1 ${COLORS.buttonBg} ${COLORS.textButton} text-xs font-semibold py-2 rounded-lg hover:brightness-110 transition-all`}>
          Awesome
        </button>
        <button className={`flex-1 ${COLORS.buttonBg} ${COLORS.textButton} text-xs font-semibold py-2 rounded-lg hover:brightness-110 transition-all`}>
          Prepare
        </button>
      </div>

      {/* 7. Footer Heading: Recent Breakdowns */}
      <div className="mt-2">
        <span className={`${COLORS.textFooter} font-semibold text-sm`}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
