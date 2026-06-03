export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a description paragraph for the test card component.
      </p>
    </div>
  );
};
