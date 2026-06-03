/**
 * TestCard component
 * A simple card component that displays a title and description text.
 * Uses elevation surface styling for visual hierarchy and consistent theming.
 */
export const TestCard = (): JSX.Element => (
  <div className="w-[400px]">
    <div className="rounded bg-elevation-surface-raised shadow-sm p-4">
      <h2 className="text-lg text-font mb-2">Test Card Title</h2>
      <p className="text-sm font-primary-light text-font-subtle">
        This is a short description paragraph for the test card component.
      </p>
    </div>
  </div>
);
