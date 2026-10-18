import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldLabelClassName =
  "font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]";

const inputBaseClassName = "w-full bg-[#272822] px-[18px] outline-none";

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const buttonLabels = ["Awesome", "Prepare"];

const Field = ({
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className={fieldLabelClassName}>{label}</span>
      <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={`${inputBaseClassName} mt-3 ${inputClassName}`}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
  className: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-3">
      <FiChevronUp size={14} className="shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <FiChevronUp size={16} className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-[36px] border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[11.5px] placeholder:text-[#737470]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      {buttonLabels.map((label) => (
        <button key={label} type="button" className={buttonClassName}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
