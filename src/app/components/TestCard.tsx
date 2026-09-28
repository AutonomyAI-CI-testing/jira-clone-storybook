export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm"
    >
      <div className="h-40 w-full rounded bg-background-subtle" />
      <h3 className="mt-3 font-primary-bold text-base text-font">
        Test card title
      </h3>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        A short line of placeholder body text for this smoke-test card.
      </p>
      <div className="mt-3 flex items-center justify-between font-primary text-xs text-font-subtle">
        <span>Card footer</span>
        <span>Meta</span>
      </div>
    </div>
  );
};
