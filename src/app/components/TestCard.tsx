export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface border-border max-w-sm rounded-md border p-4 shadow-md"
    >
      <h2 className="text-font font-primary-bold mb-2 text-xl">
        Test Card Title
      </h2>
      <p className="text-font-subtle font-primary-light">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
