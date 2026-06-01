export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-lg"
    >
      <h2 className="mb-4 font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-base text-font-subtle">
        This is a simple test card component that displays a title and
        description text.
      </p>
    </div>
  );
};
