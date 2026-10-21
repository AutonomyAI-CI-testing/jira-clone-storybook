export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded bg-elevation-surface-raised p-3 text-font shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-brand-bold font-primary text-xs text-font-inverse">
          AL
        </div>
        <div className="flex flex-col">
          <span className="font-primary text-sm">Alex Lee</span>
          <span className="font-primary-light text-2xs text-font-subtle">
            Product Designer
          </span>
        </div>
      </div>

      <h2 className="mt-3 font-primary-black text-2xl">Test card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        A self-contained card rendered as a single component. Layout, colour and
        type are approximated on purpose.
      </p>

      <div className="mt-3 flex items-center gap-2">
        <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary text-2xs text-font-brand">
          In progress
        </span>
        <span className="rounded bg-background-success px-2 py-1 font-primary text-2xs text-font-success">
          On track
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <span className="font-primary-light text-2xs text-font-subtlest">
          Updated today
        </span>
        <span className="font-primary-light text-2xs text-font-subtlest">
          #TC-1
        </span>
      </div>
    </div>
  );
};
