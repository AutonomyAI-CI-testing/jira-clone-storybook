import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FieldLabel = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-5">
    <span className="text-2xs text-[color:var(--DarkNeutral800)]">
      {children}
    </span>
    <IoInformationCircleOutline
      size={15}
      className="text-[color:var(--DarkNeutral800)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const inputClass =
    "mt-3 h-9 w-full bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--DarkNeutral800)] placeholder:text-[color:var(--DarkNeutral500)]";
  const buttonClass =
    "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[color:var(--DarkNeutral600)]";

  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral100)] font-primary"
    >
      <div className="h-[9px] bg-[var(--DarkNeutral0)]" />

      <div className="px-5 pb-[62px] pt-[11px]">
        <div className="flex items-start justify-between">
          <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
            UI magician Agent
          </span>
          <IoSettingsOutline
            size={16}
            className="mt-0.5 text-[color:var(--DarkNeutral900)]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <IoChevronUp
            size={12}
            className="text-[color:var(--DarkNeutral700)]"
          />
          <span className="text-2xs text-[color:var(--DarkNeutral700)]">
            From entire frame to a singl…
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <IoChevronUp
            size={14}
            className="text-[color:var(--DarkNeutral900)]"
          />
          <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px]">
          <FieldLabel>Personal Access Token</FieldLabel>
        </div>

        <input
          readOnly
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={cx(
            inputClass,
            "border border-[color:var(--DarkNeutral800)]"
          )}
        />

        <div className="mt-3">
          <FieldLabel>Design URL</FieldLabel>
        </div>

        <input
          readOnly
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className={cx(
            inputClass,
            "border-2 border-[color:var(--DarkNeutral700)]"
          )}
        />

        <div className="mt-[22px] flex justify-end gap-[17px]">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>

        <p className="mt-[47px] font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
