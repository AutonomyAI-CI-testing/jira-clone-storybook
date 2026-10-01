/**
 * TestCard — a self-contained, static card rendering a standalone design mock
 * (a dark "UI magician Agent" panel). It takes no props, holds no state, is
 * exported from no barrel and is imported by nothing; its root element carries
 * `id="testElem"`.
 *
 * Colours are the repo's dark-neutral ramp (`--DarkNeutral*`, declared in
 * `src/app/styles/app.css`) rather than the semantic `bg-elevation-*` /
 * `text-font-*` tokens: those are theme-parameterised, so they would render this
 * intentionally dark panel in light-mode colours. The single literal is the
 * button fill, which has no close counterpart in the ramp.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full max-w-[508px] flex-col gap-10 bg-[var(--DarkNeutral0)] p-5 font-primary text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <span aria-hidden className="text-lg text-[var(--DarkNeutral700)]">
          ⚙
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span aria-hidden className="text-[var(--DarkNeutral700)]">
          ⌃
        </span>
        <span className="truncate text-sm text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span aria-hidden className="text-[var(--DarkNeutral700)]">
          ⌃
        </span>
        <h2 className="font-primary-bold text-lg text-[var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="h-[52px] w-full rounded-[2px] border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-3 text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel>Design URL</FieldLabel>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="h-[52px] w-full rounded-[2px] border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-3 text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
        />
      </div>

      <div className="flex gap-3">
        <Button>Awesome</Button>
        <Button>Prepare</Button>
      </div>

      <h2 className="mt-auto font-primary-bold text-lg text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

/** Field label with the mock's small circled "i" affordance. */
const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-sm font-primary-bold text-[var(--DarkNeutral1000)]">
      {children}
    </span>
    <span
      aria-hidden
      className="flex h-4 w-4 items-center justify-center rounded-full border border-[var(--DarkNeutral700)] text-[10px] leading-none text-[var(--DarkNeutral700)]"
    >
      i
    </span>
  </div>
);

/** The mock's rust-filled button. Inert — this card is static. */
const Button = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[60px] w-[140px] rounded-[8px] bg-[#a8431f] text-sm font-primary-bold text-[#f5e6e0]"
  >
    {children}
  </button>
);
