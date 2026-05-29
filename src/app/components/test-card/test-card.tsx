export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-background-neutral p-4 shadow-sm"
    >
      <h2 className="mb-2 font-primary-bold text-lg text-font">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a test card component.
      </p>
    </div>
  );
};
