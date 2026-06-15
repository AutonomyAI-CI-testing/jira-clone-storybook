
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm outline outline-2 outline-transparent"
    >
      <h2 className="text-lg text-font">Sample Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short sample description for the test card component.
      </p>
    </div>
  );
};
