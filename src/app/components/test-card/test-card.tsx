export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised shadow-sm p-4"
    >
      <h2 className="text-lg font-primary text-font">Test Card</h2>
      <p className="mt-2 text-sm font-primary-light text-font-subtle">
        This is a test card component.
      </p>
    </div>
  );
};
