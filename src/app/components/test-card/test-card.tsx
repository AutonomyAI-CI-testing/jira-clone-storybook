export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg font-primary">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple card component displaying a title and description.
      </p>
    </div>
  );
};
