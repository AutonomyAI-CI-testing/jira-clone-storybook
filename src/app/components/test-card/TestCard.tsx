export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-lg border border-border bg-elevation-surface-raised p-6 shadow-md"
    >
      <h2 className="mb-2 font-primary-black text-xl text-font">
        Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtlest">
        This is a short description providing context for the card content.
      </p>
    </div>
  );
};
