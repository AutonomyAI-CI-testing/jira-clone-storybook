export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded border border-border bg-elevation-surface-raised p-6 font-primary shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A self-contained smoke-test card. No props, no data — it just renders.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="rounded bg-background-brand-bold px-4 py-2 font-primary text-sm text-font-inverse hover:bg-background-brand-bold-hovered"
        >
          Primary action
        </button>
        <button
          type="button"
          className="rounded bg-background-neutral px-4 py-2 font-primary text-sm text-font-subtle hover:bg-background-neutral-hovered"
        >
          Secondary
        </button>
      </div>
    </div>
  );
};
