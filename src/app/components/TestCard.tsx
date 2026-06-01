// Orange button styling for primary actions (Awesome, Prepare)
const ORANGE_BUTTON_STYLE = {
  backgroundColor: "var(--Orange600)",
  color: "var(--Orange100)",
};

// SVG for settings/gear icon
const SettingsIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l1.72-1.35c.15-.12.19-.34.1-.51l-1.63-2.83c-.12-.22-.37-.29-.59-.22l-2.03.81c-.42-.32-.9-.6-1.44-.79l-.31-2.15c-.04-.24-.24-.41-.48-.41h-3.26c-.24 0-.43.17-.47.41l-.31 2.15c-.54.19-1.02.47-1.44.79l-2.03-.81c-.22-.09-.47 0-.59.22L2.74 8.87c-.09.17-.05.39.1.51l1.72 1.35c-.05.3-.07.62-.07.94s.02.64.07.94l-1.72 1.35c-.15.12-.19.34-.1.51l1.63 2.83c.12.22.37.29.59.22l2.03-.81c.42.32.9.6 1.44.79l.31 2.15c.05.24.24.41.48.41h3.26c.24 0 .44-.17.47-.41l.31-2.15c.54-.19 1.02-.47 1.44-.79l2.03.81c.22.09.47 0 .59-.22l1.63-2.83c.09-.17.05-.39-.1-.51l-1.72-1.35zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

// SVG for dropdown/chevron icon
const ChevronDownIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

// SVG for info/help icon
const InfoIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center min-h-screen bg-black"
    >
      <div className="w-64 rounded-lg bg-elevation-surface-raised p-5 shadow-lg">
        {/* Header with Settings Icon */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-font">
            UI magician Agent
          </h1>
          <button className="text-font-subtle hover:text-font" aria-label="Settings">
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="mb-4 border-b border-border pb-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-font-subtlest">
              From entire frame to a singl...
            </span>
            <ChevronDownIcon className="h-3 w-3 text-font-subtlest" />
          </div>
        </div>

        {/* Add New Design Section */}
        <div className="mb-4 flex items-center justify-between py-2">
          <span className="text-xs font-medium text-font-subtle">
            Add New Design
          </span>
          <ChevronDownIcon className="h-3 w-3 text-font-subtlest" />
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1">
            <label className="text-xs text-font-subtle">Personal Access Token</label>
            <button className="text-font-subtle hover:text-font" aria-label="Help">
              <InfoIcon />
            </button>
          </div>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className="w-full rounded border border-border bg-elevation-surface-sunken px-2 py-1.5 text-xs text-font placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4">
          <div className="mb-1 flex items-center gap-1">
            <label className="text-xs text-font-subtle">Design URL</label>
            <button className="text-font-subtle hover:text-font" aria-label="Help">
              <InfoIcon />
            </button>
          </div>
          <input
            type="text"
            placeholder="https://..."
            className="w-full rounded border border-border bg-elevation-surface-sunken px-2 py-1.5 text-xs text-font placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-4 flex gap-2">
          <button
            style={ORANGE_BUTTON_STYLE}
            className="flex-1 rounded px-3 py-1.5 text-xs font-medium hover:opacity-80 active:opacity-100"
          >
            Awesome
          </button>
          <button
            style={ORANGE_BUTTON_STYLE}
            className="flex-1 rounded px-3 py-1.5 text-xs font-medium hover:opacity-80 active:opacity-100"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-border pt-3">
          <div className="text-xs font-medium text-font-subtle">
            Recent Breakdowns
          </div>
          <div className="mt-2 text-xs text-font-subtlest">
            No recent breakdowns
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
