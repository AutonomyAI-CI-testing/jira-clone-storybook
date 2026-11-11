import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const labelClass =
  "text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]";

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

const Field = ({
  label,
  placeholder,
  className = "",
  inputClassName = "",
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className={labelClass}>{label}</span>
      <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-[11px] w-[211px] bg-[#272822] font-semibold outline-none placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 font-[Inter,system-ui,sans-serif]"
  >
    <div className="flex items-center justify-between pt-5">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" aria-hidden />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp size={14} className="shrink-0 text-[#b2b2b1]" aria-hidden />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-7"
      inputClassName="h-9 border border-[#a5adad] text-[11.5px]"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px]"
      inputClassName="h-[37px] border-2 border-[#929291] text-[10.5px]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
