export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-2 rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-black text-lg text-font">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component with static content for testing
        purposes.
      </p>
    </div>
  );
};
