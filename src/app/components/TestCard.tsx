const INPUT_CLASS =
  "mt-3 w-full rounded border border-border bg-elevation-surface-overlay px-4 py-4 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest";

// The frame's burnt orange has no token in the palette (the nearest steps are
// --Orange700 #b65c02 and --Red700 #ca3521, both visibly different shades), so
// these three values are the component's only deliberate literals.
const ACTION_BUTTON_CLASS =
  "cursor-pointer rounded bg-[#b5451f] px-8 py-3 font-primary text-base text-font hover:bg-[#a03c1b] active:bg-[#8f3517]";

const ICON_BUTTON_CLASS =
  "cursor-pointer rounded text-font-subtle hover:bg-background-neutral-hovered";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label className="font-primary-bold text-sm" htmlFor={id}>
        {label}
      </label>
      <button
        aria-label={`About ${label}`}
        className={ICON_BUTTON_CLASS}
        type="button"
      >
        <InfoIcon />
      </button>
    </div>
    <input className={INPUT_CLASS} id={id} placeholder={placeholder} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="dark w-[508px] bg-elevation-surface p-5 font-primary text-font"
      id="testElem"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <button
          aria-label="Settings"
          className={ICON_BUTTON_CLASS}
          type="button"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <p className="min-w-0 truncate font-primary text-sm">
          From entire frame to a singl...
        </p>
      </div>

      <section className="mt-32">
        <h3 className="flex items-center gap-2 font-primary-bold text-lg">
          <ChevronUpIcon />
          Add New Design
        </h3>

        <div className="mt-6 space-y-4">
          <Field
            id="test-card-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="test-card-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-8 flex gap-4">
          <button className={ACTION_BUTTON_CLASS} type="button">
            Awesome
          </button>
          <button className={ACTION_BUTTON_CLASS} type="button">
            Prepare
          </button>
        </div>
      </section>

      <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
