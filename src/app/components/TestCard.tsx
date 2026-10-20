import type { ReactNode } from "react";
import cx from "classix";
import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Standalone smoke-test card built from the "UI magician Agent" Figma frame.
 * Self-contained on purpose: no props, no state, and not wired into the app.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-sm font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <RiSettings3Line
        className="h-4 w-3.5 text-[#b5b5b5]"
        aria-hidden="true"
      />
    </div>

    <ChevronRow
      className="mt-3.5"
      iconClassName="h-2 w-2 text-[#8b9291]"
      textClassName="text-2xs text-[#8b9291]"
    >
      From entire frame to a singl...
    </ChevronRow>

    <ChevronRow
      className="mt-20"
      iconClassName="h-3 w-3 text-[#b2b2b1]"
      textClassName="text-sm text-[#b2b2b1]"
    >
      Add New Design
    </ChevronRow>

    <FieldLabel className="mt-6" colorClassName="text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-2xs font-primary-bold text-[#737470] placeholder:text-[#737470]"
    />

    <FieldLabel className="mt-3" colorClassName="text-[#a3a3a2]">
      Design URL
    </FieldLabel>
    <input
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex justify-between px-1">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-sm font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const actionClassName = cx(
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]",
  "hover:bg-[#9a4420] active:bg-[#6f3113]"
);

const ChevronRow = ({
  className,
  iconClassName,
  textClassName,
  children,
}: ChevronRowProps) => (
  <div className={cx("flex items-center gap-2.5", className)}>
    <RiArrowUpSLine className={iconClassName} aria-hidden="true" />
    <span className={cx("font-primary-bold", textClassName)}>{children}</span>
  </div>
);

const FieldLabel = ({ className, colorClassName, children }: FieldLabelProps) => (
  <div className={cx("flex items-center gap-4", className)}>
    <span className={cx("text-2xs font-primary-bold", colorClassName)}>
      {children}
    </span>
    <RiInformationLine
      className={cx("h-[15px] w-[15px]", colorClassName)}
      aria-hidden="true"
    />
  </div>
);

interface ChevronRowProps {
  className?: string;
  iconClassName: string;
  textClassName: string;
  children: ReactNode;
}

interface FieldLabelProps {
  className?: string;
  colorClassName: string;
  children: ReactNode;
}

export default TestCard;
