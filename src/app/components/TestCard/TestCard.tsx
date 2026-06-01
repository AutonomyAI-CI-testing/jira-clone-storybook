export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-sm rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a simple test card component with a title heading and a short
        description paragraph. It serves as a basic card structure for testing or
        prototyping purposes.
      </p>
    </div>
  );
};
