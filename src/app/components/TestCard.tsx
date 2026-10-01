export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[320px] rounded bg-elevation-surface-raised p-3 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        A small placeholder card, rendered to confirm a component can be
        generated and shown on screen.
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-primary-light text-2xs uppercase text-font-subtlest">
          Smoke test
        </span>
        <button
          type="button"
          className="rounded bg-background-brand-subtlest px-2 py-1 font-primary text-sm text-font-brand hover:bg-background-brand-subtlest-hovered"
        >
          Action
        </button>
      </div>
    </div>
  );
};
