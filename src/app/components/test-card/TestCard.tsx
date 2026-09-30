export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-sm rounded border border-border bg-elevation-surface-raised p-4 font-primary text-font shadow-sm"
  >
    <h3 className="font-primary-bold text-base">Test Card</h3>
    <p className="mt-2 text-sm text-font-subtle">
      A small static card rendered to check that a new component makes it all
      the way to the screen.
    </p>
    <footer className="mt-4 flex items-center justify-between border-t border-border pt-3 text-2xs text-font-subtle">
      <span>Test card</span>
      <span>Updated just now</span>
    </footer>
  </div>
);
