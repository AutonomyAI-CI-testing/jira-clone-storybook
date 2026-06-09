export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised shadow-sm outline outline-1 outline-border p-4"
    >
      <h2 className="text-lg font-medium text-font">Test Card Title</h2>
      <p className="mt-1 text-sm text-font-subtle">
        This is a short description for the test card, providing some quick
        information.
      </p>
    </div>
  );
};
