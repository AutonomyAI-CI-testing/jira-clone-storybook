import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" Figma frame (254x508 panel).
 * The frame is a dark surface, so the app's semantic colour roles are not used
 * here: they resolve to the light theme and would paint dark ink on black.
 * Colours are named through the raw palette variables declared in
 * `src/app/styles/app.css` instead.
 */

const INPUT_CLASS =
  "h-9 w-[211px] rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-[19px] text-2xs text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]";

const FIELD_LABEL_CLASS =
  "flex items-center gap-2 font-primary-bold text-2xs text-[var(--DarkNeutral700)]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral800)]";

const INFO_ICON_CLASS = "shrink-0 text-[var(--DarkNeutral700)]";

const CARET_ICON_CLASS = "shrink-0 text-[var(--DarkNeutral800)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-5 font-primary text-2xs"
    >
      <div className="-mx-5 h-[9px] shrink-0 bg-[var(--DarkNeutral0)]" />

      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center text-[var(--DarkNeutral900)]"
        >
          <MdOutlineSettings size={16} />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <MdKeyboardArrowUp size={12} className={CARET_ICON_CLASS} />
        <span className="truncate text-[var(--DarkNeutral700)]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <MdKeyboardArrowUp size={16} className={CARET_ICON_CLASS} />
        <span className="font-primary-bold text-xs text-[var(--DarkNeutral800)]">
          Add New Design
        </span>
      </div>

      <label
        htmlFor="test-card-token"
        className={`mt-[28px] ${FIELD_LABEL_CLASS}`}
      >
        Personal Access Token
        <MdInfoOutline size={15} aria-hidden className={INFO_ICON_CLASS} />
      </label>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-[12px] ${INPUT_CLASS}`}
      />

      <label htmlFor="test-card-url" className={`mt-[11px] ${FIELD_LABEL_CLASS}`}>
        Design URL
        <MdInfoOutline size={15} aria-hidden className={INFO_ICON_CLASS} />
      </label>
      <input
        id="test-card-url"
        placeholder="https://www.figma.com/file/:"
        className={`mt-[11px] ${INPUT_CLASS}`}
      />

      <div className="ml-6 mt-[22px] flex gap-[17px]">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <p className="mt-[47px] font-primary-bold text-xs text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </p>
    </div>
  );
};
