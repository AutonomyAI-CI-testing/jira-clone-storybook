import { TbChevronUp, TbInfoCircle, TbSettings } from "react-icons/tb";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no data.
 *
 * Note: the frame's rust-orange buttons have no semantic role token in this
 * repo's palette, so the declared `--Orange800` / `--Orange700` variables are
 * used directly.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col gap-5 rounded-md bg-elevation-surface p-8 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded p-1 text-icon-subtle transition-colors hover:bg-background-neutral-hovered hover:text-icon"
      >
        <TbSettings aria-hidden size={20} />
      </button>
    </header>

    <p className="flex items-center gap-2 font-primary-light text-sm text-font-subtlest">
      <TbChevronUp aria-hidden size={16} className="shrink-0" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </p>

    <section className="flex flex-col gap-5 pt-6">
      <h3 className="flex items-center gap-2 font-primary-black text-xl">
        <TbChevronUp aria-hidden size={20} className="shrink-0" />
        Add New Design
      </h3>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="testcard-personal-access-token"
          className="flex items-center gap-2 font-primary-light text-sm text-font-subtle"
        >
          Personal Access Token
          <TbInfoCircle aria-hidden size={14} className="text-icon-subtle" />
        </label>
        <input
          id="testcard-personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-border-input bg-background-input p-3 font-primary text-sm text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="testcard-design-url"
          className="flex items-center gap-2 font-primary-light text-sm text-font-subtle"
        >
          Design URL
          <TbInfoCircle aria-hidden size={14} className="text-icon-subtle" />
        </label>
        <input
          id="testcard-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-md border border-border-input bg-background-input p-3 font-primary text-sm text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2 font-primary text-base text-font-inverse transition-colors hover:bg-[var(--Orange700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2 font-primary text-base text-font-inverse transition-colors hover:bg-[var(--Orange700)]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h3 className="pt-4 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);
