export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-background-neutral p-6"
    >
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card
      </h2>
      <p className="text-sm text-font">
        This is a simple card component for demo and testing purposes.
      </p>
    </div>
  );
};
