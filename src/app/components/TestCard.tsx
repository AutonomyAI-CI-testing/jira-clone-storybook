import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the cropped "UI magician Agent" Figma panel.
 *
 * Smoke test only: self-contained, no props, no state, no interaction. Colours
 * name the repo's raw palette variables through arbitrary values because
 * `theme.colors` is a full override in tailwind.config.js, and typography uses
 * the CircularStd families for the same reason.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-black px-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4 text-[color:var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[color:var(--DarkNeutral800)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={10} className="text-[color:var(--DarkNeutral700)]" />
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-2">
      <FiChevronUp size={14} className="text-[color:var(--Neutral400)]" />
      <span className="font-primary-bold text-[13.5px] leading-4 text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-4 flex items-center gap-5">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="text-[color:var(--DarkNeutral800)]" />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[10px] h-9 w-full border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[19px] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-3 flex items-center gap-5">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
        Design URL
      </span>
      <FiInfo size={15} className="text-[color:var(--DarkNeutral800)]" />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[10px] h-[37px] w-full border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-5 font-primary-bold text-[10.5px] text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-5 flex gap-[15px] pl-[23px]">
      <button
        type="button"
        className="h-10 w-[87px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-10 w-[87px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[45px] font-primary-bold text-[13.5px] leading-4 text-[color:var(--DarkNeutral800)]">
      Recent Breakdowns
    </h2>
  </div>
);
