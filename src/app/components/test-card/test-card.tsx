export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg bg-elevation-surface p-6 shadow-md"
    >
      <h1 className="mb-4 font-primary-black text-2xl text-font">
        Test Card Title
      </h1>
      <p className="font-primary-light text-base text-font-subtle">
        This is a simple card component displaying a title and description text
        with consistent styling.
      </p>
    </div>
  );
};
