export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface-raised p-5 shadow-xs"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description providing context for this card component.
      </p>
    </div>
  );
};
