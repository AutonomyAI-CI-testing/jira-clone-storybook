export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[400px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-black text-lg text-font">
          Test Card Title
        </h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          This is a test card component with a title heading and descriptive
          text. It demonstrates the use of Tailwind CSS color tokens and
          typography utilities from the project&apos;s design system.
        </p>
      </div>
    </div>
  );
};
