/**
 * TestCard Component
 *
 * A simple, reusable card component that displays a title and descriptive content.
 * Uses semantic HTML and utility classes for consistent styling across the application.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded-md bg-elevation-surface-raised p-6 shadow-md">
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-base text-font-subtle leading-relaxed">
        This is a simple test card component displaying a title and description
        with consistent styling and proper text hierarchy.
      </p>
    </div>
  );
};
