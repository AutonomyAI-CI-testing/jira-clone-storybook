/**
 * TestCard component - a simple card with a title and description.
 * Serves as a basic example component for testing purposes.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded-md bg-background-neutral p-6">
      <h3 className="font-primary-bold text-lg text-font">Test Card Title</h3>
      <p className="mt-2 font-primary-light text-font-subtle">
        This is a short description paragraph for the test card component.
      </p>
    </div>
  );
};
