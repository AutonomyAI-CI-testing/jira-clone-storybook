/**
 * A static, self-contained reproduction of the "UI magician Agent" panel from
 * the referenced Figma frame.
 *
 * Smoke test only: it takes no props, holds no state and nothing in the app
 * renders it. Spacing and type are approximated from the frame's extracted
 * style guide; colours go through the repo's semantic tokens so the card
 * follows the active theme.
 */

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 7L6 1.5L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.75V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
  </svg>
);

const FIELDS = [
  {
    id: "testElem-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
] as const;

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-elevation-surface-sunken p-5"
  >
    <div className="flex items-start justify-between gap-3">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <span className="text-icon-subtle">
        <GearIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtlest">
      <ChevronUp width={8} height={5} />
      <span className="font-primary-light text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2 text-font">
      <ChevronUp width={12} height={8} />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <div className="mt-6">
      {FIELDS.map((field) => (
        <div key={field.id} className="mt-3 first:mt-0">
          <div className="flex items-center gap-2 text-font-subtle">
            <label htmlFor={field.id} className="font-primary-light text-2xs">
              {field.label}
            </label>
            <InfoIcon />
          </div>
          <input
            id={field.id}
            readOnly
            placeholder={field.placeholder}
            className="mt-3 h-9 w-full rounded border border-border-bold bg-elevation-surface-overlay px-2 font-primary-light text-2xs text-font placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <button
        type="button"
        className="flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h3>
  </div>
);
