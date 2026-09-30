export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-full max-w-[320px] rounded-md border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-black text-lg text-font">Test card</h2>
        <p className="mt-1 font-primary-light text-sm text-font-subtle">
          A self-contained smoke-test card. It takes no props and renders the
          same static content every time.
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-primary-light text-2xs text-font-subtlest">
            Smoke test
          </span>
          <span className="rounded bg-background-brand-bold px-2 py-1 font-primary text-2xs text-font-inverse">
            Action
          </span>
        </div>
      </div>
    </div>
  );
};
