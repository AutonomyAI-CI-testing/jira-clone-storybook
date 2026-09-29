/**
 * TestCard
 *
 * A minimal, self-contained card used as a smoke test: it exists to confirm a
 * new component is picked up by the preview pipeline and rendered on screen.
 * No props, no state, no data — static placeholder content only.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="p-5">
    <div className="w-[320px] rounded bg-elevation-surface-raised p-4 text-font shadow-md">
      <h2 className="font-primary-bold text-lg leading-6">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A placeholder card rendered to confirm the component pipeline works end
        to end.
      </p>
      <button
        type="button"
        className="mt-4 rounded bg-background-brand-bold px-3 py-2 font-primary text-sm text-font-inverse duration-100 ease-linear hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      >
        Action
      </button>
    </div>
  </div>
);
