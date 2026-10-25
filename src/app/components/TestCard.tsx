/**
 * A static, self-contained recreation of the attached Figma settings panel.
 *
 * Smoke test only: it takes no props, holds no state, and its inputs and buttons
 * are inert. Colours and type come from the design system's semantic tokens, so
 * the card follows whichever theme it is rendered in.
 */

const Icon = ({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = (): JSX.Element => (
  <Icon className="h-6 w-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = (): JSX.Element => (
  <Icon>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = (): JSX.Element => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </Icon>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer rounded p-1 text-font-subtle"
      >
        <GearIcon />
      </button>
    </header>

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary-light">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-28 flex flex-col gap-8">
      <h3 className="flex items-center gap-2 font-primary-bold text-xl">
        <ChevronUpIcon />
        Add New Design
      </h3>

      <div className="flex flex-col gap-3">
        <label htmlFor="access-token" className="flex items-center gap-2">
          Personal Access Token
          <span className="text-font-subtle">
            <InfoIcon />
          </span>
        </label>
        <input
          id="access-token"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxx"
          className="rounded border border-border-bold bg-background-input p-4 text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="design-url" className="flex items-center gap-2">
          Design URL
          <span className="text-font-subtle">
            <InfoIcon />
          </span>
        </label>
        <input
          id="design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="rounded border border-border-bold bg-background-input p-4 placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex gap-5">
        {/* The frame's rust fill has no token in this system, so the fill is a
            literal and the label stays white in every theme. */}
        <button
          type="button"
          className="cursor-pointer rounded-md bg-[#a03d19] px-8 py-3.5 text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md bg-[#a03d19] px-8 py-3.5 text-white"
        >
          Prepare
        </button>
      </div>
    </section>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
