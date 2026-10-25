import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const COLLAPSED_LABEL = "From entire frame to a singl...";
const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h2>UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={16} />
    </div>

    <SectionHeader
      className="mt-[18px] text-[11.5px] leading-[13.92px] text-[#8b9291]"
      iconSize={10}
      label={COLLAPSED_LABEL}
    />

    <SectionHeader
      className="mt-[77px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]"
      iconSize={12}
      label="Add New Design"
    />

    <Field
      className="mt-[28px]"
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-9 border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      className="mt-[11px]"
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

const SectionHeader = ({
  label,
  iconSize,
  className,
}: SectionHeaderProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <FiChevronUp aria-hidden="true" size={iconSize} className="shrink-0" />
    <span className="min-w-0 truncate">{label}</span>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <FiInfo aria-hidden="true" size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className={cx(
        "mt-[12px] w-full bg-[#272822] px-[19px] outline-none",
        inputClassName
      )}
    />
  </div>
);

interface SectionHeaderProps {
  label: string;
  iconSize: number;
  className?: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
  className?: string;
}
