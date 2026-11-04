import { HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

/*
 * Smoke test for the design -> component -> preview loop.
 * Reproduces the "UI magician Agent" panel from the Figma frame. Fixed-look dark surface,
 * so every colour is written explicitly rather than taken from a theme role.
 */
const headingClass =
  "font-primary-black text-xl text-[var(--DarkNeutral1000)]";

const labelClass = "font-primary-bold text-base text-[var(--DarkNeutral1000)]";

const inputClass =
  "w-full rounded border border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-4 py-4 font-primary text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const buttonClass =
  "flex-1 cursor-pointer rounded bg-[var(--Orange800)] px-4 py-4 font-primary-bold text-base text-[var(--DarkNeutral800)]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[400px] flex-col gap-6 rounded bg-[var(--DarkNeutral0)] p-6 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-start justify-between">
        <h1 className={headingClass}>UI magician Agent</h1>
        <MdSettings
          aria-hidden="true"
          size={24}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
        />
      </div>

      <div className="flex items-center gap-2">
        <RiArrowDropUpLine
          aria-hidden="true"
          size={24}
          className="shrink-0 text-[var(--DarkNeutral900)]"
        />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <RiArrowDropUpLine
          aria-hidden="true"
          size={24}
          className="shrink-0 text-[var(--DarkNeutral1000)]"
        />
        <h2 className={headingClass}>Add New Design</h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-token" className={labelClass}>
            Personal Access Token
          </label>
          <HiInformationCircle
            aria-hidden="true"
            size={20}
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className={labelClass}>
            Design URL
          </label>
          <HiInformationCircle
            aria-hidden="true"
            size={20}
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-6 ${headingClass}`}>Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
