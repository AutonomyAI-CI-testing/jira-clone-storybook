export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] max-w-full rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <div className="flex flex-col">
        <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          A small smoke-test card rendered from a single component file.
        </p>
        <button
          type="button"
          className="mt-4 rounded bg-background-brand-bold px-4 py-2 font-primary text-sm text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Action
        </button>
      </div>
    </div>
  );
};
