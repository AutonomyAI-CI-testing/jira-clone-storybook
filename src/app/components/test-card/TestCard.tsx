/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: it takes no props, holds no state, and is wired into no
 * route. The two fields and two buttons are presentational and do nothing.
 *
 * The panel is a fixed dark surface in the design, so it is painted with the
 * raw DarkNeutral / Neutral / Red ramps declared in `app.css` rather than the
 * semantic `--color-*` tokens — those flip with the active theme, which would
 * turn this dark panel light in the app's default theme.
 */

const ICON_BASE = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

const GearIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} strokeWidth={2} className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary text-[22px] leading-7 text-[color:var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <InfoIcon className="h-7 w-7 text-[color:var(--DarkNeutral800)]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-16 w-full rounded border-2 border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral100)] px-6 text-[20px] text-[color:var(--Neutral200)] outline-none placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[color:var(--DarkNeutral0)] p-10 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-[28px] leading-9 text-[color:var(--Neutral200)]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[color:var(--Neutral200)]"
      >
        <GearIcon className="h-8 w-8" />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[color:var(--DarkNeutral800)]">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <span className="truncate text-[22px] leading-7">
        From entire frame to a single component
      </span>
    </div>

    <div className="h-[168px]" aria-hidden="true" />

    <div className="flex items-center gap-2 text-[color:var(--Neutral200)]">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h3 className="font-primary-black text-[28px] leading-9">Add New Design</h3>
    </div>

    <div className="mt-11 space-y-8">
      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-11 flex justify-center gap-9">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[76px] w-[168px] rounded-lg bg-[color:var(--Red800)] font-primary-bold text-[24px] text-[color:var(--Neutral200)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-black text-[28px] leading-9 text-[color:var(--Neutral200)]">
      Recent Breakdowns
    </h3>
  </div>
);
