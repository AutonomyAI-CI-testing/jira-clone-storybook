export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg font-primary">Test Card Title</h2>
      <p className="font-primary-light text-font-subtle">
        This is a test card component displaying a title and description.
      </p>
    </div>
  );
};
