export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border-subtle bg-elevation-surface p-6 shadow-sm max-w-sm"
    >
      <h2 className="mb-2 font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
