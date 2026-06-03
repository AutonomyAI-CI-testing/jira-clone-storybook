export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="mb-4 font-primary-black text-2xl text-font">
        Test Card
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component displaying static content with a
        title and description. It serves as a reusable card component for
        testing and demonstration purposes within the application.
      </p>
    </div>
  );
};
