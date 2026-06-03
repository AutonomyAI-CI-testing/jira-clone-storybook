export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="mb-3 text-lg font-primary-bold text-font">
        Test Card Title
      </h2>
      <p className="text-sm text-font-subtle">
        This is a simple test card component displaying static content for
        demonstration purposes.
      </p>
    </div>
  );
};
