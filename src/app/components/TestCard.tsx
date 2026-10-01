export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-80 rounded border border-border bg-elevation-surface-raised p-5 font-primary shadow-sm"
  >
    <h2 className="font-primary-bold text-base text-font">Test Card</h2>
    <p className="mt-2 text-sm text-font-subtle">
      Self-contained smoke-test card. No props.
    </p>
    <div className="mt-4 flex items-center justify-end gap-2">
      <span className="rounded border border-border px-3 py-1 text-xs text-font-subtle">
        Cancel
      </span>
      <span className="rounded bg-background-brand-bold px-3 py-1 text-xs text-font-inverse">
        Confirm
      </span>
    </div>
  </div>
);
