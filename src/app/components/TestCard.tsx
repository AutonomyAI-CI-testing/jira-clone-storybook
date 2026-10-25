import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static recreation of the "UI magician Agent" Figma panel.
 *
 * Deliberately self-contained: no props, no state, nothing wired into the app.
 * Colours reference the palette variables declared in `styles/app.css` rather
 * than raw hex, so the panel reads the same whatever theme surrounds it.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral-100)] px-5 pb-16 pt-5 font-primary text-2xs text-[var(--Neutral400)]"
  >
    {/* Panel title */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <FaCog aria-hidden size={16} />
    </div>

    {/* Collapsed section row */}
    <div className="mt-4 flex items-center gap-2 text-[var(--Neutral500)]">
      <FaChevronUp aria-hidden className="shrink-0" size={8} />
      <span className="truncate font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-16 flex items-center gap-2">
      <FaChevronUp aria-hidden className="shrink-0" size={12} />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <label htmlFor="test-card-access-token" className="font-primary-bold">
        Personal Access Token
      </label>
      <FaInfoCircle aria-hidden size={14} />
    </div>
    <input
      id="test-card-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-2 font-primary-bold text-2xs text-[var(--Neutral600)] placeholder:text-[var(--Neutral600)]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="test-card-design-url" className="font-primary-bold">
        Design URL
      </label>
      <FaInfoCircle aria-hidden size={14} />
    </div>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-2 font-primary-bold text-2xs text-[var(--Neutral600)] placeholder:text-[var(--Neutral600)]"
    />

    {/* Actions */}
    <div className="mt-5 flex justify-center gap-4">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral0)] hover:bg-[var(--Orange900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral0)] hover:bg-[var(--Orange900)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);
