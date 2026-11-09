import { HiOutlineChevronUp } from "react-icons/hi";
import { RiInformationLine, RiSettings3Line } from "react-icons/ri";

/**
 * Self-contained reproduction of the "UI magician Agent" panel from Figma.
 * Takes no props and holds no state — a static smoke test of the frame.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] p-10"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-lg text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>
      <RiSettings3Line
        aria-hidden
        size={22}
        className="text-[color:var(--DarkNeutral900)]"
      />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden
        size={20}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
      <span className="truncate font-primary-light text-sm text-[color:var(--DarkNeutral800)]">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-[68px]">
      <h3 className="flex items-center gap-2 font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
        <HiOutlineChevronUp aria-hidden size={22} className="shrink-0" />
        Add New Design
      </h3>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-personal-access-token"
            className="font-primary text-sm text-[color:var(--DarkNeutral900)]"
          >
            Personal Access Token
          </label>
          <RiInformationLine
            aria-hidden
            size={18}
            className="text-[color:var(--DarkNeutral900)]"
          />
        </div>
        <input
          id="testElem-personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mt-1 h-16 w-full rounded border border-border-bold bg-[var(--DarkNeutral100)] px-6 font-primary text-sm text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-design-url"
            className="font-primary text-sm text-[color:var(--DarkNeutral900)]"
          >
            Design URL
          </label>
          <RiInformationLine
            aria-hidden
            size={18}
            className="text-[color:var(--DarkNeutral900)]"
          />
        </div>
        <input
          id="testElem-design-url"
          placeholder="https://www.figma.com/file/"
          className="mt-1 h-16 w-full rounded border border-border-bold bg-[var(--DarkNeutral100)] px-6 font-primary text-sm text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-10 flex justify-center gap-9">
        <button
          type="button"
          className="h-16 w-[168px] rounded-md bg-[var(--Orange800)] font-primary text-base text-[color:var(--DarkNeutral900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-16 w-[168px] rounded-md bg-[var(--Orange800)] font-primary text-base text-[color:var(--DarkNeutral900)]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h3 className="mt-16 font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
