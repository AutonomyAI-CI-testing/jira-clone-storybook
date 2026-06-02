export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card description.
      </p>
    </div>
  );
};
