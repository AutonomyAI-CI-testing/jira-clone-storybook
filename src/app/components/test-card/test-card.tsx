export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded-md bg-elevation-surface-overlay p-6 shadow-md">
      <h2 className="font-primary-black text-2xl">Card Title</h2>
      <p className="mt-3 font-primary-light leading-6 text-font">
        This is a simple card component that displays a title heading and a
        descriptive paragraph.
      </p>
    </div>
  );
};
