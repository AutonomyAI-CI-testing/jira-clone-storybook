import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" settings panel from the design
 * reference. Self-contained by design: no props, no state, no handlers.
 *
 * The panel's dark ground and rust buttons have no semantic role in the token
 * set, so their colours come from the raw palette through arbitrary values.
 */
const fieldClass =
  "mt-2 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 py-4 text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";
const buttonClass =
  "h-[78px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[var(--DarkNeutral100)] p-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <RiSettings3Line aria-hidden="true" size={24} />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <RiArrowUpSLine aria-hidden="true" size={20} />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <h3 className="mt-32 flex items-center gap-2 font-primary-bold text-lg">
      <RiArrowUpSLine aria-hidden="true" size={20} />
      Add New Design
    </h3>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label className="text-base" htmlFor="testElem-access-token">
          Personal Access Token
        </label>
        <RiInformationLine
          aria-hidden="true"
          className="text-[var(--DarkNeutral600)]"
          size={18}
        />
      </div>
      <input
        className={fieldClass}
        id="testElem-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        readOnly
      />
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-2">
        <label className="text-base" htmlFor="testElem-design-url">
          Design URL
        </label>
        <RiInformationLine
          aria-hidden="true"
          className="text-[var(--DarkNeutral600)]"
          size={18}
        />
      </div>
      <input
        className={fieldClass}
        id="testElem-design-url"
        placeholder="https://www.figma.com/file/"
        readOnly
      />
    </div>

    <div className="mt-8 flex gap-9">
      <button className={buttonClass} type="button">
        Awesome
      </button>
      <button className={buttonClass} type="button">
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);
