import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "mt-3 h-12 w-full rounded-md border border-border-bold bg-transparent px-3 font-primary text-sm text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]";

const ACTION_CLASS =
  "h-11 w-[168px] rounded bg-[var(--Orange800)] font-primary text-sm text-[color:var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-10 pt-6 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-lg text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="text-[color:var(--DarkNeutral1100)]"
      >
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <IoChevronUp size={20} className="shrink-0" />
      <span className="truncate text-sm text-[color:var(--DarkNeutral800)]">
        From entire frame to a singl…
      </span>
    </div>

    <section className="mt-32">
      <div className="flex items-center gap-2">
        <IoChevronUp size={20} className="shrink-0" />
        <h2 className="font-primary-black text-lg text-[color:var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="font-primary-bold text-sm text-[color:var(--DarkNeutral1000)]"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            size={18}
            aria-hidden
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASS}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="font-primary-bold text-sm text-[color:var(--DarkNeutral1000)]"
          >
            Design URL
          </label>
          <IoInformationCircleOutline
            size={18}
            aria-hidden
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASS}
        />
      </div>

      <div className="mt-8 flex gap-9 pl-12">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-24 font-primary-black text-lg text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
