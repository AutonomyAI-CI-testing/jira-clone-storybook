import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Colour comes from the raw palette steps declared in src/app/styles/app.css
 * rather than the semantic tokens: this panel is intrinsically dark, and the
 * semantic tokens resolve to light values under the default theme.
 */
const PANEL = "bg-[var(--DarkNeutral100)]";
const TEXT = "text-[var(--DarkNeutral1000)]";
const MUTED = "text-[var(--Neutral500)]";

const FIELD =
  "mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-4 py-3 text-sm outline-none placeholder:text-[var(--Neutral500)]";

const BUTTON =
  "rounded-lg bg-[var(--Orange800)] px-8 py-3 text-base transition-opacity hover:opacity-90 active:opacity-80";

const LABEL = "font-primary text-sm";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={`w-[508px] rounded-md ${PANEL} p-8 font-primary ${TEXT}`}
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className={`flex items-center justify-center transition-opacity hover:opacity-80 ${TEXT}`}
      >
        <FiSettings size={24} />
      </button>
    </div>

    {/* Collapsed caption */}
    <div className={`mt-4 flex items-center gap-2 ${MUTED}`}>
      <FiChevronUp size={16} />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={22} />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-token" className={LABEL}>
          Personal Access Token
        </label>
        <FiInfo size={18} aria-hidden="true" className={MUTED} />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={FIELD}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-url" className={LABEL}>
          Design URL
        </label>
        <FiInfo size={18} aria-hidden="true" className={MUTED} />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={FIELD}
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex items-center gap-4">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
