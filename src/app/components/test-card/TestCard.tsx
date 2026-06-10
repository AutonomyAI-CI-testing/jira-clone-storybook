/**
 * A self-contained card component for demonstration and testing.
 * Uses semantic tokens for elevation, typography, and spacing.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    // bg-elevation-surface-raised and shadow-sm create the card's perceived depth
    className="w-[320px] rounded bg-elevation-surface-raised p-4 shadow-sm"
  >
    <h2 className="text-lg text-font">Card Title</h2>
    <p className="mt-1 font-primary-light text-sm text-font-subtle">
      This is a short description for the test card component.
    </p>
  </div>
);
