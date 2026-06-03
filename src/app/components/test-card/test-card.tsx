export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised px-3 py-4 shadow-sm text-font"
    >
      <h2 className="text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle leading-6">
        This is a short description paragraph for the test card component.
      </p>
    </div>
  );
};
