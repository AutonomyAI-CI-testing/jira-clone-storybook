
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-raised rounded shadow-sm p-4 text-font"
    >
      <h2 className="font-primary-black text-lg">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle mt-1">
        This is a test card component.
      </p>
    </div>
  );
};
