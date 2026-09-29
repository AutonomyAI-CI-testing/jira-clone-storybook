export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-screen items-center justify-center bg-elevation-surface-sunken p-8 font-primary"
  >
    <div className="w-full max-w-sm rounded bg-elevation-surface-raised p-6 shadow-xs">
      <h2 className="font-primary-bold text-lg text-font">Test card</h2>
      <p className="mt-2 text-xs text-font-subtle">
        A minimal, self-contained card used to check the render pipeline.
      </p>
      <div className="mt-4 flex justify-end">
        <span className="rounded bg-background-brand-bold px-3 py-1 text-2xs text-font-inverse">
          OK
        </span>
      </div>
    </div>
  </div>
);

export default TestCard;
