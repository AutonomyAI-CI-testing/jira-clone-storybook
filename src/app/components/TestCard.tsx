import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col bg-[var(--DarkNeutral100)] px-8 py-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Agent settings"
        className="rounded text-[var(--DarkNeutral900)] hover:text-[var(--DarkNeutral1100)]"
      >
        <FiSettings size={26} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral600)]">
      <FiChevronUp size={22} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={28} className="shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <label
      htmlFor="testElem-token"
      className="mt-10 flex items-center gap-2 text-lg text-[var(--DarkNeutral800)]"
    >
      Personal Access Token
      <FiInfo size={20} className="shrink-0 text-[var(--DarkNeutral600)]" />
    </label>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      className="mt-4 w-full rounded border border-[color:var(--DarkNeutral400)] bg-transparent px-4 py-3 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
    />

    <label
      htmlFor="testElem-url"
      className="mt-8 flex items-center gap-2 text-lg text-[var(--DarkNeutral800)]"
    >
      Design URL
      <FiInfo size={20} className="shrink-0 text-[var(--DarkNeutral600)]" />
    </label>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-4 w-full rounded border border-[color:var(--DarkNeutral400)] bg-transparent px-4 py-3 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
    />

    <div className="mt-12 flex gap-8">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[52px] w-[170px] rounded bg-[var(--Orange800)] font-primary text-base text-[var(--DarkNeutral1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
