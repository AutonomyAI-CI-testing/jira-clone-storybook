export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface p-6 shadow-md"
    >
      <h2 className="mb-3 font-primary-black text-lg text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description paragraph for the test card component.
      </p>
    </div>
  );
};
