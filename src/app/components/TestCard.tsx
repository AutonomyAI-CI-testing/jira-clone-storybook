export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[320px] items-center justify-center bg-elevation-surface-sunken p-8"
    >
      <div className="flex w-full max-w-[320px] flex-col gap-2 rounded border border-border bg-elevation-surface-raised p-6 shadow-sm">
        <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
        <p className="font-primary-light text-sm text-font-subtle">
          A small self-contained card that checks a component can be built and
          rendered on screen.
        </p>
        <span className="font-primary-light text-xs uppercase text-font-subtlest">
          Smoke test
        </span>
      </div>
    </div>
  );
};

export default TestCard;
