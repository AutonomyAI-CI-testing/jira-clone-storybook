export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg text-font">Test Card</h2>
      <p className="text-sm text-font-subtle">
        This is a sample card component displaying a title and description.
      </p>
    </div>
  );
};
