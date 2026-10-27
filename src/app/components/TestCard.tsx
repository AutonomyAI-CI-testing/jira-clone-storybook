/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the attached Figma frame.
 *
 * Smoke-test component: it takes no props, holds no state and is wired into no
 * screen. Colours are drawn from the repo's declared palette variables rather
 * than its semantic aliases, because the frame's dark-and-rust palette has no
 * semantic equivalent — so this card deliberately does not follow the app's
 * themes.
 */

const SettingsIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const FIELD_LABEL_CLASS = "text-[20px] text-[var(--DarkNeutral1000)]";

const FIELD_INPUT_CLASS =
  "mt-7 h-[65px] w-full rounded-[2px] border-2 border-[var(--DarkNeutral800)] " +
  "bg-[var(--DarkNeutral250)] pl-10 text-[20px] text-[var(--DarkNeutral1000)] " +
  "placeholder:text-[var(--DarkNeutral600)]";

const ACTION_BUTTON_CLASS =
  "h-[68px] w-[170px] rounded-lg bg-[var(--Orange800)] text-[22px] " +
  "text-[var(--DarkNeutral900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-32 pt-11 font-primary text-[var(--DarkNeutral1000)]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none">
        UI magician Agent
      </h1>
      <SettingsIcon className="h-[30px] w-[30px] shrink-0" />
    </div>

    {/* Collapsible row */}
    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="h-[22px] w-[22px] shrink-0" />
      <span className="min-w-0 truncate text-[18px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon className="h-[26px] w-[26px] shrink-0" />
      <h2 className="font-primary-bold text-[24px] leading-none">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-16">
      <div className="flex items-center gap-3">
        <span className={FIELD_LABEL_CLASS}>Personal Access Token</span>
        <InfoIcon className="h-[28px] w-[28px] shrink-0" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    {/* Design URL */}
    <div className="mt-10">
      <div className="flex items-center gap-3">
        <span className={FIELD_LABEL_CLASS}>Design URL</span>
        <InfoIcon className="h-[28px] w-[28px] shrink-0" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    {/* Actions */}
    <div className="mt-12 flex justify-end gap-[34px]">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    {/* Section header */}
    <h2 className="mt-20 font-primary-bold text-[22px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
}
