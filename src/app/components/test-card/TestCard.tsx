/**
 * A simple card component that displays a title and description text.
 * Styled with a light background and subtle shadow for elevation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[400px] rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="font-primary-black text-lg text-font">
        Card Title
      </h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a simple card component with a title heading and a short
        description paragraph.
      </p>
    </div>
  );
};
