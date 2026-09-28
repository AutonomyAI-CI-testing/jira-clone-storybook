export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[320px] rounded-lg border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-bold text-lg text-font">Test card</h2>
        <p className="mt-1 font-primary-light text-sm text-font-subtle">
          This is a self-contained smoke-test card rendered with Tailwind
          utility classes.
        </p>
      </div>
    </div>
  );
};
