import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke test for the Figma -> component path.
 *
 * The frame is a fixed dark panel, so every colour comes from the raw palette
 * (declared in src/app/styles/app.css) through an arbitrary value rather than a
 * semantic `--color-*` role: the raw palette is theme-invariant, so the card
 * reads the same under all five themes without a `dark:` variant.
 */
const fieldClass =
  "mt-3 w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-4 py-4 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral600)]";

const buttonClass =
  "w-[170px] rounded-lg bg-[var(--Orange800)] px-4 py-5 font-primary-bold text-base text-[color:var(--DarkNeutral1000)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] p-10 font-primary text-[color:var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <HiOutlineCog
        size={22}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp size={18} className="shrink-0" />
      <span className="truncate text-sm text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <HiChevronUp size={20} className="shrink-0" />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <label htmlFor="test-card-token" className="mt-16 flex items-center gap-3">
      <span className="text-base">Personal Access Token</span>
      <HiOutlineInformationCircle size={20} className="shrink-0" />
    </label>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={fieldClass}
    />

    <label htmlFor="test-card-url" className="mt-8 flex items-center gap-3">
      <span className="text-base">Design URL</span>
      <HiOutlineInformationCircle size={20} className="shrink-0" />
    </label>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      className={fieldClass}
    />

    <div className="mt-12 flex gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
