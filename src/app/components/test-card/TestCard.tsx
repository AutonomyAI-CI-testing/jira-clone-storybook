export const TestCard = (): JSX.Element => (
  <div id="testElem" className="p-4">
    <div className="w-[320px] rounded bg-elevation-surface-raised p-3 text-font shadow-xs">
      <div className="flex items-start justify-between gap-2">
        <h2 className="font-primary-bold text-lg text-font">Test card</h2>
        <span className="rounded bg-background-accent-green-subtle px-2 py-0.5 text-2xs font-primary-bold text-font-accent-green">
          Open
        </span>
      </div>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        If this card is visible, the component pipeline works.
      </p>
    </div>
  </div>
);
