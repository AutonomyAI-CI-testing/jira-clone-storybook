export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-2 rounded bg-elevation-surface p-4 shadow-sm"
    >
      <h2 className="font-primary-black text-xl text-font">Test Card Title</h2>
      <p className="font-primary text-sm text-font-subtle">
        This is a short description for the test card.
      </p>
    </div>
  );
};
