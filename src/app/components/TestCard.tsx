import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

// Class strings shared by the two identical fields and the two identical
// buttons, so the card has one definition of each rather than four.
const labelClassName =
  "flex items-center gap-3 text-lg text-[var(--DarkNeutral1100)]";

const fieldClassName =
  "mt-3 w-full rounded border-2 border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-6 py-4 text-lg text-[var(--Neutral0)] placeholder:text-[var(--DarkNeutral600)]";

const buttonClassName =
  "rounded-md bg-[var(--Orange800)] px-10 py-5 text-lg text-[var(--DarkNeutral1000)]";

/**
 * Static reproduction of the "UI magician Agent" Figma frame. Smoke test:
 * self-contained, no props, no state and no interactivity. The frame is
 * unconditionally dark, so it uses the dark ramp primitives rather than the
 * theme-aware semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pt-8 pb-16 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--Neutral0)]">
        UI magician Agent
      </h1>
      <span aria-hidden className="text-[var(--DarkNeutral900)]">
        <FaCog size={26} />
      </span>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <span aria-hidden className="text-[var(--DarkNeutral1000)]">
        <FaChevronUp size={14} />
      </span>
      <span className="font-primary-bold text-lg text-[var(--DarkNeutral1000)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <span aria-hidden className="text-[var(--Neutral0)]">
        <FaChevronUp size={22} />
      </span>
      <h2 className="font-primary-bold text-xl text-[var(--Neutral0)]">
        Add New Design
      </h2>
    </div>

    <label className="mt-12 block">
      <span className={labelClassName}>
        Personal Access Token
        <span aria-hidden className="text-[var(--DarkNeutral900)]">
          <FaInfoCircle size={22} />
        </span>
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={fieldClassName}
      />
    </label>

    <label className="mt-8 block">
      <span className={labelClassName}>
        Design URL
        <span aria-hidden className="text-[var(--DarkNeutral900)]">
          <FaInfoCircle size={22} />
        </span>
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className={fieldClassName}
      />
    </label>

    <div className="mt-14 flex gap-9">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[var(--Neutral0)]">
      Recent Breakdowns
    </h2>
  </div>
);
