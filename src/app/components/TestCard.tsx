import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card built from a Figma frame. Self-contained: no props, no state,
 * fixed demo content. The frame's dark ground and rust-orange buttons have no
 * matching semantic role in this design system (the brand role is blue), so the
 * raw palette is used through arbitrary values, per the Two-Tier Rule.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] p-10 text-[color:var(--DarkNeutral900)]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center rounded-full p-1 text-[color:var(--DarkNeutral800)] hover:bg-[var(--DarkNeutral250)]"
        >
          <FiSettings size={26} />
        </button>
      </div>

      {/* Collapsed context row */}
      <div className="mt-6 flex items-center gap-2 text-[color:var(--DarkNeutral800)]">
        <FiChevronUp size={20} className="shrink-0" />
        <span className="truncate font-primary text-sm">
          From entire frame to a singl…
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-24 flex items-center gap-2">
        <FiChevronUp size={22} className="shrink-0" />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-12 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-token"
            className="font-primary text-sm text-[color:var(--DarkNeutral800)]"
          >
            Personal Access Token
          </label>
          <span aria-label="More information" role="img">
            <FiInfo size={18} className="text-[color:var(--DarkNeutral800)]" />
          </span>
        </div>
        <input
          id="test-card-token"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="h-[52px] w-full rounded border border-border-bold bg-[var(--DarkNeutral250)] px-4 font-primary text-sm text-[color:var(--DarkNeutral800)]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-url"
            className="font-primary text-sm text-[color:var(--DarkNeutral800)]"
          >
            Design URL
          </label>
          <span aria-label="More information" role="img">
            <FiInfo size={18} className="text-[color:var(--DarkNeutral800)]" />
          </span>
        </div>
        <input
          id="test-card-url"
          readOnly
          value="https://www.figma.com/file/"
          className="h-[52px] w-full rounded border border-border-bold bg-[var(--DarkNeutral250)] px-4 font-primary text-sm text-[color:var(--DarkNeutral800)]"
        />
      </div>

      {/* Actions */}
      <div className="mt-10 flex justify-center gap-8">
        <button
          type="button"
          className="h-[56px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] font-primary text-base text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[56px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] font-primary text-base text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
}
