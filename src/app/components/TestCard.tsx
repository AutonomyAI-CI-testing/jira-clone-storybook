export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[320px] w-full items-center justify-center bg-elevation-surface-sunken p-8"
  >
    <div className="w-80 rounded-md border border-border bg-elevation-surface-raised p-4 font-primary text-font shadow-sm">
      <h2 className="font-primary-bold text-base">Test Card</h2>
      <p className="mt-1 font-primary-light text-xs text-font-subtle">
        Smoke-test placeholder. Rendered once, no props.
      </p>
      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <span className="rounded bg-background-accent-blue-subtle px-2 py-1 font-primary text-2xs text-font-accent-blue">
          Ready
        </span>
        <span className="font-primary-light text-2xs text-font-subtlest">
          v0.0.0
        </span>
      </div>
    </div>
  </div>
);

export default TestCard;
