export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full flex-col gap-2 rounded bg-elevation-surface-raised p-4 shadow-sm hover:bg-elevation-surface-raised-hovered"
    >
      <h2 className="text-lg text-font">Test Card</h2>
      <p className="text-sm text-font-subtle">
        This is a test card component with a title and description.
      </p>
    </div>
  );
};
