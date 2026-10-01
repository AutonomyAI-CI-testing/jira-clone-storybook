export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded bg-elevation-surface-raised p-4 text-font shadow-sm outline outline-1 outline-border"
    >
      <h3 className="font-primary-bold text-lg">Test Card</h3>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A self-contained card used to smoke-test how a new component renders in
        the preview.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded bg-background-brand-subtlest px-2 py-1 text-xs text-font-brand">
          Smoke test
        </span>
        <span className="text-xs text-font-subtle">Component preview</span>
      </div>
    </div>
  );
};
