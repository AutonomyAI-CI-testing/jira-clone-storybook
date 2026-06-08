export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border bg-elevation-surface p-6 shadow-xs"
    >
      <h2 className="mb-2 font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description of the test card component.
      </p>
    </div>
  );
};
