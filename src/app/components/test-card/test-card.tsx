export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-raised shadow-sm rounded p-6 flex flex-col gap-4"
    >
      <h2 className="font-primary-bold text-2xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary text-sm text-font-subtle">
        This is a test card description
      </p>
    </div>
  );
};
