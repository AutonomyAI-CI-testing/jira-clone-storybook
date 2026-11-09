import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained, prop-less card built from the Figma frame
 * "Test Page - Simple (FOR TESTING)". It is a smoke test of the
 * build-and-preview loop, so spacing, colour and type approximate the
 * reference rather than reproducing it exactly.
 *
 * The reference's dark ground and rust buttons have no semantic role in
 * this repo's token set (the brand role is blue), so the card pins raw
 * palette values as arbitrary values - the escape hatch the design
 * system allows when no role exists.
 */

interface FieldProps {
  label: string;
  value: string;
  className?: string;
}

const Field = ({ label, value, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span>{label}</span>
      <FiInfo aria-hidden="true" size={18} className="shrink-0" />
    </div>
    <div className="mt-3 flex h-12 items-center rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-8 text-lg text-[color:var(--DarkNeutral800)]">
      {value}
    </div>
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="min-w-[168px] rounded-md bg-[var(--Orange800)] px-8 py-5 text-lg text-[color:var(--DarkNeutral1000)]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col bg-[var(--DarkNeutral100)] px-10 pt-10 pb-28 font-primary text-base text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={26} className="shrink-0" />
    </div>

    <div className="mt-7 flex items-center gap-2 text-[color:var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden="true" size={22} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-40 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" size={24} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <Field
      className="mt-20"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-8"
      label="Design URL"
      value="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

export default TestCard;
