export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-3 rounded bg-elevation-surface-raised p-5 text-font shadow-sm"
    >
      <span className="w-fit rounded bg-background-brand-subtlest px-2 py-1 font-primary-bold text-2xs text-font-brand">
        Smoke test
      </span>
      <h2 className="font-primary-black text-2xl">Test card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        A self-contained card that takes no props and renders fixed placeholder
        content.
      </p>
      <div className="mt-1 h-1 w-16 rounded bg-background-brand-bold" />
    </div>
  );
};
