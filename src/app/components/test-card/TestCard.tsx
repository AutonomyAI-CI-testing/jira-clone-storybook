export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-[3px] bg-elevation-surface p-6 shadow-sm">
      <h2 className="mb-2 font-primary-bold text-xl text-font">Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description for the test card.
      </p>
    </div>
  );
};
