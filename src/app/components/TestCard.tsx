import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static replica of the "UI magician Agent" panel from the reference frame.
 * Smoke-test surface only: self-contained, accepts no props and holds no state.
 * The surface is deliberately fixed, so it uses raw palette variables rather than
 * the theme-relative semantic roles.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral-100)] px-5 py-5 text-[color:var(--DarkNeutral800)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <HiOutlineCog
          size={16}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp
          size={10}
          className="shrink-0 text-[color:var(--DarkNeutral500)]"
        />
        <span className="min-w-0 flex-1 truncate text-2xs text-[color:var(--DarkNeutral500)]">
          From entire frame to a single design
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-1.5 pl-1.5">
        <HiChevronUp
          size={12}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
        <span className="font-primary-bold text-xs">Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral700)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2.5 h-9 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--DarkNeutral500)] placeholder:text-[color:var(--DarkNeutral500)]"
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral700)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full rounded border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--DarkNeutral500)] placeholder:text-[color:var(--DarkNeutral500)]"
      />

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          className="h-9 rounded bg-[var(--Orange800)] px-4 font-primary-bold text-2xs text-[color:var(--DarkNeutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 rounded bg-[var(--Orange800)] px-4 font-primary-bold text-2xs text-[color:var(--DarkNeutral600)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-10 font-primary-bold text-xs">Recent Breakdowns</h2>
    </div>
  );
};
