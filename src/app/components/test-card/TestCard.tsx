export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full rounded-md bg-elevation-surface-raised p-4 font-primary text-font shadow-sm outline outline-2 outline-transparent"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-primary-bold">Test Card</h2>
        <span className="rounded bg-background-brand-bold px-2 py-1 text-2xs font-primary text-font-inverse">
          Ready
        </span>
      </div>
      <p className="mt-1 text-sm font-primary-light text-font-subtle">
        Smoke test of the design-to-code pipeline.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-2xs text-font-subtle">id: testElem</span>
        <span className="text-2xs text-font-subtle">no props</span>
      </div>
    </div>
  );
};
