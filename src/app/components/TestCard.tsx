import { ReactNode } from "react";
import cx from "classix";
import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Static reproduction of a Figma frame — a dark "UI magician Agent" panel with
 * a header, a collapsed summary row, an "Add New Design" section and a footer
 * heading. Self-contained: no props, no state.
 *
 * The frame's colours have no equivalent in the design system's token set, so
 * they are kept as arbitrary values confined to this file.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <RiSettings3Line size={16} className="shrink-0" aria-hidden />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <RiArrowUpSLine size={16} className="shrink-0" aria-hidden />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-[75px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <RiArrowUpSLine size={18} className="shrink-0" aria-hidden />
        <span className="font-primary-bold">Add New Design</span>
      </h2>

      <Field
        className="mt-[28px]"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        borderClassName="border border-[#a5adad]"
      />

      <Field
        className="mt-[11px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        borderClassName="border-2 border-[#929291]"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  className,
  label,
  placeholder,
  borderClassName,
}: FieldProps) => (
  <>
    <div className={cx("flex items-center gap-[6px]", className)}>
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <RiInformationLine
        size={15}
        className="shrink-0 text-[#a4a4a3]"
        aria-hidden
      />
    </div>
    <div
      className={cx(
        "mt-3 flex h-9 items-center bg-[#272822] px-[18px]",
        borderClassName,
      )}
    >
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
        {placeholder}
      </span>
    </div>
  </>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}
