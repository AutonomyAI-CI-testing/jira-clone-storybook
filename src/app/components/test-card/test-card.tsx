/**
 * A simple test card component that displays a title and description
 * in a clean card format with elevation and shadow styling.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded-md bg-elevation-surface-raised p-6 shadow-md">
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component displaying a title and description
        in a clean card format.
      </p>
    </div>
  );
};
