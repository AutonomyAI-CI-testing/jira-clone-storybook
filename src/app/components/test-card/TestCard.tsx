import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained and prop-free by request, so the frame's palette is written
 * as literal values here instead of design-system tokens — a scoped exception
 * for this component only.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 py-5">
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings size={15} className="text-[#b5b5b5]" aria-hidden />
    </div>

    <ChevronRow className="mt-[18px] text-[#8b9291]">
      <span className="truncate text-[11.5px] font-semibold">
        From entire frame to a singl...
      </span>
    </ChevronRow>

    <ChevronRow className="mt-[77px] text-[#b2b2b1]">
      <h2 className="text-[13.5px] font-semibold">Add New Design</h2>
    </ChevronRow>

    <LabelWithInfo
      htmlFor="personal-access-token"
      className="mt-[28px] text-[#a4a4a3]"
    >
      Personal Access Token
    </LabelWithInfo>
    <input
      id="personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
    />

    <LabelWithInfo htmlFor="design-url" className="mt-[11px] text-[#a3a3a2]">
      Design URL
    </LabelWithInfo>
    <input
      id="design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ChevronRow = ({ className = "", children }: ChevronRowProps) => (
  <div className={cx("flex items-center gap-2", className)}>
    <FiChevronUp size={12} className="shrink-0" aria-hidden />
    {children}
  </div>
);

const LabelWithInfo = ({
  htmlFor,
  className = "",
  children,
}: LabelWithInfoProps) => (
  <label
    htmlFor={htmlFor}
    className={cx(
      "flex items-center gap-2 text-[11.5px] font-semibold",
      className
    )}
  >
    {children}
    <FiInfo size={15} className="shrink-0" aria-hidden />
  </label>
);

const CardButton = ({ children }: CardButtonProps) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

interface ChevronRowProps {
  className?: string;
  children: ReactNode;
}

interface LabelWithInfoProps {
  htmlFor: string;
  className?: string;
  children: ReactNode;
}

interface CardButtonProps {
  children: ReactNode;
}
