export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-80 rounded-md border border-border bg-elevation-surface-raised p-4 font-primary shadow-xs"
  >
    <div className="flex items-center justify-between">
      <span className="text-2xs uppercase tracking-wide text-font-subtlest">
        JC-42 · Story
      </span>
      <span className="rounded bg-background-warning px-2 py-0.5 text-2xs text-font-warning">
        Medium
      </span>
    </div>

    <h3 className="mt-2 font-primary-black text-lg leading-6 text-font">
      Design the login screen
    </h3>

    <p className="mt-1 line-clamp-2 font-primary-light text-sm text-font-subtle">
      Draft the first pass of the login screen and hand it over for review before
      the sprint ends.
    </p>

    <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
      <span className="flex flex-center h-6 w-6 rounded-full bg-background-accent-blue-subtler text-2xs font-primary-bold text-font-accent-blue">
        WD
      </span>
      <span className="text-xs text-font-subtle">Woody Davis</span>
    </div>
  </div>
);
