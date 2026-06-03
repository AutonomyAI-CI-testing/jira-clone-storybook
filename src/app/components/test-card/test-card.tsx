export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface-raised p-6 shadow-md"
    >
      <h2 className="mb-3 font-primary-bold text-xl text-font">Test Card</h2>
      <p className="text-sm text-font-subtle">
        This is a test card component with a title and description.
      </p>
    </div>
  );
};
