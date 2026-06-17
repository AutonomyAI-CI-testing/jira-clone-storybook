export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded border border-border bg-elevation-surface-raised px-4 py-3 shadow-xs"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtlest">
        This is a short description for the test card.
      </p>
    </div>
  );
};
