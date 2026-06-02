import cx from "classix";

// Button styling classes shared across action buttons
const BUTTON_CLASSES = [
  "flex-1 rounded px-4 py-2 text-xs font-primary-bold transition-colors",
  "bg-yellow-700 text-font-subtle",
  "hover:bg-yellow-600 active:bg-yellow-800",
];

// Reusable info icon tooltip component
const InfoIcon = () => (
  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-elevation-surface-raised">
    <span className="text-[10px] text-font-subtlest">i</span>
  </div>
);

// Settings icon button in header
const SettingsIcon = () => (
  <button
    aria-label="Settings"
    className="flex h-5 w-5 items-center justify-center rounded-full border border-elevation-surface-raised hover:opacity-80"
  >
    <span className="text-xs text-font-subtlest">⚙</span>
  </button>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-[600px]">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between border-b border-elevation-surface-raised pb-4">
          <h1 className="text-sm font-primary-bold text-font-subtle">
            UI magician Agent
          </h1>
          <SettingsIcon />
        </div>

        {/* Collapsible Sections - display recent items and project details */}
        <div className="mb-6 border-b border-elevation-surface-raised pb-4">
          <div className="flex items-center gap-2">
            <span className="text-font-subtlest">▼</span>
            <span className="text-xs text-font-subtle">
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Add New Design Section - collapsible form for importing new designs */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-font-subtlest">▼</span>
            <h2 className="text-sm font-primary-bold text-font-subtle">
              Add New Design
            </h2>
          </div>

          {/* Form Container */}
          <div className="space-y-4">
            {/* Personal Access Token Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-xs font-primary-bold text-font-subtle">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="Enter your token"
                className="w-full rounded border border-elevation-surface-raised bg-elevation-surface-sunken px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest outline-none focus:border-border-focused"
              />
            </div>

            {/* Design URL Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-xs font-primary-bold text-font-subtle">
                  Design URL
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="https://..."
                className="w-full rounded border border-elevation-surface-raised bg-elevation-surface-sunken px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest outline-none focus:border-border-focused"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button className={cx(...BUTTON_CLASSES)}>
                Awesome
              </button>
              <button className={cx(...BUTTON_CLASSES)}>
                Prepare
              </button>
            </div>
          </div>
        </div>

        {/* Recent Breakdowns Section - displays past design analysis results */}
        <div className="border-t border-elevation-surface-raised pt-4">
          <h3 className="text-xs font-primary-bold text-font-subtle">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
