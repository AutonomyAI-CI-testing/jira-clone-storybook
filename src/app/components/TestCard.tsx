/**
 * TestCard — a self-contained rendering of the "UI magician Agent" panel from
 * the Figma frame (508 x 1016, dark surface, ~40px gutter).
 *
 * Smoke test only: no props, no state, no handlers. The fields and buttons are
 * static markup. Layout uses Tailwind utilities on the repo's existing scales;
 * colours resolve through the semantic tokens under the `dark` theme class,
 * with one documented exception below.
 */

/**
 * The frame's rust button fill. The token set has no equivalent (its accent
 * orange is a different, brighter hue), so this is the single literal colour
 * in the component, and it lives here so both buttons share one source.
 */
const ACCENT_FILL = "#a1501d";

const INPUT_CLASS =
  "mt-3 h-14 w-full rounded border border-border-bold bg-background-input px-3 font-primary-light text-lg text-font placeholder:text-font-subtlest";

const FIELD_LABEL_CLASS = "flex items-center gap-2 font-primary text-lg text-font";

const BUTTON_CLASS =
  "h-[72px] w-[170px] rounded-lg font-primary text-xl text-font-subtle";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ size = 20 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" strokeLinecap="round" />
    <path d="M12 8h.01" strokeLinecap="round" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark min-h-[1016px] w-[508px] bg-elevation-surface-sunken p-10"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl text-font">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon size={18} />
      <p className="min-w-0 truncate font-primary text-lg">
        From entire frame to a single component
      </p>
    </div>

    <h3 className="mt-24 flex items-center gap-3 font-primary-black text-2xl text-font">
      <ChevronUpIcon />
      Add New Design
    </h3>

    <label htmlFor="testElem-token" className={`${FIELD_LABEL_CLASS} mt-12`}>
      Personal Access Token
      <InfoIcon />
    </label>
    <input
      id="testElem-token"
      className={INPUT_CLASS}
      placeholder="figd_xxxxxxxxxxxxxxxxx"
    />

    <label htmlFor="testElem-url" className={`${FIELD_LABEL_CLASS} mt-6`}>
      Design URL
      <InfoIcon />
    </label>
    <input
      id="testElem-url"
      className={INPUT_CLASS}
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-center gap-8">
      <button
        type="button"
        style={{ backgroundColor: ACCENT_FILL }}
        className={BUTTON_CLASS}
      >
        Awesome
      </button>
      <button
        type="button"
        style={{ backgroundColor: ACCENT_FILL }}
        className={BUTTON_CLASS}
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-black text-2xl text-font">
      Recent Breakdowns
    </h3>
  </div>
);
