export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-80 rounded border border-border bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="font-primary-bold text-base text-font">Test card</h2>
      <p className="mt-1 font-primary-light text-xs text-font-subtle">
        A self-contained card with no props, rendered to check the preview path.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <span className="rounded bg-background-accent-blue-subtlest px-2 py-0.5 font-primary text-2xs text-font-accent-blue">
          Smoke test
        </span>
        <span className="font-primary-light text-2xs text-font-subtlest">
          Self-contained
        </span>
      </div>
    </div>
  );
};
