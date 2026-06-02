export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-black text-2xl text-font">Test Card Title</h2>
      <p className="mt-4 font-primary-light text-base text-font-subtle">
        This is a test card description. It contains placeholder content for
        testing component structure and styling patterns.
      </p>
    </div>
  );
};
