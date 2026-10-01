export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-80 flex-col gap-3 rounded border border-border bg-elevation-surface-raised p-4 shadow-md"
    >
      <h2 className="font-primary-bold text-lg text-font">Test card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        Placeholder content for a smoke test. It exists to confirm that a
        component in this project compiles, picks up styling and renders on
        screen.
      </p>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="font-primary-light text-xs uppercase text-font-subtlest">
          Smoke test
        </span>
        <span className="rounded bg-background-neutral px-2 py-1 font-primary-bold text-xs text-font-subtle">
          Default
        </span>
      </div>
    </div>
  );
}
