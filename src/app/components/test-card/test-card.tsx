export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full flex-col gap-4 rounded-lg border border-border-neutral bg-background-neutral p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-xl text-font">Test Card</h2>
      <p className="font-primary-light leading-6 text-font-subtle">
        This is a test card component that displays a title heading and a short
        description paragraph in a self-contained card format.
      </p>
    </div>
  );
};
