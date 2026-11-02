/**
 * Smoke-test component built from a Figma frame ("UI magician Agent").
 * Self-contained: no props, no state, no side effects.
 * The `dark` class pins the surface to the frame's palette.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface-sunken px-10 py-8 text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font-subtle outline outline-2 outline-transparent hover:outline-border-brand"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="min-w-0 truncate font-primary text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h3 className="font-primary-bold text-lg">Add New Design</h3>
        </div>

        <Field
          className="mt-12"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          className="mt-8"
          label="Design URL"
          placeholder="https://www.figma.com/file:"
        />

        <div className="mt-16 flex gap-6">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      <h3 className="mt-20 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="mb-3 flex items-center gap-3">
      <span className="font-primary text-base text-font">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md bg-background-input px-4 py-3 font-primary text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[#8b3d22] px-10 py-5 font-primary text-lg text-font outline outline-2 outline-transparent hover:bg-[#7a3419] active:bg-[#6b2d15]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-font-subtle"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-font-subtle"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
