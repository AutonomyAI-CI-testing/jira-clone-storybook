import cx from "classix";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Built as a smoke test: self-contained, takes no props, and no route
 * reaches it.
 */

const FieldLabel = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}): JSX.Element => (
  <div
    className={cx(
      "flex items-center gap-1.5 text-[color:var(--DarkNeutral800)]",
      className
    )}
  >
    <span className="text-2xs">{children}</span>
    <HiOutlineInformationCircle aria-hidden="true" size={15} />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]"
    type="button"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral-100)] px-5 pb-16 pt-5 font-primary"
  >
    <div className="flex items-center justify-between text-[color:var(--DarkNeutral900)]">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <HiOutlineCog aria-hidden="true" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[color:var(--DarkNeutral700)]">
      <HiOutlineChevronUp aria-hidden="true" size={12} />
      <span className="text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-2 text-[color:var(--DarkNeutral900)]">
      <HiOutlineChevronUp aria-hidden="true" size={14} />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <FieldLabel className="mt-7">Personal Access Token</FieldLabel>
    <input
      aria-label="Personal Access Token"
      className="mt-3 h-[36px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      type="text"
    />

    <FieldLabel className="mt-3">Design URL</FieldLabel>
    <input
      aria-label="Design URL"
      className="mt-3 h-[37px] w-full rounded border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
      placeholder="https://www.figma.com/file/:"
      type="text"
    />

    <div className="mt-5 flex gap-4 pl-6">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <p className="mt-12 font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
      Recent Breakdowns
    </p>
  </div>
);
