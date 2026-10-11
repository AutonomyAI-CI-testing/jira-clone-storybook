import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-[20px] pb-[50px] pt-[20px] text-[13.5px] font-semibold leading-[16.34px] [font-family:Inter,sans-serif]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <FiSettings
          size={16}
          className="shrink-0 text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <FiChevronUp size={8} className="shrink-0" aria-hidden="true" />
        <span className="truncate text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-[5px] text-[#b2b2b1]">
        <FiChevronUp size={12} className="shrink-0" aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      <FieldLabel
        label="Personal Access Token"
        className="mt-[23px] text-[#a4a4a3]"
      />
      <Field
        value="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[11px] h-[36px] border border-[#a5adad] px-[19px]"
        valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
      />

      <FieldLabel label="Design URL" className="mt-[11px] text-[#a3a3a2]" />
      <Field
        value="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] border-2 border-[#929291] px-[20px]"
        valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[17px]">
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>

      <h2 className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

const FieldLabel = ({ label, className }: FieldLabelProps): JSX.Element => {
  return (
    <div className={cx("flex items-center gap-[6px]", className)}>
      <span className="text-[11.5px] leading-[13.92px]">{label}</span>
      <FiInfo size={15} className="shrink-0" aria-hidden="true" />
    </div>
  );
};

interface FieldLabelProps {
  label: string;
  className?: string;
}

const Field = ({
  value,
  className,
  valueClassName,
}: FieldProps): JSX.Element => {
  return (
    <div className={cx("flex w-full items-center bg-[#272822]", className)}>
      <span className={valueClassName}>{value}</span>
    </div>
  );
};

interface FieldProps {
  value: string;
  className?: string;
  valueClassName?: string;
}

const CardButton = ({ label }: CardButtonProps): JSX.Element => {
  return (
    <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
      {label}
    </div>
  );
};

interface CardButtonProps {
  label: string;
}
