export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h1 className="mb-3 font-primary-black text-2xl text-font">Test Title</h1>
      <p className="font-primary-light leading-6 text-font-subtle">
        This is a test card component displaying a title and description.
      </p>
    </div>
  );
};
