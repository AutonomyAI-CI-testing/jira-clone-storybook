export const TestCard = (): JSX.Element => {
  return (
    <div className="dark">
      <div className="w-64 bg-black p-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-font-subtle">
            UI magician Agent
          </h1>
          <button className="cursor-pointer text-lg text-font-subtle hover:text-font">
            ⚙️
          </button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="mb-4 border-b border-border">
          <button className="flex w-full items-center justify-between py-3 text-xs font-semibold text-font-subtlest hover:text-font-subtle">
            <span className="truncate">From entire frame to a singl...</span>
            <span className="ml-2 flex-shrink-0">▼</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="mb-6 border-b border-border">
          <button className="flex w-full items-center justify-between py-3 text-xs font-semibold text-font-subtle hover:text-font">
            <span>Add New Design</span>
            <span className="ml-2 flex-shrink-0">▼</span>
          </button>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-5">
          <div className="mb-1.5 flex items-center gap-2">
            <label className="text-xs font-semibold text-font-subtle">
              Personal Access Token
            </label>
            <span className="cursor-help text-xs text-font-subtlest">ℹ️</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-border bg-background-input px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest outline-none focus-visible:bg-background-input-hovered"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <div className="mb-1.5 flex items-center gap-2">
            <label className="text-xs font-semibold text-font-subtle">
              Design URL
            </label>
            <span className="cursor-help text-xs text-font-subtlest">ℹ️</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-border bg-background-input px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest outline-none focus-visible:bg-background-input-hovered"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex gap-3">
          <button className="flex-1 rounded bg-background-warning-bold py-2 text-xs font-semibold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
            Awesome
          </button>
          <button className="flex-1 rounded bg-background-warning-bold py-2 text-xs font-semibold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-font-subtle">
            Recent Breakdowns
          </h3>
        </div>

        {/* Footer Section */}
        <div className="border-t border-border pt-3 text-center">
          <p className="text-xs text-font-subtlest">© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};
