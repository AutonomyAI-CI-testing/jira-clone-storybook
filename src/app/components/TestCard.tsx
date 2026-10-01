/**
 * TestCard — a self-contained, prop-less sample card.
 *
 * Smoke-test scaffolding: it renders fixed content and exists to verify that a
 * new component file renders in the preview. Safe to delete.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex items-center justify-center bg-elevation-surface-sunken p-6"
  >
    <div className="w-[320px] rounded-md border border-border bg-elevation-surface-raised p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-primary-bold text-font">Test Card</h3>
        <span className="rounded bg-background-accent-blue-subtler px-2 py-0.5 font-primary text-2xs text-font-accent-blue">
          Draft
        </span>
      </div>
      <p className="mt-2 font-primary text-xs text-font-subtle">
        A self-contained smoke-test card rendered from static content.
      </p>
      <p className="mt-1 font-primary text-2xs text-font-subtlest">
        No props, no data fetching — safe to delete.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="rounded border border-border px-3 py-1 font-primary text-xs text-font hover:bg-elevation-surface-raised-hovered"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="rounded bg-background-brand-bold px-3 py-1 font-primary text-xs text-font-inverse outline outline-2 outline-transparent hover:bg-background-brand-bold-hovered hover:outline-border-brand"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);
