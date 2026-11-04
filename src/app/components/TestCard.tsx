export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-elevation-surface-raised p-5 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-background-brand-subtlest" />
        <div>
          <p className="font-primary-bold text-sm text-font">Test card</p>
          <p className="font-primary-light text-2xs text-font-subtlest">
            Smoke test component
          </p>
        </div>
      </div>

      <p className="mb-4 font-primary text-xs text-font-subtle">
        A self-contained card used to check that components render in the
        preview. It takes no props and always shows the same content.
      </p>

      <div className="flex items-center justify-between">
        <span className="rounded bg-background-neutral px-1 py-0.5 font-primary-light text-2xs text-font-subtle">
          No props
        </span>
        <span className="rounded bg-background-brand-bold px-2 py-1 font-primary text-2xs text-font-inverse">
          Ready
        </span>
      </div>
    </div>
  );
};
