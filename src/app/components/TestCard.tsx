export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-xs"
    >
      <h2 className="font-primary-bold text-xl text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card component.
      </p>
    </div>
  );
};
