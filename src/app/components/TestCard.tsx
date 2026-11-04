import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Self-contained by design: no props, no state, no behaviour. The panel's
 * near-black ground and burnt-orange buttons have no semantic role in this
 * design system, so those two colours reach the raw palette through arbitrary
 * values; everything else uses the shared utilities.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 pb-16 pt-10 font-primary"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <HiOutlineCog className="h-6 w-6 shrink-0 text-[color:var(--DarkNeutral900)]" />
    </header>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp className="h-4 w-4 shrink-0 text-[color:var(--DarkNeutral900)]" />
      <span className="truncate text-base text-[color:var(--DarkNeutral900)]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <HiChevronUp className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral1100)]" />
      <h2 className="font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <label
      htmlFor="test-card-personal-access-token"
      className="mt-14 flex items-center gap-2 text-base text-[color:var(--DarkNeutral900)]"
    >
      Personal Access Token
      <HiOutlineInformationCircle className="h-5 w-5 shrink-0" />
    </label>
    <input
      id="test-card-personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      className="mt-6 w-full rounded-md border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] p-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral900)]"
    />

    <label
      htmlFor="test-card-design-url"
      className="mt-6 flex items-center gap-2 text-base text-[color:var(--DarkNeutral900)]"
    >
      Design URL
      <HiOutlineInformationCircle className="h-5 w-5 shrink-0" />
    </label>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-6 w-full rounded-md border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] p-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral900)]"
    />

    <div className="mt-12 flex justify-center gap-8">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[var(--Orange800)] py-4 text-xl text-[color:var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[var(--Orange800)] py-4 text-xl text-[color:var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
