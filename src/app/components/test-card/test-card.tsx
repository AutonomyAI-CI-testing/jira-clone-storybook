export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h1 className="mb-3 text-2xl font-primary-black text-font">Test Card</h1>
      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        This is a simple test card component displaying static content. It
        demonstrates the project&apos;s component structure, design tokens, and
        styling patterns.
      </p>
    </div>
  );
};
