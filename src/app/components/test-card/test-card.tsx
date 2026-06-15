export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border bg-background-neutral p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtlest">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
