export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-xl text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtlest">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
