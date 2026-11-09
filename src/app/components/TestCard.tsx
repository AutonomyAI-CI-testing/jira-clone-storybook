import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

/**
 * Static reproduction of a Figma frame ("UI magician Agent"), built as a smoke
 * test for the design-to-component flow. Self-contained and prop-less: the
 * frame's chevrons, icons and buttons are not interactive, so nothing here
 * holds state.
 *
 * The frame's palette has no semantic role in this design system, so its
 * colours are written as arbitrary values against the raw palette declared
 * once in `app.css` — those resolve identically under every theme.
 */
export const TestCard = (): JSX.Element => {
  const labelClass = "text-[11.5px] leading-[13.92px] text-[var(--Neutral400)]";
  const inputClass =
    "mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] leading-[13.92px] text-[var(--Neutral400)] placeholder:text-[var(--Neutral500)]";
  const buttonClass =
    "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--Neutral600)]";

  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral-100)] px-5 pb-16 pt-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          UI magician Agent
        </h2>
        <MdOutlineSettings
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={12}
          className="text-[var(--Neutral500)]"
          aria-hidden="true"
        />
        <span className="text-[11.5px] leading-[13.92px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[18px] h-px w-full bg-[var(--DarkNeutral350)]" />

      <div className="mt-[58px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
        <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          Add New Design
        </h3>
      </div>

      <div className="mt-7 flex items-center gap-5">
        <label htmlFor="testElem-access-token" className={labelClass}>
          Personal Access Token
        </label>
        <MdInfoOutline
          size={15}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testElem-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />

      <div className="mt-3 flex items-center gap-5">
        <label htmlFor="testElem-design-url" className={labelClass}>
          Design URL
        </label>
        <MdInfoOutline
          size={15}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testElem-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />

      <div className="ml-6 mt-[22px] flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
