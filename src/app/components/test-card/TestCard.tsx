import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const fieldClassName =
  "mt-3 h-9 w-full bg-[var(--DarkNeutral200)] px-2 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]";

const fieldBorderClassName = "border-[color:var(--DarkNeutral800)]";

const buttonClassName =
  "h-9 w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: it accepts no props, holds no state and wires
 * nothing up. It exists as a smoke test of the design-to-code path, so
 * spacing, colour and type are approximations rather than a pixel match.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-16 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FaCog aria-hidden size={16} className="text-[color:var(--Neutral400)]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp
        aria-hidden
        size={8}
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
      <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FaChevronUp
        aria-hidden
        size={10}
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <FaInfoCircle
        aria-hidden
        size={15}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(fieldClassName, fieldBorderClassName, "border")}
    />

    <div className="mt-3 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Design URL
      </span>
      <FaInfoCircle
        aria-hidden
        size={15}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={cx(fieldClassName, fieldBorderClassName, "border-2")}
    />

    <div className="mt-5 flex justify-center gap-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-xs text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </div>
  </div>
);
