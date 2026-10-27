/**
 * TestCard — a self-contained reproduction of a Figma frame ("UI magician
 * Agent"), used as a smoke test for the design-to-component path.
 *
 * Presentational only: no props, no state, no handlers, and it is wired into
 * no screen. Colours come from the semantic tokens so the card follows the
 * active theme; the two buttons use the system's danger recipe because the
 * frame's rust accent has no token of its own.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-elevation-surface p-8 font-primary text-font"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <SettingsGlyph />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <ChevronUpGlyph />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <h2 className="mt-32 flex items-center gap-2 font-primary-bold text-xl">
        <ChevronUpGlyph />
        Add New Design
      </h2>

      {/* Personal Access Token */}
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-personal-access-token"
            className="font-primary-bold text-base"
          >
            Personal Access Token
          </label>
          <InfoGlyph />
        </div>
        <input
          id="testElem-personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-12 w-full rounded border border-border-bold bg-elevation-surface-sunken px-4 text-base text-font outline outline-2 outline-transparent placeholder:text-font-subtlest focus-visible:outline-border-brand"
        />
      </div>

      {/* Design URL */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-design-url"
            className="font-primary-bold text-base"
          >
            Design URL
          </label>
          <InfoGlyph />
        </div>
        <input
          id="testElem-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-12 w-full rounded border border-border-bold bg-elevation-surface-sunken px-4 text-base text-font outline outline-2 outline-transparent placeholder:text-font-subtlest focus-visible:outline-border-brand"
        />
      </div>

      {/* Actions */}
      <div className="mt-10 flex justify-end gap-8">
        <button
          type="button"
          className="h-16 w-[169px] rounded-md bg-background-danger-bold text-lg text-font-inverse"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-16 w-[169px] rounded-md bg-background-danger-bold text-lg text-font-inverse"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const ChevronUpGlyph = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <path d="M3 10.5 8 5.5l5 5" />
  </svg>
);

const SettingsGlyph = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.98a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <circle cx="10" cy="10" r="8.5" />
    <path d="M10 9.25v4.75" />
    <circle cx="10" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
