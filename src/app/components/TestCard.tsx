/**
 * TestCard Component - UI magician Agent
 *
 * Renders a form interface for the UI magician Agent design tool.
 * Includes token input, design URL input, and action buttons.
 */

// Common className patterns for inputs and buttons to maintain consistency
const INPUT_CLASS =
  'w-full rounded border border-border bg-background-input px-2 py-1.5 text-xs text-font-subtle placeholder-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand';

const BUTTON_CLASS =
  'flex-1 rounded bg-background-warning-bold py-2 px-3 text-xs font-semibold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed';

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-sunken w-full max-w-xs rounded-lg p-4 text-font-subtlest"
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtlest">UI magician Agent</h1>
        <button className="flex h-6 w-6 items-center justify-center rounded hover:bg-background-neutral" aria-label="Settings">
          ⚙
        </button>
      </div>

      <div className="mb-4 border-t border-border">
        <button className="flex w-full items-center justify-between py-3 text-left text-xs font-semibold text-font-subtlest hover:text-font-subtle" aria-label="Expand collapsible section">
          <span>From entire frame to a singl...</span>
          <span>⌄</span>
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between border-t border-border py-3">
        <span className="text-xs font-semibold text-font-subtlest">Add New Design</span>
        <button className="flex h-5 w-5 items-center justify-center text-font-subtlest" aria-label="Add new design">
          ›
        </button>
      </div>

      <div className="mb-3">
        <label className="mb-1 flex items-center text-xs font-semibold text-font-subtlest">
          Personal Access Token
          <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-[0.65rem] text-font-subtle">
            ⓘ
          </span>
        </label>
        <input
          type="password"
          placeholder="Enter token..."
          className={INPUT_CLASS}
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 flex items-center text-xs font-semibold text-font-subtlest">
          Design URL
          <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-[0.65rem] text-font-subtle">
            ⓘ
          </span>
        </label>
        <input
          type="text"
          placeholder="https://..."
          className={INPUT_CLASS}
        />
      </div>

      <div className="mb-4 flex gap-2">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      <div className="border-t border-border pt-3">
        <h2 className="text-xs font-semibold text-font-subtlest">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
