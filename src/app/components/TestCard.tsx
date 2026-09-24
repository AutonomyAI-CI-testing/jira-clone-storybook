export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded-md border border-border bg-elevation-surface-raised p-4 text-font shadow-lg"
    >
      <h2 className="text-lg font-bold">Test Card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card.
      </p>
    </div>
  );
};
