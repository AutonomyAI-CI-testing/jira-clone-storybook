/**
 * TestCard — a self-contained card reproducing the "UI magician Agent" frame
 * from the attached Figma design: header row with a settings icon, a collapsed
 * frame line, the "Add New Design" section with two labelled inputs, two action
 * buttons and a footer heading.
 *
 * It takes no props, holds no state and fetches nothing. Colour comes from the
 * project's semantic tokens under a local `dark` wrapper, so the card keeps the
 * frame's dark appearance whatever theme is active around it.
 */

// The frame's action-button fill is a rust hue with no semantic token to map to,
// so it stays the single literal this component needs; everything else resolves
// through the project's tokens.
const ACTION_BUTTON_CLASS =
  "h-16 w-[168px] rounded-md bg-[#b8471f] text-lg text-white hover:bg-[#a03f1b]";

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-[18px] w-[18px] shrink-0 text-font-subtle"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const DesignField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-16 w-full rounded border border-border-bold bg-elevation-surface-raised px-4 text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface p-10 pb-16 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-neutral"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-10 space-y-6">
      <DesignField
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <DesignField
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex justify-center gap-8">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
