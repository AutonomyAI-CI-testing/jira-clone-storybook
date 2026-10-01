export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <article className="flex w-[360px] flex-col gap-4 rounded-md bg-elevation-surface-raised p-6 font-primary text-font outline outline-1 outline-border shadow-sm">
      <header className="flex items-center justify-between gap-3">
        <h3 className="font-primary-bold text-lg text-font">Test Card</h3>
        <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary-light text-2xs uppercase text-font-brand">
          Preview
        </span>
      </header>

      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        A self-contained card, rendered with no props, used to check that a
        design reaches the screen end to end.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded bg-background-neutral px-2 py-1 font-primary-light text-2xs text-font-subtle">
          Design
        </span>
        <span className="rounded bg-background-neutral px-2 py-1 font-primary-light text-2xs text-font-subtle">
          Smoke test
        </span>
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border pt-3">
        <span className="font-primary-light text-2xs text-font-subtlest">
          Updated just now
        </span>
        <span className="rounded-full bg-background-brand-bold px-3 py-1 font-primary-bold text-2xs text-font-inverse">
          Open
        </span>
      </footer>
    </article>
  </div>
);
