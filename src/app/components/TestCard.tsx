import type { ReactNode } from "react";
import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const ChevronRow = ({
  children,
  iconSize,
  className,
  textClassName,
}: {
  children: ReactNode;
  iconSize: number;
  className?: string;
  textClassName: string;
}): JSX.Element => (
  <div className={cx("flex items-center", className)}>
    <HiChevronUp size={iconSize} className="shrink-0" aria-hidden />
    <span className={textClassName}>{children}</span>
  </div>
);

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}): JSX.Element => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[#a4a4a3]"
        aria-hidden
      />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="shrink-0 text-[#b5b5b5]" aria-hidden />
    </div>

    <ChevronRow
      iconSize={8}
      className="mt-[18px] gap-[9px] pl-[3px] text-[#8b9291]"
      textClassName="truncate text-[11.5px] leading-[13.92px]"
    >
      From entire frame to a singl...
    </ChevronRow>

    <ChevronRow
      iconSize={12}
      className="mt-[77px] gap-[5px] pl-[6px] text-[#b2b2b1]"
      textClassName="font-primary-bold text-[13.5px] leading-[16.34px]"
    >
      Add New Design
    </ChevronRow>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[20px] flex gap-[15px] pl-[23px]">
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

    <span className="mt-[49px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
