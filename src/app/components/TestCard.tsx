import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FiSettings
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral400)]"
        size={16}
      />
    </div>

    {/* Collapsed summary */}
    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral500)]"
        size={12}
      />
      <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral400)]"
        size={14}
      />
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center justify-between">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <FiInfo
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        size={15}
      />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-4">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Design URL
      </span>
      <FiInfo
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        size={15}
      />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 font-primary-bold text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
    />

    {/* Actions */}
    <div className="mt-6 flex items-center gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-11 font-primary-bold text-xs text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);
