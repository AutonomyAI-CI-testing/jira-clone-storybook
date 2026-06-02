/**
 * TestCard is a simple card component that displays a title and description.
 * Uses elevation-surface-raised background with subtle shadow for depth.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded bg-elevation-surface-raised p-3 shadow-sm">
      <h2 className="font-primary-bold text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm">
        This is a simple test card component with a title and description.
      </p>
    </div>
  );
};
