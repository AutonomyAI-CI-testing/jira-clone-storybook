export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="mb-3 text-xl font-primary-bold text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a sample description paragraph for the test card component. It
        demonstrates the basic structure and styling of a reusable card element.
      </p>
    </div>
  );
};
