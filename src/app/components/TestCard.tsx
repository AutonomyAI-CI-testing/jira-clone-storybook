import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a self-contained reproduction of the "UI magician
 * Agent" panel from the referenced Figma frame. Presentational only — it takes
 * no props and is not wired into any screen.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={14} className="shrink-0 text-[#8b9291]" />
      <span className="whitespace-nowrap text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <FiChevronUp size={16} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[9px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <PanelField
      className="mt-[12px] h-[36px] border border-[#a5adad]"
      text="figd_xxxxxxxxxxxxxxxxxx"
      textClassName="text-[11.5px] text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[9px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" />
    </div>
    <PanelField
      className="mt-[11px] h-[37px] border-2 border-[#929291]"
      text="https://www.figma.com/file/:"
      textClassName="text-[10.5px] text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const PanelField = ({
  className = "",
  text,
  textClassName = "",
}: PanelFieldProps): JSX.Element => (
  <div
    className={cx(
      "flex w-[211px] items-center bg-[#272822] px-[19px]",
      className
    )}
  >
    <span className={cx("leading-[13.92px]", textClassName)}>{text}</span>
  </div>
);

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

interface PanelFieldProps {
  className?: string;
  text: string;
  textClassName?: string;
}

interface PanelButtonProps {
  label: string;
}
