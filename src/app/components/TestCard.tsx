import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputBaseClass =
  "mt-3 block h-9 w-full rounded-sm bg-[#272822] px-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]";

const buttonClass =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pb-5 pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings className="mt-[1px] shrink-0 text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <FiChevronUp className="shrink-0 text-[#8b9291]" size={12} />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-[77px] flex items-center gap-[5px] text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
      <FiChevronUp className="shrink-0" size={16} />
      Add New Design
    </h2>

    <Field label="Personal Access Token" className="mt-[28px]">
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(inputBaseClass, "border border-[#a5adad]")}
      />
    </Field>

    <Field label="Design URL" className="mt-[11px]">
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(inputBaseClass, "border-2 border-[#929291]")}
      />
    </Field>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, className, children }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <FiInfo className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>
    {children}
  </div>
);

interface FieldProps {
  label: string;
  className: string;
  children: ReactNode;
}

const CardButton = ({ children }: CardButtonProps) => (
  <button type="button" className={buttonClass}>
    {children}
  </button>
);

interface CardButtonProps {
  children: string;
}
