export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border bg-elevation-surface-raised p-[20px] shadow-sm"
    >
      <h2 className="mb-2 font-primary-black text-2xl text-font">Test Card</h2>
      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        This is a short description for the Test Card component.
      </p>
    </div>
  );
};
