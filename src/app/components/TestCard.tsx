import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

interface FieldProps {
  label: string;
  placeholder: string;
  strongBorder?: boolean;
}

const Field = ({ label, placeholder, strongBorder = false }: FieldProps) => {
  const boxClass = strongBorder
    ? "mt-2 flex h-[41px] w-full items-center rounded border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-3"
    : "mt-2 flex h-[39px] w-full items-center rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-3";

  return (
    <div className="px-5">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
          {label}
        </span>
        <IoInformationCircleOutline
          aria-hidden="true"
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <div className={boxClass}>
        <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral600)]">
          {placeholder}
        </span>
      </div>
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  const headingClass =
    "font-primary-bold text-xs text-[color:var(--DarkNeutral900)]";
  const buttonClass =
    "h-[37px] flex-1 rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]";

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral100)]"
    >
      <div className="h-[9px] w-full shrink-0 bg-[var(--DarkNeutral0)]" />

      <div className="flex items-center justify-between px-5 pt-[11px]">
        <span className={headingClass}>UI magician Agent</span>
        <IoSettingsOutline
          aria-hidden="true"
          size={16}
          className="text-[color:var(--DarkNeutral900)]"
        />
      </div>

      <div className="mt-[17px] flex items-center gap-2 px-5">
        <IoChevronUp
          aria-hidden="true"
          size={12}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
        <span className="truncate font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[60px] flex items-center gap-2 px-5">
        <IoChevronUp
          aria-hidden="true"
          size={14}
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
        />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-[24px]">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-[23px]">
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          strongBorder
        />
      </div>

      <div className="mt-[25px] flex gap-[18px] px-5">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[60px] px-5">
        <span className={headingClass}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
