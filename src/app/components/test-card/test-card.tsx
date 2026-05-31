export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface p-6"
    >
      <h2 className="font-primary-bold text-2xl text-font">
        Welcome to TestCard
      </h2>
      <p className="mt-3 font-primary text-font-subtle">
        This is a simple card component displaying a title and description
        text. It provides a reusable card UI element for displaying content in
        a structured format.
      </p>
    </div>
  );
};
