export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded border border-border bg-elevation-surface-raised p-4 shadow-xs"
    >
      <p className="font-primary-light text-2xs uppercase tracking-wide text-font-subtlest">
        TEST-1
      </p>
      <h3 className="mt-1 font-primary-bold text-lg leading-4 text-font">
        Test card
      </h3>
      <p className="mt-2 font-primary-light text-sm leading-6 text-font-subtle">
        If you can read this, the component pipeline is working end to end.
      </p>
      <span className="mt-3 inline-block rounded bg-background-neutral px-2 py-1 font-primary-light text-2xs text-font-subtle">
        Smoke test
      </span>
    </div>
  );
};
