import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS: FieldProps[] = [
  {
    id: "testElem-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxx",
    inputClassName: "border border-[var(--Neutral500)]",
    className: "mt-[28px]",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    inputClassName: "border-2 border-[var(--Neutral500)]",
    className: "mt-[11px]",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]"
      >
        {label}
      </label>
      <FiInfo
        size={15}
        className="text-[var(--DarkNeutral700)]"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`mt-3 w-full bg-[var(--DarkNeutral250)] px-[18px] py-[10px] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--Neutral400)] placeholder:text-[var(--DarkNeutral500)] ${inputClassName}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
        UI magician Agent
      </h1>
      <FiSettings
        size={16}
        className="text-[var(--Neutral400)]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp
        size={9}
        className="shrink-0 text-[var(--DarkNeutral700)]"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp
        size={12}
        className="shrink-0 text-[var(--Neutral400)]"
        aria-hidden="true"
      />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
        Add New Design
      </h2>
    </div>

    {FIELDS.map((field) => (
      <Field key={field.id} {...field} />
    ))}

    <div className="mt-[23px] flex gap-[17px] pl-6">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
  className: string;
}
