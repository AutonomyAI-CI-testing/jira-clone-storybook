import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * TestCard
 *
 * A self-contained, static recreation of the "Add New Design" panel from the
 * Figma reference. Takes no props and holds no state — every field is a
 * placeholder, matching the frame.
 *
 * Colours come from the repo's base dark-neutral / orange palette variables
 * rather than the semantic `--color-*` layer: the reference is a fixed dark
 * panel, and the semantic tokens resolve to the current app theme, which would
 * render this light. Do not read that as a precedent for product surfaces.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 pb-14 pt-12"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral1100)]"
      >
        <IoSettingsOutline aria-hidden size={26} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <IoChevronUpOutline
        aria-hidden
        size={18}
        className="shrink-0 text-[var(--DarkNeutral900)]"
      />
      <p className="truncate font-primary-light text-sm text-[var(--DarkNeutral900)]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <IoChevronUpOutline
        aria-hidden
        size={26}
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
      <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <span className="font-primary-bold text-sm text-[var(--DarkNeutral1000)]">
        Personal Access Token
      </span>
      <IoInformationCircleOutline
        aria-hidden
        size={20}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-14 w-full rounded-md border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-5 font-primary-light text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />

    <div className="mt-6 flex items-center gap-2">
      <span className="font-primary-bold text-sm text-[var(--DarkNeutral1000)]">
        Design URL
      </span>
      <IoInformationCircleOutline
        aria-hidden
        size={20}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-14 w-full rounded-md border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-5 font-primary-light text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="h-16 w-[168px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-16 w-[168px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);
