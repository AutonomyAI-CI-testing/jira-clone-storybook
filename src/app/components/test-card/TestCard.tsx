import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const Field = ({
  label,
  placeholder,
  textClassName,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] font-semibold leading-[13.92px]">
        {label}
      </span>
      <HiOutlineInformationCircle aria-hidden size={15} className="shrink-0" />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] px-[18px] py-[11px] font-semibold outline-none",
        textClassName,
        inputClassName
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-[Inter,sans-serif] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        UI magician Agent
      </span>
      <HiOutlineCog aria-hidden size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <HiChevronUp aria-hidden size={12} className="shrink-0" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[59px] flex items-center gap-3 py-[15px] text-[#b2b2b1]">
      <HiChevronUp aria-hidden size={14} className="shrink-0" />
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-[13px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      textClassName="text-[11.5px] placeholder:text-[#737470]"
      inputClassName="border border-[#a5adad]"
    />

    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      textClassName="text-[10.5px] placeholder:text-[#71726e]"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mt-5 flex justify-center gap-[15px]">
      {["Awesome", "Prepare"].map((action) => (
        <button
          key={action}
          type="button"
          className="h-10 w-[87px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-[45px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  textClassName: string;
  inputClassName: string;
  className?: string;
}
