export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-4 rounded-md border border-border bg-elevation-surface-raised p-5 shadow-md"
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-primary-bold text-lg text-font">Test card</h2>
        <p className="font-primary-light text-sm text-font-subtle">
          Placeholder subtitle
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-primary-light text-sm text-font-subtle">
          Placeholder line one — this card only exists to confirm that the
          component renders.
        </p>
        <p className="font-primary-light text-sm text-font-subtle">
          Placeholder line two, a little longer so the body wraps and the card
          picks up some height.
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="font-primary-light text-xs text-font-subtlest">
          Placeholder
        </span>
        <span className="rounded bg-background-brand-subtlest px-3 py-1.5 font-primary text-sm text-font-brand">
          Action
        </span>
      </div>
    </div>
  );
};
