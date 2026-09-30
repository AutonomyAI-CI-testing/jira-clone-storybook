export const TestCard = () => {
  return (
    <div id="testElem" className="flex justify-center bg-elevation-surface p-6">
      <div className="w-[320px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-primary-bold text-font">
            Fix login redirect loop
          </h2>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 shrink-0 fill-icon-subtle"
          >
            <circle cx="3" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="13" cy="8" r="1.5" />
          </svg>
        </div>
        <p className="mt-2 font-primary-light text-xs leading-relaxed text-font-subtle">
          After signing in, the app bounces between the login page and the
          projects list. Worth a look before the next release.
        </p>
        <div className="my-3 border-t border-border" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background-neutral-bold font-primary-bold text-2xs text-font-inverse">
              DS
            </span>
            <span
              aria-label="Medium priority"
              className="font-primary text-2xs text-icon-accent-yellow"
            >
              ▲
            </span>
            <span className="font-primary text-2xs text-font-subtle">
              3 comments
            </span>
          </div>
          <button
            type="button"
            className="rounded bg-background-brand-bold px-3 py-1 font-primary text-2xs text-font-inverse"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};
