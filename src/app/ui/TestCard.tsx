/**
 * TestCard
 *
 * A self-contained, static reproduction of the "UI magician Agent" Figma frame.
 *
 * No props, no state and no data: everything on screen is literal content, which
 * is all a smoke test needs. The root carries the repo's `dark` theme class so
 * the semantic token classes below resolve to their dark values and the panel
 * matches the dark reference whatever theme the surrounding page is in.
 */

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.25v4.25" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="M3.5 10L8 5.5 12.5 10" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 008.1 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 003.6 15a1.65 1.65 0 00-1.51-1H2a2 2 0 110-4h.09A1.65 1.65 0 003.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 008.1 4.6 1.65 1.65 0 009.09 3.09V3a2 2 0 114 0v.09A1.65 1.65 0 0014.1 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

/** One labelled input row — shared by both fields so the markup lives once. */
const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="font-primary-bold text-base text-font">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      aria-label={label}
      className="w-full rounded-md border border-border-bold bg-background-input px-4 py-4 font-primary-light text-lg text-font placeholder:text-font-subtle"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-full max-w-[420px] rounded-md bg-elevation-surface-sunken px-8 pb-10 pt-6 text-font shadow-md"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-font-subtle"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed frame row */}
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate font-primary text-base">
          From entire frame to a singl…
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="font-primary-bold text-2xl">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="mt-2 flex gap-6">
          <button
            type="button"
            className="flex-1 rounded-md bg-[#b0501e] px-8 py-4 font-primary-bold text-lg text-white hover:bg-[#c25a24]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-md bg-[#b0501e] px-8 py-4 font-primary-bold text-lg text-white hover:bg-[#c25a24]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-20 font-primary-bold text-2xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
