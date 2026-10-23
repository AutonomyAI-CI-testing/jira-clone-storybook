import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test reproduction of a Figma frame: a dark "UI magician Agent" panel
 * with an "Add New Design" form and a "Recent Breakdowns" section.
 *
 * Self-contained by design — no props, no state, no data. Spacing, colour and
 * type are approximations of the frame, using palette values the repo already
 * declares rather than introducing new literals.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral100)] px-7 py-7 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 hover:bg-[var(--DarkNeutral200)]"
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <div className="h-[140px]" aria-hidden="true" />

    <div className="flex items-center gap-3">
      <HiChevronUp size={22} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-7 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-access-token" className="text-base">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          size={20}
          className="shrink-0 text-[var(--DarkNeutral700)]"
        />
      </div>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded border-2 border-[var(--DarkNeutral500)] bg-transparent px-4 py-3 text-base placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-design-url" className="text-base">
          Design URL
        </label>
        <HiOutlineInformationCircle
          size={20}
          className="shrink-0 text-[var(--DarkNeutral700)]"
        />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className="w-full rounded border-2 border-[var(--DarkNeutral500)] bg-transparent px-4 py-3 text-base placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-8 flex gap-8">
      <button
        type="button"
        className="w-[168px] rounded-md bg-[var(--Orange800)] py-4 text-lg text-[var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[168px] rounded-md bg-[var(--Orange800)] py-4 text-lg text-[var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[100px] font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
