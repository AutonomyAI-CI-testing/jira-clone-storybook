import { MdInfoOutline, MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

interface FieldLabelProps {
  htmlFor: string;
  label: string;
}

const FieldLabel = ({ htmlFor, label }: FieldLabelProps): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor={htmlFor}
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]"
      >
        {label}
      </label>
      <MdInfoOutline
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
    </div>
  );
};

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <MdOutlineSettings
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </div>

      {/* Collapsible row */}
      <div className="mt-[18px] flex items-center gap-[5px]">
        <RiArrowUpSLine
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral600)]"
        />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <RiArrowUpSLine
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px]">
        <FieldLabel htmlFor="test-card-token" label="Personal Access Token" />
        <input
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral500)] placeholder:text-[var(--DarkNeutral500)]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <FieldLabel htmlFor="test-card-url" label="Design URL" />
        <input
          id="test-card-url"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[18px] text-[10.5px] leading-[12.71px] text-[var(--DarkNeutral500)] placeholder:text-[var(--DarkNeutral500)]"
        />
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral600)]"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[47px]">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
