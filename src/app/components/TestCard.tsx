export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6 font-primary">
      <div className="w-full max-w-sm rounded border border-border bg-elevation-surface-raised p-5 shadow-sm">
        <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
        <p className="mt-2 font-primary-light text-sm leading-6 text-font-subtle">
          This card was generated from defaults for the smoke test.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary-light text-2xs text-font-brand">
            Smoke test
          </span>
          <span className="rounded bg-background-neutral px-2 py-1 font-primary-light text-2xs text-font-subtle">
            No props
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="font-primary-light text-2xs text-font-subtlest">
            Rendered once, accepted as-is
          </span>
          <button
            type="button"
            className="rounded bg-background-brand-bold px-3 py-1.5 font-primary-bold text-sm text-font-inverse"
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
