export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-md"
    >
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card
      </h2>
      <p className="font-primary-light text-font-subtle">
        This is a test card component with a short description.
      </p>
    </div>
  );
};
