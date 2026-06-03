export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-2 text-font-subtle">
        This is a test card component with a title and description.
      </p>
    </div>
  );
};
