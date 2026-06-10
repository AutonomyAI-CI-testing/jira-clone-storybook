/**
 * TestCard component for displaying sample content.
 * Uses design tokens for consistent elevation, typography, and colors.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md bg-elevation-surface-raised p-6 shadow-md">
      <h2 className="mb-2 font-primary-bold text-xl text-font">
        Sample Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description providing some context about this card. It
        uses the project&apos;s Tailwind design tokens for consistent styling.
      </p>
    </div>
  );
};