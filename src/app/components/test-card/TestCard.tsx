/**
 * Smoke-test component: a static reproduction of a Figma frame ("UI magician
 * Agent"). Self-contained and inert — it takes no props and nothing is wired up.
 *
 * The card pins the `dark` theme class on its own root so its semantic tokens
 * resolve to the dark palette (near-black panel) whatever theme the app is in.
 *
 * The rust button fill has no semantic token in this design system, so it uses
 * the closest declared palette value (--Orange800), scoped to those two buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 pb-10 pt-10 font-primary text-font"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <span className="mt-0.5 text-icon-subtle" aria-hidden="true">
          <GearIcon />
        </span>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-8 flex items-center gap-3 text-font-subtle">
        <ChevronUpIcon />
        <span className="font-primary-light text-base">
          From entire frame to a single design
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-40 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-14">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-access-token"
            className="font-primary text-base text-font-subtle"
          >
            Personal Access Token
          </label>
          <span className="text-font-subtle" aria-hidden="true">
            <InfoIcon />
          </span>
        </div>
        <input
          id="test-card-access-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="mt-6 w-full rounded border border-border-bold bg-background-input px-8 py-5 font-primary-light text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      {/* Design URL */}
      <div className="mt-7">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="font-primary text-base text-font-subtle"
          >
            Design URL
          </label>
          <span className="text-font-subtle" aria-hidden="true">
            <InfoIcon />
          </span>
        </div>
        <input
          id="test-card-design-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-6 w-full rounded border border-border-bold bg-background-input px-8 py-5 font-primary-light text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-9 pl-12">
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[var(--Orange800)] py-6 text-lg text-font hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[var(--Orange800)] py-6 text-lg text-font hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path
      d="M5 15l7-7 7 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 11v6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7.5" r="1.25" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-7 w-7 shrink-0"
  >
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.92 4.6H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
