export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card component with a title and description.
      </p>
    </div>
  );
};
