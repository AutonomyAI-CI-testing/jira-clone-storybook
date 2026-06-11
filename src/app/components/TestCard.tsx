export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg bg-elevation-surface-raised p-6 shadow-md"
    >
      <h2 className="font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
