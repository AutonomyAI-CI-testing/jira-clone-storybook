export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-80 flex-col gap-3 rounded-md border border-border bg-elevation-surface p-4 shadow-sm"
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-col gap-1">
        <h2 className="font-primary-bold text-base text-font">Test Card</h2>
        <p className="font-primary-light text-xs text-font-subtle">
          Smoke-test component
        </p>
      </div>
      <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary text-2xs text-font-brand">
        Test
      </span>
    </div>
    <p className="font-primary text-sm text-font-subtle">
      A self-contained card used to check that a brand-new component renders
      end to end. It takes no props, so everything you see here is fixed inside
      the component.
    </p>
    <div className="flex items-center justify-between border-t border-border pt-3">
      <span className="font-primary-light text-2xs text-font-subtlest">
        No props
      </span>
      <span className="rounded bg-background-brand-bold px-3 py-1 font-primary text-xs text-font-inverse">
        OK
      </span>
    </div>
  </div>
);
