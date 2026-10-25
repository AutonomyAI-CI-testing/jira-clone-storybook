import type { ReactNode } from "react";

// Smoke-test component: renders the "UI magician Agent" frame as a static card.
// It is deliberately self-contained (no props, no state, no handlers) and always dark, so it
// styles itself with the palette values the app already declares (the dark-neutral and orange
// ramps) instead of the semantic tokens, whose orange slot is reserved for warning states.

const ICON_SIZE = 16;

const IconBase = ({ children }: { children: ReactNode }): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    width={ICON_SIZE}
    height={ICON_SIZE}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    {children}
  </svg>
);

const GearIcon = (): JSX.Element => (
  <IconBase>
    <circle cx="8" cy="8" r="4.5" />
    <circle cx="8" cy="8" r="1.8" />
    <path d="M8 .8v2.2M8 13v2.2M.8 8h2.2M13 8h2.2M2.9 2.9l1.6 1.6M11.5 11.5l1.6 1.6M13.1 2.9l-1.6 1.6M4.5 11.5l-1.6 1.6" />
  </IconBase>
);

const ChevronUpIcon = (): JSX.Element => (
  <IconBase>
    <path d="M3.5 10.5 8 6l4.5 4.5" />
  </IconBase>
);

const InfoIcon = (): JSX.Element => (
  <IconBase>
    <circle cx="8" cy="8" r="6.2" />
    <path d="M8 7.4v3.9" />
    <path d="M8 5.1h.01" />
  </IconBase>
);

const inputClass =
  "w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-3 py-2 font-primary text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const actionClass =
  "flex-1 rounded bg-[var(--Orange800)] px-3 py-2 font-primary text-sm text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]";

const sectionTitleClass = "font-primary-black text-xl leading-6";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col gap-6 rounded-md bg-[var(--DarkNeutral100)] px-4 py-5 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between gap-2">
      <h1 className={sectionTitleClass}>UI magician Agent</h1>
      <span className="text-[var(--DarkNeutral800)]">
        <GearIcon />
      </span>
    </div>

    <div className="flex flex-col gap-5">
      <div className="flex min-w-0 items-center gap-2 text-[var(--DarkNeutral800)]">
        <ChevronUpIcon />
        <span className="min-w-0 truncate font-primary-light text-sm">
          From entire frame to a single section
        </span>
      </div>
      <hr className="border-t border-[var(--DarkNeutral300)]" />
    </div>

    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className={sectionTitleClass}>Add New Design</h2>
      </div>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary-light text-sm">
          Personal Access Token
          <InfoIcon />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary-light text-sm">
          Design URL
          <InfoIcon />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </label>
    </section>

    <div className="flex items-center gap-3">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <h2 className={sectionTitleClass}>Recent Breakdowns</h2>
  </div>
);
