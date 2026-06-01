// Button styling applied to both action buttons in the form
const ACTION_BUTTON_CLASS =
  "rounded bg-orange-700 px-4 py-2 font-primary text-sm text-font-inverse hover:bg-orange-800 active:bg-orange-900";

export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-primary-bold text-font">
            UI magician Agent
          </h1>
          <span className="text-2xl">⚙️</span>
        </div>

        {/* Collapsible Section 1 - Expanded */}
        <div className="mb-6 rounded border border-border bg-elevation-surface-raised p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-font-subtle">
              From entire frame to a singl...
            </p>
            <span className="text-lg">⌃</span>
          </div>
        </div>

        {/* Collapsible Section 2 - Add New Design */}
        <div className="mb-8 rounded border border-border bg-elevation-surface-raised p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-primary text-lg text-font">Add New Design</h2>
            <span className="text-lg">⌄</span>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-8 space-y-6 rounded border border-border bg-elevation-surface-raised p-6">
          {/* Personal Access Token Input */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="font-primary text-sm text-font">
                Personal Access Token
              </label>
              <span className="text-lg">ℹ️</span>
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font placeholder-font-subtlest focus:outline-none focus:ring-2 focus:ring-border-brand"
            />
          </div>

          {/* Design URL Input */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="font-primary text-sm text-font">
                Design URL
              </label>
              <span className="text-lg">ℹ️</span>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font placeholder-font-subtlest focus:outline-none focus:ring-2 focus:ring-border-brand"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className={ACTION_BUTTON_CLASS}>
              Awesome
            </button>
            <button className={ACTION_BUTTON_CLASS}>
              Prepare
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="rounded border border-border bg-elevation-surface-raised p-4">
          <h3 className="font-primary text-lg text-font">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
};
