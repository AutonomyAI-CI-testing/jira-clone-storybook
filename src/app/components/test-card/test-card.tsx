export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="text-lg">Test Card</h2>
      <p className="text-sm text-font-subtle">
        This is a test card component with a title and description
      </p>
    </div>
  );
};
