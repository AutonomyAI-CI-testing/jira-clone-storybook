export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[400px] flex-col gap-3 rounded-md bg-elevation-surface-raised p-4 text-font shadow-sm"
    >
      <h2 className="font-primary-bold text-lg leading-6">Test card</h2>
      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        Static placeholder content, used to verify that a component can be
        authored and rendered in the preview.
      </p>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="rounded bg-background-neutral px-2 py-1 font-primary-bold text-2xs text-font-subtle">
          In progress
        </span>
        <button
          type="button"
          className="cursor-pointer rounded bg-background-brand-bold px-3 py-2 font-primary text-2xs text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Open
        </button>
      </div>
    </div>
  );
};
