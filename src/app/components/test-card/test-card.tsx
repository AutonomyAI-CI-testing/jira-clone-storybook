export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-lg border border-border-default bg-background-default p-6 shadow-sm">
      <h2 className="mb-2 font-primary-bold text-xl text-font-default">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtlest">
        This is a short description providing context about the card content.
      </p>
    </div>
  );
};
