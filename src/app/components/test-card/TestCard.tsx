export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-raised rounded shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] p-4"
    >
      <h3 className="font-primary-black text-xl text-font mb-2">
        Test Card Title
      </h3>
      <p className="font-primary-light text-font-subtle leading-6">
        This is a short description of the test card component.
      </p>
    </div>
  );
};
