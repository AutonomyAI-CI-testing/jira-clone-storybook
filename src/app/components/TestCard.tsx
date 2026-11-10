/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * (Test Page - Simple, node 2:2). Self-contained: no props, no state.
 *
 * Lives under `src/app/` on purpose — `tailwind.config.js` only scans
 * `./src/app/**`, so a styled component outside it compiles to nothing.
 *
 * The frame is a fixed dark surface, so the raw palette variables are named
 * directly (they are declared on `:root` and do not shift with the active
 * theme). Stock Tailwind colours are unusable here: `theme.colors` is a full
 * override, so `bg-neutral-900` and friends produce no CSS at all.
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-7 w-7 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="h-7 w-7 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[22px] w-[22px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldInputClassName =
  "mt-4 h-[70px] w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-6 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-[var(--DarkNeutral1000)]">
    <span className="text-lg">{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pt-10 pb-32 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[var(--DarkNeutral1000)]">
      <ChevronUpIcon />
      <span className="max-w-[320px] truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-8">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        className={fieldInputClassName}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    <div className="mt-6">
      <FieldLabel>Design URL</FieldLabel>
      <input
        className={fieldInputClassName}
        placeholder="https://www.figma.com/file/:"
        type="text"
      />
    </div>

    <div className="mt-10 flex justify-end gap-9">
      <button
        className="h-[66px] w-[170px] rounded-md bg-[var(--Orange700)] text-lg text-[var(--Orange300)]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[66px] w-[170px] rounded-md bg-[var(--Orange700)] text-lg text-[var(--Orange300)]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-xl text-[var(--DarkNeutral700)]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
