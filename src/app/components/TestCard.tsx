import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

const headingClass = "font-primary-bold text-[13.5px] text-[var(--Neutral400)]";

const labelClass =
  "font-primary-bold text-[11.5px] text-[var(--DarkNeutral800)]";

const fieldClass =
  "mt-3 h-9 w-full bg-[var(--DarkNeutral200)] px-2 font-primary-bold text-[11.5px] text-[var(--Neutral700)] outline-none placeholder:text-[var(--Neutral700)]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--Neutral600)] hover:bg-[var(--Orange900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-black px-5 pb-16 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className={headingClass}>UI magician Agent</h2>
      <MdSettings
        aria-label="Open agent settings"
        className="text-[var(--Neutral400)]"
        size={16}
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <MdExpandLess
        aria-hidden="true"
        className="shrink-0 text-[var(--Neutral500)]"
        size={16}
      />
      <span className="truncate font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-2">
      <MdExpandLess
        aria-hidden="true"
        className="shrink-0 text-[var(--Neutral400)]"
        size={16}
      />
      <h3 className={headingClass}>Add New Design</h3>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <label className={labelClass} htmlFor="personal-access-token">
          Personal Access Token
        </label>
        <MdInfoOutline
          aria-hidden="true"
          className="text-[var(--DarkNeutral800)]"
          size={15}
        />
      </div>
      <input
        className={`${fieldClass} border border-[color:var(--DarkNeutral800)]`}
        id="personal-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        readOnly
        type="text"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label className={labelClass} htmlFor="design-url">
          Design URL
        </label>
        <MdInfoOutline
          aria-hidden="true"
          className="text-[var(--DarkNeutral800)]"
          size={15}
        />
      </div>
      <input
        className={`${fieldClass} border-2 border-[color:var(--Neutral500)]`}
        id="design-url"
        placeholder="https://www.figma.com/file/"
        readOnly
        type="text"
      />
    </div>

    <div className="mt-[22px] flex justify-end gap-4">
      <button className={buttonClass} type="button">
        Awesome
      </button>
      <button className={buttonClass} type="button">
        Prepare
      </button>
    </div>

    <h3 className={`${headingClass} mt-[46px]`}>Recent Breakdowns</h3>
  </div>
);
