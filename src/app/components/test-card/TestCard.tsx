export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-font">
        Test Card Title
      </h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a short description providing context for the test card component.
      </p>
    </div>
  );
};
