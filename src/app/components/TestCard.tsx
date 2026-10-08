import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}

const Field = ({
  className = "",
  label,
  placeholder,
  borderClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>{label}</span>
      <FiInfo size={15} aria-hidden />
    </div>
    <div
      className={`mt-3 flex h-[36px] w-[211px] items-center bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] ${borderClassName}`}
    >
      {placeholder}
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#0d0d0d] px-5 pb-[62px] pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
      <span>UI magician Agent</span>
      <FiSettings size={16} aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <FiChevronUp size={12} aria-hidden />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <FiChevronUp size={14} aria-hidden />
      <span>Add New Design</span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      borderClassName="border border-[#a5adad]"
    />

    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      borderClassName="border-2 border-[#929291]"
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
