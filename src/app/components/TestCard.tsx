import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-8 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    {/* Agent header */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Agent settings"
        className="cursor-pointer text-[color:var(--DarkNeutral1000)]"
      >
        <IoSettingsOutline size={24} />
      </button>
    </div>

    {/* Collapsed summary */}
    <div className="mt-4 flex items-center gap-2 text-[color:var(--DarkNeutral900)]">
      <IoChevronUp size={18} className="shrink-0" />
      <span className="truncate text-base">
        From entire frame to a single component
      </span>
    </div>

    {/* Add New Design */}
    <section className="mt-20">
      <h3 className="flex items-center gap-2 font-primary-bold text-xl">
        <IoChevronUp size={20} className="shrink-0" />
        Add New Design
      </h3>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <label
            htmlFor="testcard-personal-access-token"
            className="font-primary-bold text-base"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            size={20}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="testcard-personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border border-[color:var(--DarkNeutral500)] bg-transparent px-4 py-3 text-sm placeholder:text-[color:var(--DarkNeutral600)]"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <label htmlFor="testcard-design-url" className="font-primary-bold text-base">
            Design URL
          </label>
          <IoInformationCircleOutline
            size={20}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="testcard-design-url"
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded border border-[color:var(--DarkNeutral500)] bg-transparent px-4 py-3 text-sm placeholder:text-[color:var(--DarkNeutral600)]"
        />
      </div>

      <div className="mt-6 flex gap-6">
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-md bg-[var(--Orange800)] px-6 py-3 text-base"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-md bg-[var(--Orange800)] px-6 py-3 text-base"
        >
          Prepare
        </button>
      </div>
    </section>

    {/* Recent Breakdowns */}
    <h3 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
