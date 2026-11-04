/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * supplied Figma frame. Smoke-test scope: static markup only — no props, no
 * state, no data.
 *
 * The `dark` class is pinned on the root so the panel renders as the design
 * does (a dark surface) whatever theme the app itself is in. Pinning is the
 * sanctioned exception for a deliberately fixed surface, so `text-font` is
 * declared on the same element that carries `dark` — an inherited colour would
 * not re-resolve inside the pinned subtree.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 pt-9 pb-32 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-font"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-2xl text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-36 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-14">
        <Field
          id="testElem-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-10">
        <Field
          id="testElem-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-14 flex items-center gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <>
    <div className="flex items-center gap-5">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-5 w-full rounded-md border border-border-bold bg-background-input px-5 py-4 text-lg text-font placeholder:text-font-subtlest"
    />
  </>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="cursor-pointer rounded-md bg-[var(--Orange800)] px-9 py-5 text-lg text-font"
  >
    {children}
  </button>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" />
    <path d="M12 8h.01" />
  </svg>
);
