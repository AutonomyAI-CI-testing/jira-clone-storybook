/**
 * TestCard — a static, self-contained copy of the "UI magician Agent" panel from
 * the Figma frame attached to this task (see task/PLAN.md).
 *
 * Smoke test: no props, no state, no data, no side effects. Styling uses the
 * repo's semantic colour tokens so the panel re-themes with the app.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-elevation-surface p-4 font-primary-light text-font"
    >
      {/* Header: title + settings */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="rounded-full p-1 text-font hover:bg-background-neutral"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-4 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section: Add New Design */}
      <div className="mt-12 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      {/* Actions — the frame's burnt orange has no semantic role in this repo's
          token set, so it stays a literal on these two buttons only. */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="h-9 flex-1 rounded-md bg-[#a34f24] font-primary text-sm text-[#f0a882]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 flex-1 rounded-md bg-[#a34f24] font-primary text-sm text-[#f0a882]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center gap-2 text-font-subtle">
        <span className="text-sm">{label}</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        aria-label={label}
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-border bg-background-input px-3 font-primary-light text-sm text-font placeholder:text-font-subtlest focus-visible:outline outline-2 outline-border-brand"
      />
    </div>
  );
};

const GearIcon = (): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const ChevronUpIcon = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
