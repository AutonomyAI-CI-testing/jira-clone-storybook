import cx from "classix";
import { IoChevronUpOutline } from "react-icons/io5";
import { MdInfoOutline, MdSettings } from "react-icons/md";

const fieldClassName =
  "flex w-[211px] items-center bg-[var(--DarkNeutral250)] px-[19px] font-primary-bold text-[color:var(--DarkNeutral600)]";

const actionClassName =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

interface CollapsibleRowProps {
  label: string;
  className?: string;
  iconClassName: string;
  textClassName: string;
}

const CollapsibleRow = ({
  label,
  className,
  iconClassName,
  textClassName,
}: CollapsibleRowProps) => (
  <div className={cx("flex items-center gap-[10px]", className)}>
    <IoChevronUpOutline size={14} className={iconClassName} />
    <span className={cx("font-primary-bold", textClassName)}>{label}</span>
  </div>
);

const FieldLabel = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <div className={cx("flex items-center gap-[10px]", className)}>
    <span className="font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral800)]">
      {children}
    </span>
    <MdInfoOutline size={15} className="text-[color:var(--DarkNeutral700)]" />
  </div>
);

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral100)]"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

      <div className="flex flex-col px-5 pt-[11px]">
        <div className="flex items-center justify-between">
          <p className="font-primary-bold text-[13.5px] text-[color:var(--DarkNeutral900)]">
            UI magician Agent
          </p>
          <MdSettings
            size={16}
            className="text-[color:var(--DarkNeutral900)]"
          />
        </div>

        <CollapsibleRow
          className="mt-[18px]"
          label="From entire frame to a singl…"
          iconClassName="text-[color:var(--DarkNeutral700)]"
          textClassName="text-[11.5px] text-[color:var(--DarkNeutral700)]"
        />

        <CollapsibleRow
          className="mt-[77px]"
          label="Add New Design"
          iconClassName="text-[color:var(--DarkNeutral800)]"
          textClassName="text-[13.5px] text-[color:var(--DarkNeutral800)]"
        />

        <FieldLabel className="mt-[28px]">Personal Access Token</FieldLabel>

        <div
          className={cx(
            fieldClassName,
            "mt-[12px] h-[36px] border border-[color:var(--DarkNeutral800)] text-[11.5px]"
          )}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>

        <FieldLabel className="mt-[11px]">Design URL</FieldLabel>

        <div
          className={cx(
            fieldClassName,
            "mt-[11px] h-[37px] border-2 border-[color:var(--DarkNeutral600)] text-[10.5px]"
          )}
        >
          https://www.figma.com/file/:
        </div>

        <div className="ml-[24px] mt-[22px] flex gap-[17px]">
          {ACTION_LABELS.map((label) => (
            <button key={label} type="button" className={actionClassName}>
              {label}
            </button>
          ))}
        </div>

        <p className="mt-[46px] font-primary-bold text-[13.5px] text-[color:var(--DarkNeutral900)]">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
}
