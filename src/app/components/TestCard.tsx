/**
 * TestCard — a static, self-contained reproduction of the attached Figma frame.
 *
 * Smoke test: no props, no state, no interactivity.
 *
 * Two deliberate approximations, both allowed by the request:
 * - Colours use the repo's declared base palette (`--DarkNeutral*`, `--Neutral*`,
 *   `--Orange800`) as the nearest match to the frame's own values.
 * - The frame is set in Inter, which this project does not ship, so the copy uses
 *   the CircularStd families it does.
 */

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.9v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsGear = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const fieldClass =
  "mt-2 h-9 w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[18px] font-primary-bold text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)] focus:outline-none";

const fieldLabelClass =
  "flex items-center gap-2 font-primary-bold text-2xs text-[var(--Neutral500)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 pt-5 font-primary text-sm text-[var(--Neutral400)]"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-sm">UI magician Agent</h2>
      <SettingsGear className="h-4 w-[14px]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-3 flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2" />
      <span className="truncate font-primary-bold text-2xs text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* The frame leaves a large empty gap before the next section */}
    <div className="h-[68px]" aria-hidden="true" />

    {/* Add New Design */}
    <div className="flex items-center gap-[7px]">
      <ChevronUp className="h-2 w-3" />
      <h3 className="font-primary-bold text-sm">Add New Design</h3>
    </div>

    {/* Personal Access Token */}
    <label className="mt-3 flex flex-col">
      <span className={fieldLabelClass}>
        Personal Access Token
        <InfoCircle className="h-[15px] w-[15px]" />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </label>

    {/* Design URL */}
    <label className="mt-3 flex flex-col">
      <span className={fieldLabelClass}>
        Design URL
        <InfoCircle className="h-[15px] w-[15px]" />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </label>

    {/* Actions */}
    <div className="mt-[22px] ml-6 flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral300)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral300)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[71px] font-primary-bold text-sm text-[var(--Neutral400)]">
      Recent Breakdowns
    </h3>
  </div>
);
