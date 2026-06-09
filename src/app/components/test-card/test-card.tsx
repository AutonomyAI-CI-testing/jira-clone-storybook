interface TestCardProps {
  /** The heading text displayed in the card */
  title?: string;
  /** The body text content for the card */
  description?: string;
}

/**
 * A simple card component used for layout testing and placeholder content.
 */
export const TestCard = ({
  title = 'Test Card Title',
  description = 'This is a short description for the test card component.',
}: TestCardProps) => {
  return (
    <div className="bg-elevation-surface-raised rounded p-4 shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-text-secondary mt-2">{description}</p>
    </div>
  );
};
