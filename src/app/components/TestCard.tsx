/**
 * A static, self-contained replica of the "UI magician Agent" panel frame.
 *
 * It takes no props and holds no state: the buttons and the collapsible rows are
 * visual only, because the frame is a picture of a surface rather than working UI.
 * The card is not rendered anywhere in the app — it exists to be shown in isolation.
 *
 * Colours come from the primitives declared at `:root` in `src/app/styles/app.css`
 * (`tailwind.config.js` replaces `theme.colors`, so Tailwind's default palette is not
 * available in this repo), which keeps the card identical in every theme.
 */

const FIELD_CLASS =
  "mt-3 w-full rounded bg-[var(--DarkNeutral250)] px-6 py-5 font-primary-light text-lg text-[var(--DarkNeutral1100)] outline outline-1 outline-[var(--DarkNeutral500)] placeholder:text-[var(--DarkNeutral600)]";

const LABEL_CLASS =
  "flex items-center gap-10 font-primary-bold text-lg text-[var(--DarkNeutral1000)]";

const BUTTON_CLASS =
  "w-[170px] rounded-md bg-[var(--Orange800)] py-5 font-primary-bold text-lg text-[var(--Orange300)]";

const IconWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <span className="shrink-0 text-[var(--DarkNeutral600)]">{children}</span>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10.6 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <IconWrapper>
        <GearIcon />
      </IconWrapper>
    </div>

    <div className="mt-6 flex items-center gap-4 text-[var(--DarkNeutral600)]">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="h-32" />

    <div className="flex items-center gap-4 text-[var(--DarkNeutral1100)]">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-10">
      <label htmlFor="test-card-access-token" className={LABEL_CLASS}>
        Personal Access Token
        <IconWrapper>
          <InfoIcon />
        </IconWrapper>
      </label>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-8">
      <label htmlFor="test-card-design-url" className={LABEL_CLASS}>
        Design URL
        <IconWrapper>
          <InfoIcon />
        </IconWrapper>
      </label>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-14 flex justify-center gap-8">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
