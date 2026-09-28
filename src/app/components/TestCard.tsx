export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="mx-auto w-full max-w-sm rounded-md bg-elevation-surface-raised p-5 shadow-sm"
  >
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 shrink-0 rounded-full bg-background-brand-bold" />
      <div className="flex flex-col gap-1">
        <h2 className="font-primary-black text-lg text-font">Test Card</h2>
        <span className="w-fit rounded bg-background-success px-2 py-0.5 font-primary-light text-2xs uppercase tracking-wide text-font-success">
          Active
        </span>
      </div>
    </div>
    <p className="mt-4 font-primary-light text-sm text-font-subtle">
      A short placeholder description sentence for this smoke-test card.
    </p>
    <div className="mt-4 flex justify-end">
      <button
        type="button"
        className="cursor-pointer rounded bg-background-brand-bold p-2 text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      >
        Action
      </button>
    </div>
  </div>
);
