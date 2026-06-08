export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-5 shadow-lg"
    >
      <h2 className="font-primary-black text-2xl text-font">Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description of the card content.
      </p>
    </div>
  );
};
