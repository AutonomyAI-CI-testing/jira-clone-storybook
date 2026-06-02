export const TestCard = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 rounded border border-border-bold bg-background-neutral p-4">
      <h2 className="font-primary-black text-2xl text-font-brand">
        Test Card Title
      </h2>
      <p className="font-primary-light text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
