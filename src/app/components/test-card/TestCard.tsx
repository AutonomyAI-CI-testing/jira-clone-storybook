export function TestCard() {
  return (
    <div id="testElem" className="flex w-full justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-3 rounded border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-accent-blue-subtle text-sm text-font-accent-blue">
            JD
          </div>
          <div className="flex flex-col">
            <h3 className="text-base text-font">Jordan Diaz</h3>
            <p className="text-xs text-font-subtle">Product designer</p>
          </div>
        </div>

        <p className="text-sm text-font-subtle">
          Working on the onboarding flow and the shared component library this
          sprint.
        </p>

        <hr className="border-border" />

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded bg-background-brand-bold px-3 py-1.5 text-xs text-font-inverse hover:bg-background-brand-bold-hovered"
          >
            View profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
