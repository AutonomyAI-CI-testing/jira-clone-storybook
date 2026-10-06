import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Self-contained smoke test: no props, no state, no app data. Every value is
 * pinned to the design's own palette with Tailwind arbitrary values, because
 * the panel is a fixed dark surface that deliberately sits outside the app's
 * semantic token ramp (see the task plan for the extracted style guide).
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-[#000000] px-5 py-5">
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={8} className="shrink-0 text-[#b5b5b5]" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp size={12} className="shrink-0 text-[#b5b5b5]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <FieldLabel className="mt-[28px]" labelClassName="text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[18px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <FieldLabel className="mt-[11px]" labelClassName="text-[#a3a3a2]">
      Design URL
    </FieldLabel>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
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

const FieldLabel = ({
  className,
  labelClassName,
  children,
}: FieldLabelProps) => (
  <div className={cx("flex items-center justify-between", className)}>
    <span
      className={cx(
        "font-primary-bold text-[11.5px] leading-[13.92px]",
        labelClassName
      )}
    >
      {children}
    </span>
    <FiInfo size={15} className="shrink-0 text-[#b5b5b5]" />
  </div>
);

interface FieldLabelProps {
  className: string;
  labelClassName: string;
  children: ReactNode;
}

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: ReactNode;
}
