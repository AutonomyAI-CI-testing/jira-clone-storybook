/**
 * TestCard Component
 * Displays a preview card for the UI Magician Agent with design configuration options.
 * Features a header, collapsible sections, form inputs for token/URL, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-elevation-surface-sunken p-6 font-primary"
    >
      <div className="mx-auto w-full max-w-xs space-y-4">
        {/* Header with title and settings button */}
        <div className="flex items-center justify-between rounded-md bg-elevation-surface-raised p-3">
          <h1 className="text-sm font-semibold text-font-subtlest">
            UI magician Agent
          </h1>
          <button
            className="text-lg text-font-subtlest hover:text-font-subtle"
            aria-label="Settings"
          >
            ⚙️
          </button>
        </div>

        {/* Collapsible section for design breakdown - currently non-interactive */}
        <div className="rounded-md bg-elevation-surface-raised p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs text-font-subtlest">
              From entire frame to a singl...
            </h2>
            <span className="text-font-subtlest" aria-hidden="true">
              ›
            </span>
          </div>
        </div>

        {/* Button to add new design - expandable section */}
        <div className="rounded-md bg-elevation-surface-raised p-3">
          <button
            className="flex w-full items-center justify-between text-left"
            aria-label="Add New Design"
          >
            <span className="text-xs font-semibold text-font-subtle">
              Add New Design
            </span>
            <span className="text-font-subtlest" aria-hidden="true">
              ›
            </span>
          </button>
        </div>

        {/* Configuration form with read-only token and URL fields */}
        <div className="space-y-3 rounded-md bg-elevation-surface-raised p-3">
          {/* Personal Access Token - read-only display */}
          <div className="space-y-1.5">
            <label
              htmlFor="token-input"
              className="block text-xs text-font-subtlest"
            >
              Personal Access Token
            </label>
            <input
              id="token-input"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-border bg-elevation-surface-sunken px-2 py-1.5 text-xs text-font-subtle placeholder-font-subtlest focus-visible:outline-none"
              readOnly
            />
          </div>

          {/* Design URL - read-only display */}
          <div className="space-y-1.5">
            <label
              htmlFor="url-input"
              className="block text-xs text-font-subtlest"
            >
              Design URL
            </label>
            <input
              id="url-input"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-border bg-elevation-surface-sunken px-2 py-1.5 text-xs text-font-subtle placeholder-font-subtlest focus-visible:outline-none"
              readOnly
            />
          </div>
        </div>

        {/* Primary actions - secondary (Awesome) and primary (Prepare) buttons */}
        <div className="flex gap-2">
          <button className="flex-1 rounded bg-background-neutral py-2 text-center text-xs font-semibold text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed">
            Awesome
          </button>
          <button className="flex-1 rounded bg-background-brand-bold py-2 text-center text-xs font-semibold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed">
            Prepare
          </button>
        </div>

        {/* Recent breakdowns history - currently empty placeholder */}
        <div className="rounded-md bg-elevation-surface-raised p-3">
          <h3 className="text-xs font-semibold text-font-subtle">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
