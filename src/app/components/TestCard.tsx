import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const Field = ({
  className = "",
  fieldClassName,
  label,
  labelClassName,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div
      className={`flex items-center gap-2 font-semibold leading-[13.92px] ${labelClassName}`}
    >
      <span>{label}</span>
      <FiInfo size={15} aria-hidden />
    </div>
    <div
      className={`mt-3 flex w-[211px] items-center bg-[#272822] px-4 font-semibold ${fieldClassName}`}
    >
      {placeholder}
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#0d0d0d] px-5 pb-[62px] pt-5">
    <div className="flex items-center justify-between text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
      <span>UI magician Agent</span>
      <FiSettings size={16} aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2 whitespace-nowrap text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
      <FiChevronUp size={12} aria-hidden />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-2 text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
      <FiChevronUp size={14} aria-hidden />
      <span>Add New Design</span>
    </div>

    <Field
      className="mt-7"
      fieldClassName="h-[36px] border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470]"
      label="Personal Access Token"
      labelClassName="text-[11.5px] text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-3"
      fieldClassName="h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e]"
      label="Design URL"
      labelClassName="text-[11.5px] text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="ml-6 mt-[22px] flex gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

interface FieldProps {
  className?: string;
  fieldClassName: string;
  label: string;
  labelClassName: string;
  placeholder: string;
}
