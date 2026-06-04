export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm duration-100 ease-linear hover:shadow-md hover:-translate-y-0.5"
    >
      <h2 className="text-lg text-font">Test Card Title</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a simple test card component with a title and description.
      </p>
    </div>
  );
};
