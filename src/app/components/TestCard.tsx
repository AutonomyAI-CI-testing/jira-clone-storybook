import cx from "classix";
import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

const ICON_CLASS = "shrink-0 text-[#c9c9c9]";

const ChevronRow = ({
  label,
  chevronSize,
  gapClassName,
  labelClassName,
}: ChevronRowProps): JSX.Element => (
  <div className={cx("flex items-center", gapClassName)}>
    <LuChevronUp
      aria-hidden
      className={ICON_CLASS}
      size={chevronSize}
      strokeWidth={2.5}
    />
    <span className={labelClassName}>{label}</span>
  </div>
);

const FieldLabel = ({ label }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-5">
    <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      {label}
    </span>
    <LuInfo aria-hidden className={ICON_CLASS} size={15} />
  </div>
);

const Field = ({ placeholder, className }: FieldProps): JSX.Element => (
  <input
    readOnly
    placeholder={placeholder}
    className={cx(
      "h-9 w-full bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#e6e6e6] outline-none placeholder:text-[#737470]",
      className
    )}
  />
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 font-[family-name:Inter,sans-serif] font-semibold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <LuSettings aria-hidden className={ICON_CLASS} size={16} />
    </div>

    <div className="mt-[18px]">
      <ChevronRow
        label="From entire frame to a singl..."
        chevronSize={8}
        gapClassName="gap-[9px]"
        labelClassName="text-[11.5px] leading-[13.92px] text-[#8b9291]"
      />
    </div>

    <div className="mt-[77px]">
      <ChevronRow
        label="Add New Design"
        chevronSize={12}
        gapClassName="gap-[5px]"
        labelClassName="text-[13.5px] leading-[16.34px] text-[#b2b2b1]"
      />
    </div>

    <div className="mt-[28px]">
      <FieldLabel label="Personal Access Token" />
    </div>

    <Field
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 border border-[#a5adad]"
    />

    <div className="mt-[11px]">
      <FieldLabel label="Design URL" />
    </div>

    <Field
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

interface ChevronRowProps {
  label: string;
  chevronSize: number;
  gapClassName: string;
  labelClassName: string;
}

interface FieldLabelProps {
  label: string;
}

interface FieldProps {
  placeholder: string;
  className?: string;
}

interface CardButtonProps {
  children: string;
}
