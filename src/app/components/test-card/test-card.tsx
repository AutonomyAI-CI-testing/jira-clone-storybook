
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-raised rounded-md shadow-md border border-border p-6 max-w-sm"
    >
      <h2 className="font-primary-bold text-lg text-font mb-2">
        Test Card Title
      </h2>
      <p className="text-sm text-font-subtle">
        This is a short description for the test card.
      </p>
    </div>
  );
};
