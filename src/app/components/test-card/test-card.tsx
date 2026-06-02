export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-elevation-surface-sunken p-4"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-primary text-[13.5px] font-semibold text-font-subtle">
          UI magician Agent
        </h2>
        <button className="text-font-subtle hover:text-font">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-4 flex items-center gap-2 py-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-font-subtlest"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[11px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible Section 2 */}
      <div className="mb-6 flex items-center gap-2 py-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-font-subtlest"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-[11px] text-font-subtlest">Add New Design</span>
      </div>

      {/* Form Inputs */}
      <div className="mb-6 space-y-4">
        {/* Personal Access Token */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <label className="text-[10.5px] font-semibold text-font-subtle">
              Personal Access Token
            </label>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-font-subtlest"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-[11px] text-font placeholder-font-subtlest focus:outline-border-brand"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <label className="text-[10.5px] font-semibold text-font-subtle">
              Design URL
            </label>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-font-subtlest"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-[11px] text-font placeholder-font-subtlest focus:outline-border-brand"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-2">
        <button className="flex-1 rounded bg-orange-600 px-3 py-2 text-[11px] font-semibold text-font-inverse hover:bg-orange-700 active:bg-orange-800">
          Awesome
        </button>
        <button className="flex-1 rounded bg-orange-600 px-3 py-2 text-[11px] font-semibold text-font-inverse hover:bg-orange-700 active:bg-orange-800">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="border-t border-border-input pt-3">
        <p className="text-[10px] text-font-subtlest">Recent Breakdowns</p>
      </div>
    </div>
  );
};
