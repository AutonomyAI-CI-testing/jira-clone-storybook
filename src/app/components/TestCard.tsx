export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[300px] rounded bg-elevation-surface-raised p-5 text-font shadow-sm"
    >
      <h2 className="text-lg font-primary">Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description providing some context about the card content.
      </p>
    </div>
  );
};
