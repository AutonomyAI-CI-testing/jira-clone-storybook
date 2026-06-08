export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-black text-xl text-font">
        Test Card Title
      </h2>
      <p className="mt-2 font-primary text-xs text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};