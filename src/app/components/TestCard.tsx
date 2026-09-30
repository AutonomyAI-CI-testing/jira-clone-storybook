export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[320px] rounded border border-border bg-elevation-surface-raised p-4 shadow-xs"
  >
    <h2 className="font-primary-bold text-base text-font">Test card</h2>
    <p className="mt-1 font-primary-light text-sm text-font-subtle">
      A self-contained placeholder card. It takes no props and renders the same
      every time.
    </p>
    <p className="mt-1 font-primary-light text-sm text-font-subtle">
      Swap this copy once the real design is available.
    </p>
    <div className="mt-3 border-t border-border pt-3 text-2xs text-font-subtlest">
      Placeholder content
    </div>
  </div>
);
