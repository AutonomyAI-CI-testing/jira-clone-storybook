import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * A standalone reproduction of the "UI magician Agent" panel from the supplied
 * Figma frame. Self-contained on purpose: it takes no props and is not wired
 * into the app, so it can be rendered on its own as a smoke test.
 *
 * The panel keeps its own dark surface in every app theme, so it binds to the
 * raw palette custom properties from `styles/app.css` rather than the
 * theme-switching semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral0)] p-5 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between gap-2">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog size={26} className="shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp size={16} className="shrink-0" />
      <span className="truncate text-sm text-[var(--DarkNeutral900)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp size={20} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2 border-b border-[var(--DarkNeutral400)] pb-2">
        <label
          htmlFor="test-card-token"
          className="text-sm text-[var(--DarkNeutral900)]"
        >
          Personal Access Token
        </label>
        <HiOutlineInformationCircle size={18} className="shrink-0" />
      </div>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-3 py-3 text-sm text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-2 border-b border-[var(--DarkNeutral400)] pb-2">
        <label
          htmlFor="test-card-url"
          className="text-sm text-[var(--DarkNeutral900)]"
        >
          Design URL
        </label>
        <HiOutlineInformationCircle size={18} className="shrink-0" />
      </div>
      <input
        id="test-card-url"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-3 py-3 text-sm text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-6 grid grid-cols-2 gap-4">
      <button
        type="button"
        className="rounded-md bg-[var(--Orange700)] py-3 font-primary-bold text-sm text-[var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-md bg-[var(--Orange700)] py-3 font-primary-bold text-sm text-[var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
