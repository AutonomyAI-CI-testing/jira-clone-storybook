export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface-sunken p-5 font-primary">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h1 className="text-sm font-primary-bold text-font-subtle">
          UI magician Agent
        </h1>
        <button className="text-icon-subtle hover:text-icon">⚙️</button>
      </div>

      {/* Collapsible Section */}
      <div className="border-b border-border py-4">
        <div className="flex items-center gap-2">
          <span className="text-icon-subtle">^</span>
          <span className="text-xs text-font-subtlest">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="border-b border-border py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-primary-bold text-font-subtle">
            Add New Design
          </span>
          <span className="text-icon-subtle">v</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 py-6">
        {/* Personal Access Token Input */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs text-font-subtlest">
              Personal Access Token
            </label>
            <button className="text-icon-subtle hover:text-icon">ⓘ</button>
          </div>
          <input
            type="text"
            placeholder=""
            className="w-full border border-border-input bg-elevation-surface px-3 py-2 text-xs text-font placeholder-font-disabled focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs text-font-subtlest">
              Design URL
            </label>
            <button className="text-icon-subtle hover:text-icon">ⓘ</button>
          </div>
          <input
            type="text"
            placeholder=""
            className="w-full border border-border-input bg-elevation-surface px-3 py-2 text-xs text-font placeholder-font-disabled focus:border-border-focused focus:outline-none"
          />
        </div>
      </div>

      {/* Button Group */}
      <div className="flex gap-3 py-4">
        <button className="flex-1 border border-border bg-elevation-surface-raised px-4 py-2 text-xs font-primary-bold text-font-subtle hover:bg-elevation-surface-raised-hovered hover:text-font">
          Awesome
        </button>
        <button className="flex-1 border border-border bg-elevation-surface-raised px-4 py-2 text-xs font-primary-bold text-font-subtle hover:bg-elevation-surface-raised-hovered hover:text-font">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-border py-4">
        <h2 className="text-sm font-primary-bold text-font-subtle">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
