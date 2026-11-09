import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const INPUT_BASE =
  "mt-[10px] w-full bg-[var(--DarkNeutral200)] px-2 text-2xs font-primary-bold text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]";

const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]">
      {children}
    </span>
    <FaInfoCircle
      size={13}
      className="shrink-0 text-[color:var(--DarkNeutral800)]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
  >
    {label}
  </button>
);

/**
 * Static recreation of the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no interactivity.
 */
export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black pb-14 font-primary">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="px-5">
      <div className="flex items-center justify-between pt-[11px]">
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog size={15} className="shrink-0 text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          size={9}
          className="shrink-0 text-[color:var(--Neutral500)]"
        />
        <span className="truncate text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FaChevronUp
          size={12}
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            INPUT_BASE,
            "border border-[color:var(--DarkNeutral800)] py-[10px]"
          )}
        />
      </div>

      <div className="mt-3">
        <FieldLabel>Design URL</FieldLabel>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={cx(
            INPUT_BASE,
            "border-2 border-[color:var(--DarkNeutral800)] py-[9px]"
          )}
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <div className="mt-[47px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
