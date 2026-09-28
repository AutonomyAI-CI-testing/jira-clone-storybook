export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-lg border border-border bg-white p-4 shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="font-primary-bold text-lg text-font">Test card</h2>
        <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary-light text-2xs uppercase text-font-brand">
          Smoke test
        </span>
      </div>

      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A self-contained card used to confirm the component renders end to end.
      </p>

      <div className="mt-4 flex flex-col gap-2 font-primary-light text-sm text-font-subtle">
        <p>It takes no props and needs no data.</p>
        <p>Everything you see here is hardcoded inside the component.</p>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          className="rounded bg-background-neutral px-3 py-2 font-primary text-sm text-font"
        >
          Secondary
        </button>
        <button
          type="button"
          className="rounded bg-background-brand-bold px-3 py-2 font-primary text-sm text-font-inverse"
        >
          Primary
        </button>
      </div>
    </div>
  );
};

export default TestCard;
