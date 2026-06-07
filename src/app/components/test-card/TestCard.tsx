export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-2 rounded bg-elevation-surface-raised p-5 shadow-sm max-w-sm"
    >
      <h2 className="text-lg text-font">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
