export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-5 shadow-sm"
    >
      <h2 className="mb-3 text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="text-sm text-font-subtlest">
        This is a short description paragraph for the test card.
      </p>
    </div>
  );
};
