/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel from
 * the attached Figma frame. It takes no props, holds no state and renders fixed
 * content, so it can be dropped anywhere and look the same.
 *
 * The frame's near-black plane and rust-orange actions have no semantic role in
 * this repo's token set (the brand role is blue), so the colours below are raw
 * palette variables used as arbitrary values — the design system's own escape
 * hatch when no role exists. The card pins them, so it reads the same in every
 * theme instead of re-skinning with the active one.
 */

const ChevronUp = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const Info = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-4.5" />
    <path d="M12 8.2h.01" />
  </svg>
);

const Gear = () => (
  <svg
    role="img"
    aria-label="Settings"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const fieldClass =
  "h-[60px] w-full rounded-[2px] border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-5 text-[16px] text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral800)]";

const buttonClass =
  "h-[60px] w-[170px] rounded-[6px] bg-[var(--Orange800)] font-primary text-[17px] text-[color:var(--DarkNeutral900)]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral900)]"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[19px] leading-6 text-[color:var(--DarkNeutral1000)]">
          UI magician Agent
        </h2>
        <Gear />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
        <ChevronUp />
        <span className="text-[15px]">From entire frame to a singl…</span>
      </div>

      {/* The frame leaves a wide empty band here. */}
      <div aria-hidden="true" className="h-[150px]" />

      {/* Section header */}
      <div className="flex items-center gap-3 text-[color:var(--DarkNeutral1000)]">
        <ChevronUp />
        <h3 className="font-primary-bold text-[20px]">Add New Design</h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-12 flex items-center gap-3">
        <label
          htmlFor="test-card-access-token"
          className="text-[15px] text-[color:var(--DarkNeutral900)]"
        >
          Personal Access Token
        </label>
        <Info />
      </div>
      <input
        id="test-card-access-token"
        className={`mt-4 ${fieldClass}`}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL */}
      <div className="mt-8 flex items-center gap-3">
        <label
          htmlFor="test-card-design-url"
          className="text-[15px] text-[color:var(--DarkNeutral900)]"
        >
          Design URL
        </label>
        <Info />
      </div>
      <input
        id="test-card-design-url"
        className={`mt-4 ${fieldClass}`}
        placeholder="https://www.figma.com/file/"
      />

      {/* Actions */}
      <div className="mt-10 flex gap-8 pl-12">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-24 font-primary-bold text-[20px] text-[color:var(--DarkNeutral1000)]">
        Recent Breakdowns
      </h3>
    </div>
  );
}

export default TestCard;
