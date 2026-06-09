

interface TestCardProps {
  /**
   * Title displayed at the top of the card
   */
  title?: string;
  /**
   * Main description text
   */
  description?: string;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * A standard card component used for displaying content in a contained layout.
 * Follows the application's design system for borders, spacing, and typography.
 */
export const TestCard = ({
  title = 'Test Card Title',
  description = 'This is a short description for the test card component.',
  className = '',
}: TestCardProps): JSX.Element => {
  return (
    <div
      id="testElem"
      className={`rounded-lg border border-border bg-elevation-surface p-6 shadow-xs ${className}`}
    >
      <h2 className="font-primary-bold text-xl text-font">{title}</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        {description}
      </p>
    </div>
  );
};
