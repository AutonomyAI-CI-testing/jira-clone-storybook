interface TestCardProps {
  /** Optional title for the card */
  title?: string;
  /** Optional description text */
  description?: string;
}

/**
 * A reusable card component for displaying test information with a title and description.
 * Uses elevated surface background to stand out from the main content.
 */
export const TestCard = ({
  title = "Test Card Title",
  description = "This is a short description for the test card component.",
}: TestCardProps): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">{title}</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        {description}
      </p>
    </div>
  );
};
