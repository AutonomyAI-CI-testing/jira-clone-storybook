import type { ReactNode } from "react";
import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" panel.
 * Self-contained on purpose — no props, no state, no handlers — so it can be
 * rendered on its own without touching the app's routes or data layer.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#0d0d0d] p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className={cx(TEXT_13, "font-primary-bold text-[#b5b5b5]")}>
        UI magician Agent
      </span>
      <HiOutlineCog aria-hidden className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 pl-1.5">
      <HiChevronUp aria-hidden className="h-[10px] w-[10px] text-[#c9c9c9]" />
      <span
        className={cx(TEXT_11, "truncate font-primary-bold text-[#8b9291]")}
      >
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 pl-1.5">
      <HiChevronUp aria-hidden className="h-3.5 w-3.5 text-[#c9c9c9]" />
      <span className={cx(TEXT_13, "font-primary-bold text-[#b2b2b1]")}>
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex flex-col gap-[10px]">
      <FieldLabel>Personal Access Token</FieldLabel>
      <FieldInput
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-[39px] border border-[#a5adad]"
      />
    </div>

    <div className="mt-[10px] flex flex-col gap-[11px]">
      <FieldLabel>Design URL</FieldLabel>
      <FieldInput
        placeholder="https://www.figma.com/file/:"
        className="h-[41px] border-2 border-[#929291]"
      />
    </div>

    <div className="mt-[17px] flex gap-[15px] pl-[23px]">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className={cx(TEXT_13, "mt-[45px] font-primary-bold text-[#b0b0b0]")}>
      Recent Breakdowns
    </h2>
  </div>
);

const TEXT_11 = "text-[11.5px] leading-[13.92px]";
const TEXT_13 = "text-[13.5px] leading-[16.34px]";

const BUTTON = cx(
  "h-10 w-[87px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]",
  TEXT_11
);

const FieldLabel = ({ children }: { children: ReactNode }): JSX.Element => (
  <span className="flex items-center gap-2">
    <span className={cx(TEXT_11, "font-primary-bold text-[#a4a4a3]")}>
      {children}
    </span>
    <HiOutlineInformationCircle
      aria-hidden
      className="h-[15px] w-[15px] text-[#e6e6e6]"
    />
  </span>
);

const FieldInput = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}): JSX.Element => (
  <input
    type="text"
    readOnly
    placeholder={placeholder}
    className={cx(
      "w-full bg-[#272822] px-[19px] font-primary-bold text-[#d7d7d7] outline-none placeholder:text-[#737470]",
      TEXT_11,
      className
    )}
  />
);
