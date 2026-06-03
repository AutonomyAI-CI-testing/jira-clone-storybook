export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm outline outline-2 outline-transparent"
    >
      <h2 className="text-xl font-primary-bold text-font">
        Card Title
      </h2>
      <p className="mt-3 font-primary-light text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
