/**
 * TestCard component
 * 
 * A standalone UI panel reproducing the "UI magician Agent" design from Figma.
 * This component is used to validate UI rendering, Tailwind styling fidelity,
 * and dark-mode component isolation.
 *
 * Requirements:
 * - Root element must have id="testElem"
 * - Dark theme background (#282828)
 * - Self-contained layout with static data
 */
export function TestCard() {
  /**
   * Design Constants
   * Extracted to constants for maintainability while matching Figma specs exactly.
   */
  const COLORS = {
    bgCard: '#282828',
    bgInput: '#181818',
    border: '#3f3f3f',
    inputBorder: '#525252',
    primary: '#b5541c', // Muted orange/amber
    textMuted: '#9ca3af',
    textLight: '#e5e7eb',
    white: '#ffffff'
  };

  const labelClassName = "flex items-center gap-1.5 text-sm font-medium mb-1.5 w-full";
  const iconMutedClassName = "text-sm ml-1 opacity-70";
  const inputClassName = "w-full px-3 py-2.5 mb-5 rounded-md text-sm outline-none box-border border border-solid block transition-colors focus:border-orange-500/50";
  const buttonClassName = "flex-1 py-3 px-4 font-semibold text-[15px] rounded-lg border-none cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all";

  return (
    <div
      id="testElem"
      className="flex flex-col p-6 rounded-lg max-w-[360px] my-4 mx-auto font-sans"
      style={{ backgroundColor: COLORS.bgCard, color: COLORS.white, border: `1px solid ${COLORS.border}` }}
    >
      {/* Header Row: Title and Settings Gear */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg">UI magician Agent</span>
        <span 
          className="text-xl leading-none" 
          style={{ color: COLORS.textMuted }} 
          aria-hidden="true"
        >
          ⚙
        </span>
      </div>

      {/* 
        Subtitle Row: Expander indicator and descriptive summary.
        Using a darker orange for text to provide high contrast on dark bg.
      */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[12px]" style={{ color: COLORS.textMuted }} aria-hidden="true">^</span>
        <span className="text-sm" style={{ color: '#d97706' }}>
          From entire frame to a single element
        </span>
      </div>

      {/* Section Header: Collapsible section for adding new designs */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[12px]" style={{ color: COLORS.white }} aria-hidden="true">^</span>
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* 
        Form Section: Personal Access Token 
        Uncontrolled inputs with static placeholders as per requirements.
      */}
      <div className="flex flex-col w-full mb-1">
        <label htmlFor="pat" className={labelClassName} style={{ color: COLORS.textLight }}>
          Personal Access Token
          <span className={iconMutedClassName} style={{ color: COLORS.textMuted }} aria-hidden="true">ⓘ</span>
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className={inputClassName}
          style={{ backgroundColor: COLORS.bgInput, color: COLORS.textLight, borderColor: COLORS.inputBorder }}
        />
      </div>

      {/* Form Section: Design URL */}
      <div className="flex flex-col w-full mb-1">
        <label htmlFor="designUrl" className={labelClassName} style={{ color: COLORS.textLight }}>
          Design URL
          <span className={iconMutedClassName} style={{ color: COLORS.textMuted }} aria-hidden="true">ⓘ</span>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={inputClassName}
          style={{ backgroundColor: COLORS.bgInput, color: COLORS.textLight, borderColor: COLORS.inputBorder }}
        />
      </div>

      {/* Action Buttons: Primary interaction points for the agent workflow */}
      <div className="flex gap-3 mb-8">
        <button type="button" className={buttonClassName} style={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
          Awesome
        </button>
        <button type="button" className={buttonClassName} style={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
          Prepare
        </button>
      </div>

      {/* Footer / History Section */}
      <div className="mt-auto">
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
