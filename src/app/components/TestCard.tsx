/**
 * A simple card component demonstrating proper typography, spacing, and design system usage.
 * Used for testing and reference purposes in the component library.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div>
      <div className="rounded-lg border border-border bg-elevation-surface p-6 shadow-sm">
        <h2 className="font-primary-bold text-2xl text-font">Test Card</h2>
        <p className="mt-3 font-primary-light text-base text-font-subtle">
          A simple card component for testing and demonstration purposes with
          proper spacing and typography.
        </p>
      </div>
    </div>
  );
};
