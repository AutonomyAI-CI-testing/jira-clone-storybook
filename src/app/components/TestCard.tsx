export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded-lg bg-elevation-surface-raised p-6 shadow-sm text-font">
        <h2 className="font-primary-black text-xl">Card Title</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtlest">
          This is a short description of the card content. It provides a
          brief overview of what this card represents.
        </p>
      </div>
    </div>
  );
};
