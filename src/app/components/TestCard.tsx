import type { PropsWithChildren } from "react";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import cx from "classix";

/**
 * Static reproduction of the attached Figma frame. Self-contained smoke test:
 * no props, no state and no data — it only draws what the design shows.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black pb-[62px] font-primary text-xs text-[color:var(--Neutral400)]"
  >
    {/* Status strip */}
    <div className="h-[9px] w-full bg-[var(--DarkNeutral100)]" />

    <div className="px-5 pt-[11px]">
      {/* Title */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <FaCog aria-hidden className="text-[15px]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-[18px] flex items-center gap-2 text-2xs text-[color:var(--Neutral500)]">
        <FaChevronUp aria-hidden className="text-[8px]" />
        <span className="font-primary-bold">From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="mt-[75px] flex items-center gap-1.5">
        <FaChevronUp aria-hidden className="text-[10px]" />
        <span className="font-primary-bold">Add New Design</span>
      </div>

      <FieldLabel className="mt-7">Personal Access Token</FieldLabel>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(fieldClass, "mt-2.5 h-9 border")}
      />

      <FieldLabel className="mt-[11px]">Design URL</FieldLabel>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(fieldClass, "mt-[9px] h-[37px] border-2")}
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
          >
            {action}
          </button>
        ))}
      </div>

      <div className="mt-[47px] font-primary-bold">Recent Breakdowns</div>
    </div>
  </div>
);

const actions = ["Awesome", "Prepare"];

const fieldClass =
  "w-full bg-[var(--DarkNeutral200)] border-[color:var(--DarkNeutral800)] px-[19px] text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)] outline-none";

const FieldLabel = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div
    className={cx(
      "flex items-center gap-6 text-2xs text-[color:var(--DarkNeutral800)]",
      className
    )}
  >
    <span className="font-primary-bold">{children}</span>
    <FaInfoCircle aria-hidden className="text-[15px]" />
  </div>
);
