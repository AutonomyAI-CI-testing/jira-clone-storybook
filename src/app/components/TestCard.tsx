/**
 * TestCard component - A UI agent preview panel for design system integration
 * 
 * This component displays a preview card for the "UI magician Agent" that helps
 * users integrate design files from Figma by providing personal access tokens.
 * The card includes sections for:
 * - Agent info and settings (header)
 * - A collapsible section showing current context
 * - Form fields for design integration (Personal Access Token, Design URL)
 * - Action buttons for workflow control
 * - A section for viewing recent breakdowns
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="flex items-center justify-center min-h-screen bg-elevation-surface">
      <div className="w-full max-w-[254px] bg-elevation-surface-sunken rounded-lg p-4">
        {/* Header: Agent branding and settings button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-sm font-primary-bold text-font-subtlest">UI magician Agent</h1>
          {/* Settings button with emoji icon - functional hook not implemented in this preview */}
          <button className="text-font-subtlest hover:text-font">⚙️</button>
        </div>

        {/* Collapsible context section - shows current frame context */}
        <div className="mb-4 border-b border-border pb-3">
          <button className="flex items-center gap-2 text-xs text-font-subtlest hover:text-font-subtle w-full">
            {/* Caret indicator for collapse/expand state - currently not interactive */}
            <span>^</span>
            <span>From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="mb-4">
          <h2 className="text-xs font-primary-bold text-font-subtlest mb-3">Add New Design</h2>

          {/* Personal Access Token Input - sensitive credential field */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs text-font-subtlest">Personal Access Token</label>
              {/* Info icon - tooltip functionality not implemented in preview */}
              <span className="text-xs text-font-subtlest cursor-help">ℹ️</span>
            </div>
            <input
              type="password"
              placeholder="Enter token"
              className="w-full bg-elevation-surface-overlay text-xs text-font-subtlest placeholder-font-subtlest px-2 py-1.5 rounded border border-border-input focus:outline-none focus:border-border-brand"
            />
          </div>

          {/* Design URL Input - link to Figma or design file */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs text-font-subtlest">Design URL</label>
              {/* Info icon - tooltip functionality not implemented in preview */}
              <span className="text-xs text-font-subtlest cursor-help">ℹ️</span>
            </div>
            <input
              type="text"
              placeholder="https://figma.com/..."
              className="w-full bg-elevation-surface-overlay text-xs text-font-subtlest placeholder-font-subtlest px-2 py-1.5 rounded border border-border-input focus:outline-none focus:border-border-brand"
            />
          </div>

          {/* Action Buttons - workflow controls for design integration */}
          <div className="flex gap-2">
            {/* "Awesome" button - approves/confirms the design integration */}
            <button className="flex-1 bg-[#a0523d] hover:bg-[#91483a] text-xs text-[#8c8078] font-primary-bold py-1.5 px-3 rounded transition-colors">
              Awesome
            </button>
            {/* "Prepare" button - prepares the design for breakdown analysis */}
            <button className="flex-1 bg-[#a0523d] hover:bg-[#91483a] text-xs text-[#8c8078] font-primary-bold py-1.5 px-3 rounded transition-colors">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section - displays history of analyzed designs */}
        <div className="border-t border-border pt-3">
          <h3 className="text-xs font-primary-bold text-font-subtlest">Recent Breakdowns</h3>
          {/* Content would be populated dynamically in full implementation */}
        </div>
      </div>
    </div>
  );
};
